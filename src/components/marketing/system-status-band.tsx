import { useEffect, useState } from "react";

import { SectionBand } from "#/components/marketing/section-band.tsx";
import { siteConfig } from "#/config/site.ts";
import { cn } from "#/lib/utils.ts";

type StatusIndicator = "none" | "minor" | "major" | "critical";

type StatusSummary = {
	status: {
		description: string;
		indicator: StatusIndicator;
	};
	components?: Array<{
		name: string;
		status: string;
	}>;
	page?: {
		updated_at?: string;
	};
};

const indicatorStyles: Record<
	StatusIndicator,
	{ dot: string; label: string }
> = {
	none: { dot: "bg-green-500", label: "text-green-700 dark:text-green-300" },
	minor: {
		dot: "bg-warning",
		label: "text-warning-deep dark:text-warning",
	},
	major: {
		dot: "bg-error",
		label: "text-error-deep dark:text-error",
	},
	critical: {
		dot: "bg-error",
		label: "text-error-deep dark:text-error",
	},
};

function formatUpdatedAt(iso?: string) {
	if (!iso) return null;
	const date = new Date(iso);
	if (Number.isNaN(date.getTime())) return null;
	return date.toLocaleString(undefined, {
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "2-digit",
	});
}

export function SystemStatusBand() {
	const [summary, setSummary] = useState<StatusSummary | null>(null);
	const [failed, setFailed] = useState(false);

	useEffect(() => {
		let cancelled = false;

		fetch("https://status.cxconnect.ai/api/v2/summary.json")
			.then((response) => {
				if (!response.ok) throw new Error("status fetch failed");
				return response.json() as Promise<StatusSummary>;
			})
			.then((data) => {
				if (!cancelled) setSummary(data);
			})
			.catch(() => {
				if (!cancelled) setFailed(true);
			});

		return () => {
			cancelled = true;
		};
	}, []);

	const indicator = summary?.status.indicator ?? "none";
	const styles = indicatorStyles[indicator] ?? indicatorStyles.none;
	const components = summary?.components?.slice(0, 6) ?? [];
	const updatedLabel = formatUpdatedAt(summary?.page?.updated_at);

	return (
		<SectionBand
			variant="soft"
			className="border-t border-hairline py-[var(--spacing-3xl)] md:py-[var(--spacing-4xl)]"
		>
			<div className="rounded-[var(--rounded-lg)] border border-hairline bg-canvas px-5 py-5 elev-3 md:px-6 md:py-6">
				<div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
					<div className="min-w-0">
						<p className="section-eyebrow mb-2">System status</p>
						<div className="flex items-center gap-3">
							<span
								className={cn(
									"inline-flex size-2.5 shrink-0 rounded-full",
									styles.dot,
									indicator === "none" && "shadow-[0_0_0_4px_color-mix(in_srgb,var(--green-400)_22%,transparent)]",
								)}
								aria-hidden
							/>
							<p className={cn("text-body-md-strong", styles.label)}>
								{failed
									? "Status unavailable"
									: (summary?.status.description ?? "Checking systems…")}
							</p>
						</div>
						{updatedLabel ? (
							<p className="mt-2 text-caption text-body">
								Last updated {updatedLabel}
							</p>
						) : null}
					</div>
					<a
						href={siteConfig.statusUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="text-body-sm-strong text-link hover:text-link-deep hover:underline"
					>
						View status page →
					</a>
				</div>
				{components.length > 0 ? (
					<ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
						{components.map((component) => (
							<li
								key={component.name}
								className="flex items-center justify-between gap-3 rounded-[var(--rounded-sm)] border border-hairline bg-canvas-soft px-3 py-2"
							>
								<span className="truncate text-body-sm text-ink">
									{component.name}
								</span>
								<span
									className={cn(
										"shrink-0 font-mono text-[10px] uppercase tracking-wide",
										component.status === "operational"
											? "text-green-600 dark:text-green-400"
											: "text-warning-deep dark:text-warning",
									)}
								>
									{component.status.replaceAll("_", " ")}
								</span>
							</li>
						))}
					</ul>
				) : null}
			</div>
		</SectionBand>
	);
}
