import type { ReactNode } from "react";

import { cn } from "#/lib/utils.ts";

type MarketingGraphicFrameProps = {
	children: ReactNode;
	ariaLabel: string;
	className?: string;
};

export function MarketingGraphicFrame({
	children,
	ariaLabel,
	className,
}: MarketingGraphicFrameProps) {
	return (
		<div
			className={cn(
				"relative aspect-video overflow-hidden rounded-[var(--rounded-lg)] p-px elev-4 [background:linear-gradient(135deg,rgba(147,51,234,0.55),rgba(45,212,191,0.25),rgba(244,63,94,0.35))]",
				className,
			)}
			role="img"
			aria-label={ariaLabel}
		>
			<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--rounded-lg)-1px)] border border-white/5 bg-[#120818]/95 backdrop-blur-md">
				<div
					className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_12%_0%,rgba(147,51,234,0.28),transparent_42%),radial-gradient(circle_at_88%_100%,rgba(45,212,191,0.16),transparent_38%)]"
					aria-hidden
				/>
				<div className="signal-grid absolute inset-0 opacity-[0.12]" aria-hidden />
				<div className="relative z-10 flex h-full min-h-0 flex-col">
					{children}
				</div>
				<div
					className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#120818] to-transparent"
					aria-hidden
				/>
			</div>
		</div>
	);
}
