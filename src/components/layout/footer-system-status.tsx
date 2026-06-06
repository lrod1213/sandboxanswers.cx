import { useEffect, useState } from "react";

import { siteConfig } from "#/config/site.ts";
import { cn } from "#/lib/utils.ts";

type StatusIndicator = "none" | "minor" | "major" | "critical";

const indicatorClass: Record<StatusIndicator, string> = {
	none: "footer-system-status-dot--operational",
	minor: "footer-system-status-dot--minor",
	major: "footer-system-status-dot--major",
	critical: "footer-system-status-dot--critical",
};

export function SystemStatusIndicator({
	indicator = "none",
}: {
	indicator?: StatusIndicator;
}) {
	const operational = indicator === "none";

	return (
		<span
			className={cn("footer-system-status-dot", indicatorClass[indicator])}
			aria-hidden
		>
			<span className="footer-system-status-dot__core" />
			{operational ? (
				<>
					<span className="footer-system-status-dot__ring" />
					<span className="footer-system-status-dot__ring footer-system-status-dot__ring--delayed" />
				</>
			) : null}
		</span>
	);
}

export function FooterSystemStatus() {
	const [indicator, setIndicator] = useState<StatusIndicator>("none");

	useEffect(() => {
		let cancelled = false;

		fetch("https://status.cxconnect.ai/api/v2/status.json")
			.then((response) => {
				if (!response.ok) throw new Error("status fetch failed");
				return response.json() as Promise<{
					status?: { indicator?: StatusIndicator };
				}>;
			})
			.then((data) => {
				if (!cancelled && data.status?.indicator) {
					setIndicator(data.status.indicator);
				}
			})
			.catch(() => {
				// Keep default operational styling when status is unavailable.
			});

		return () => {
			cancelled = true;
		};
	}, []);

	return (
		<a
			href={siteConfig.statusUrl}
			target="_blank"
			rel="noopener noreferrer"
			className="footer-system-status inline-flex items-center gap-2.5 text-caption text-body transition-colors hover:text-ink"
		>
			<SystemStatusIndicator indicator={indicator} />
			System Status
		</a>
	);
}
