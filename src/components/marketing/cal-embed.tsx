import { useEffect, useId } from "react";

import { analyticsConfig } from "#/config/analytics.ts";
import { getCalAttributionConfig } from "#/lib/attribution.ts";
import { cn } from "#/lib/utils.ts";

const CAL_ORIGIN = "https://app.cal.com";
const CAL_SCRIPT = "https://app.cal.com/embed/embed.js";

function bootstrapCalLoader() {
	if (window.Cal) return;

	const calGlobal = ((...args: unknown[]) => {
		const cal = window.Cal;
		if (!cal) return;

		if (!cal.loaded) {
			cal.ns = {};
			cal.q = cal.q ?? [];
			const script = document.createElement("script");
			script.src = CAL_SCRIPT;
			script.async = true;
			document.head.appendChild(script);
			cal.loaded = true;
		}

		if (args[0] === "init") {
			const namespace = args[1] as string;
			const api = ((...innerArgs: unknown[]) => {
				api.q = api.q ?? [];
				api.q.push(innerArgs);
			}) as CalNamespaceApi;
			api.q = [];
			cal.ns = cal.ns ?? {};
			cal.ns[namespace] = api;
			cal.q?.push(args);
			cal.q?.push(["initNamespace", namespace]);
			return;
		}

		cal.q = cal.q ?? [];
		cal.q.push(args);
	}) as NonNullable<Window["Cal"]>;

	calGlobal.ns = {};
	calGlobal.q = [];
	calGlobal.loaded = false;
	window.Cal = calGlobal;
}

type CalNamespaceApi = ((command: string, options: Record<string, unknown>) => void) & {
	q?: unknown[];
};

type CalEmbedProps = {
	className?: string;
};

export function CalEmbed({ className }: CalEmbedProps) {
	const reactId = useId();
	const elementId = `cal-embed-${reactId.replace(/:/g, "")}`;
	const { namespace, calLink, brandColor } = analyticsConfig.cal;

	useEffect(() => {
		bootstrapCalLoader();
		if (!window.Cal) return;

		window.Cal("init", namespace, { origin: CAL_ORIGIN });

		const tryMount = () => {
			const ns = window.Cal?.ns?.[namespace];
			if (!ns) {
				window.setTimeout(tryMount, 100);
				return;
			}

			ns("inline", {
				elementOrSelector: `#${elementId}`,
				config: {
					layout: "month_view",
					useSlotsViewOnSmallScreen: "true",
					...getCalAttributionConfig(),
				},
				calLink,
			});

			ns("ui", {
				cssVarsPerTheme: {
					light: { "cal-brand": brandColor },
					dark: { "cal-brand": brandColor },
				},
				hideEventTypeDetails: true,
				layout: "month_view",
			});
		};

		tryMount();
	}, [elementId, namespace, calLink, brandColor]);

	return (
		<div
			id={elementId}
			className={cn("min-h-[560px] w-full overflow-auto", className)}
		/>
	);
}
