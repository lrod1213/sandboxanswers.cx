/**
 * Sync missing locale strings from locales/en.json into target locale files
 * using the cxconnect.ai Language API.
 *
 * API docs: https://docs.cxconnect.ai/api-reference/language/translate
 * Endpoint: POST {CXCONNECT_TRANSLATE_API_URL}/language/translate
 *
 * Usage:
 *   CXCONNECT_TRANSLATE_API_TOKEN=... pnpm translate:sync
 *   pnpm translate:sync -- --locale es --dry-run
 */

import {
	existsSync,
	mkdirSync,
	readFileSync,
	readdirSync,
	writeFileSync,
} from "node:fs";
import { basename, dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LOCALES_DIR = join(ROOT, "locales");
const SOURCE_LOCALE = "en";
const DEFAULT_API_URL = "https://api.cxconnect.ai";
const DEFAULT_BATCH_SIZE = 40;

type JsonValue = string | number | boolean | null | JsonObject | JsonValue[];
type JsonObject = { [key: string]: JsonValue };

type TranslateDocument = {
	language?: string;
	mime_type?: string;
	value: string | JsonObject;
};

type TranslateResponse = {
	results?: Record<string, TranslateDocument>;
};

type CliOptions = {
	dryRun: boolean;
	locales: string[];
	batchSize: number;
};

function parseArgs(argv: string[]): CliOptions {
	const options: CliOptions = {
		dryRun: false,
		locales: [],
		batchSize: DEFAULT_BATCH_SIZE,
	};

	for (let i = 0; i < argv.length; i++) {
		const arg = argv[i];
		if (arg === "--dry-run") {
			options.dryRun = true;
			continue;
		}
		if (arg === "--locale" && argv[i + 1]) {
			options.locales.push(argv[++i].replace(/\.json$/, ""));
			continue;
		}
		if (arg === "--batch-size" && argv[i + 1]) {
			options.batchSize = Number.parseInt(argv[++i], 10);
		}
	}

	return options;
}

function isPlainObject(value: unknown): value is JsonObject {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readJsonFile(path: string): JsonObject {
	const raw = readFileSync(path, "utf8");
	const parsed: unknown = JSON.parse(raw);
	if (!isPlainObject(parsed)) {
		throw new Error(`Expected JSON object in ${path}`);
	}
	return parsed;
}

function writeJsonFile(path: string, value: JsonObject) {
	writeFileSync(path, `${JSON.stringify(value, null, "\t")}\n`, "utf8");
}

function isMissingLeaf(target: JsonValue | undefined): boolean {
	return target === undefined || target === null || target === "";
}

function collectMissing(source: JsonValue, target: JsonValue | undefined): JsonValue | undefined {
	if (typeof source === "string") {
		return isMissingLeaf(target) ? source : undefined;
	}

	if (Array.isArray(source)) {
		if (isMissingLeaf(target) || !Array.isArray(target)) {
			return source;
		}
		return undefined;
	}

	if (isPlainObject(source)) {
		const targetObject = isPlainObject(target) ? target : {};
		const patch: JsonObject = {};

		for (const [key, value] of Object.entries(source)) {
			const missing = collectMissing(value, targetObject[key]);
			if (missing !== undefined) {
				patch[key] = missing;
			}
		}

		return Object.keys(patch).length > 0 ? patch : undefined;
	}

	return isMissingLeaf(target) ? source : undefined;
}

function flattenStrings(
	value: JsonValue,
	prefix = "",
	out: Record<string, string> = {},
): Record<string, string> {
	if (typeof value === "string") {
		if (prefix) out[prefix] = value;
		return out;
	}

	if (isPlainObject(value)) {
		for (const [key, nested] of Object.entries(value)) {
			const path = prefix ? `${prefix}.${key}` : key;
			flattenStrings(nested, path, out);
		}
	}

	return out;
}

function unflattenStrings(flat: Record<string, string>): JsonObject {
	const root: JsonObject = {};

	for (const [path, text] of Object.entries(flat)) {
		const parts = path.split(".");
		let cursor: JsonObject = root;

		for (let i = 0; i < parts.length; i++) {
			const part = parts[i];
			const isLeaf = i === parts.length - 1;

			if (isLeaf) {
				cursor[part] = text;
				continue;
			}

			const next = cursor[part];
			if (!isPlainObject(next)) {
				cursor[part] = {};
			}
			cursor = cursor[part] as JsonObject;
		}
	}

	return root;
}

function deepMerge(base: JsonObject, patch: JsonObject): JsonObject {
	const merged: JsonObject = { ...base };

	for (const [key, value] of Object.entries(patch)) {
		const existing = merged[key];

		if (isPlainObject(value) && isPlainObject(existing)) {
			merged[key] = deepMerge(existing, value);
			continue;
		}

		merged[key] = value;
	}

	return merged;
}

function chunkRecord<T>(record: Record<string, T>, size: number): Record<string, T>[] {
	const entries = Object.entries(record);
	const chunks: Record<string, T>[] = [];

	for (let i = 0; i < entries.length; i += size) {
		chunks.push(Object.fromEntries(entries.slice(i, i + size)));
	}

	return chunks;
}

function countLeaves(value: JsonValue): number {
	if (typeof value === "string") return 1;
	if (Array.isArray(value)) return value.length;
	if (isPlainObject(value)) {
		return Object.values(value).reduce((sum, nested) => sum + countLeaves(nested), 0);
	}
	return 0;
}

async function translateBatch(args: {
	apiUrl: string;
	token: string;
	sourceLocale: string;
	targetLocale: string;
	batch: Record<string, string>;
}): Promise<Record<string, string>> {
	const response = await fetch(`${args.apiUrl}/language/translate`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${args.token}`,
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({
			source: args.sourceLocale,
			targets: [args.targetLocale],
			document: {
				language: args.sourceLocale,
				mime_type: "application/json",
				value: args.batch,
			},
		}),
	});

	if (!response.ok) {
		const body = await response.text();
		throw new Error(
			`Translate API failed (${response.status}) for ${args.targetLocale}: ${body}`,
		);
	}

	const payload = (await response.json()) as TranslateResponse;
	const translated = payload.results?.[args.targetLocale]?.value;

	if (!translated || typeof translated !== "object" || Array.isArray(translated)) {
		throw new Error(
			`Translate API returned an unexpected payload for ${args.targetLocale}`,
		);
	}

	const flatTranslated: Record<string, string> = {};
	for (const [key, value] of Object.entries(translated)) {
		if (typeof value !== "string") {
			throw new Error(
				`Expected string translation for key "${key}" in ${args.targetLocale}`,
			);
		}
		flatTranslated[key] = value;
	}

	for (const key of Object.keys(args.batch)) {
		if (!(key in flatTranslated)) {
			throw new Error(`Missing translated key "${key}" for ${args.targetLocale}`);
		}
	}

	return flatTranslated;
}

function listTargetLocales(requested: string[]): string[] {
	if (!existsSync(LOCALES_DIR)) {
		throw new Error(`Locales directory not found: ${LOCALES_DIR}`);
	}

	const discovered = readdirSync(LOCALES_DIR)
		.filter((file) => extname(file) === ".json")
		.map((file) => basename(file, ".json"))
		.filter((locale) => locale !== SOURCE_LOCALE);

	const targets =
		requested.length > 0
			? requested.filter((locale) => locale !== SOURCE_LOCALE)
			: discovered;

	if (targets.length === 0) {
		throw new Error(
			`No target locale files found in ${LOCALES_DIR}. Add es.json, fr.json, etc.`,
		);
	}

	return targets;
}

async function syncLocale(args: {
	locale: string;
	source: JsonObject;
	options: CliOptions;
	apiUrl: string;
	token: string;
}) {
	const targetPath = join(LOCALES_DIR, `${args.locale}.json`);
	const existingTarget = existsSync(targetPath) ? readJsonFile(targetPath) : {};
	const missingTree = collectMissing(args.source, existingTarget);

	if (!missingTree || countLeaves(missingTree) === 0) {
		console.log(`✓ ${args.locale}.json is up to date`);
		return;
	}

	const flatMissing = flattenStrings(missingTree);
	const batches = chunkRecord(flatMissing, args.options.batchSize);

	console.log(
		`→ ${args.locale}.json: translating ${Object.keys(flatMissing).length} keys in ${batches.length} batch(es)`,
	);

	if (args.options.dryRun) {
		for (const key of Object.keys(flatMissing)) {
			console.log(`  [dry-run] ${key}`);
		}
		return;
	}

	let translatedFlat: Record<string, string> = {};

	for (const [index, batch] of batches.entries()) {
		console.log(
			`  batch ${index + 1}/${batches.length} (${Object.keys(batch).length} keys)`,
		);
		const batchResult = await translateBatch({
			apiUrl: args.apiUrl,
			token: args.token,
			sourceLocale: SOURCE_LOCALE,
			targetLocale: args.locale,
			batch,
		});
		translatedFlat = { ...translatedFlat, ...batchResult };
	}

	const translatedTree = unflattenStrings(translatedFlat);
	const nextTarget = deepMerge(existingTarget, translatedTree);

	if (!existsSync(LOCALES_DIR)) {
		mkdirSync(LOCALES_DIR, { recursive: true });
	}

	writeJsonFile(targetPath, nextTarget);
	console.log(`✓ updated ${targetPath}`);
}

async function main() {
	const options = parseArgs(process.argv.slice(2));
	const sourcePath = join(LOCALES_DIR, `${SOURCE_LOCALE}.json`);

	if (!existsSync(sourcePath)) {
		throw new Error(`Source locale file not found: ${sourcePath}`);
	}

	const token = process.env.CXCONNECT_TRANSLATE_API_TOKEN?.trim();
	if (!token && !options.dryRun) {
		throw new Error(
			"Missing CXCONNECT_TRANSLATE_API_TOKEN. Set it in your environment or use --dry-run.",
		);
	}

	const apiUrl =
		process.env.CXCONNECT_TRANSLATE_API_URL?.replace(/\/$/, "") ??
		DEFAULT_API_URL;

	const source = readJsonFile(sourcePath);
	const targets = listTargetLocales(options.locales);

	console.log(`Source: ${sourcePath}`);
	console.log(`Targets: ${targets.join(", ")}`);
	console.log(`API: ${apiUrl}`);

	for (const locale of targets) {
		await syncLocale({
			locale,
			source,
			options,
			apiUrl,
			token: token ?? "",
		});
	}
}

main().catch((error: unknown) => {
	const message = error instanceof Error ? error.message : String(error);
	console.error(`translate sync failed: ${message}`);
	process.exit(1);
});
