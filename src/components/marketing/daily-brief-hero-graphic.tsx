import { Play } from "lucide-react";

import { MarketingGraphicFrame } from "#/components/marketing/marketing-graphic-frame.tsx";
import { cn } from "#/lib/utils.ts";

type DailyBriefSection = {
	title: string;
	body: string;
	accent: "cyan" | "pink" | "amber" | "violet";
};

const dailyBriefMock = {
	title: "Daily Brief",
	meta: "Tuesday · 8:04 AM · Customer Signals",
	priorityBadge: "3 priorities surfaced",
	sections: [
		{
			title: "Summary",
			body: "Customer sentiment improved overall, while enterprise accounts show early churn signals tied to onboarding delays and unresolved support escalations.",
			accent: "cyan",
		},
		{
			title: "Critical Churn Risks",
			body: "Enterprise accounts mentioning onboarding friction increased 18%. Three high-value accounts show repeated escalation language.",
			accent: "pink",
		},
		{
			title: "Operational + Technical Oddities",
			body: "Timeout complaints spiked after the latest release, concentrated among admin users during setup.",
			accent: "amber",
		},
		{
			title: "Recommended Next Action",
			body: "Brief Customer Success and Product before the leadership meeting. Prioritize time-to-value messaging and onboarding fixes.",
			accent: "violet",
		},
	] satisfies DailyBriefSection[],
} as const;

const accentStyles = {
	cyan: {
		border: "border-cyan/35",
		glow: "shadow-[inset_3px_0_0_0_var(--cyan)]",
		title: "text-cyan",
	},
	pink: {
		border: "border-highlight-pink/40",
		glow: "shadow-[inset_3px_0_0_0_var(--highlight-pink)]",
		title: "text-ink",
	},
	amber: {
		border: "border-warning/45",
		glow: "shadow-[inset_3px_0_0_0_var(--warning)]",
		title: "text-ink",
	},
	violet: {
		border: "border-link/45",
		glow: "shadow-[inset_3px_0_0_0_var(--link)]",
		title: "text-ink",
	},
} as const;

type DailyBriefHeroGraphicProps = {
	belowCaption?: string;
	className?: string;
};

export function DailyBriefHeroGraphic({
	belowCaption = "Your morning pulse on company health—delivered before standup.",
	className,
}: DailyBriefHeroGraphicProps) {
	return (
		<div className={cn("relative w-full", className)}>
			<MarketingGraphicFrame ariaLabel="Daily Brief email preview showing customer signals and recommended actions">
				<div className="flex min-h-0 flex-1 flex-col gap-2 p-3 sm:gap-2.5 sm:p-4">
					<div className="flex items-start justify-between gap-2">
						<div className="min-w-0">
							<p className="text-[15px] font-semibold tracking-[-0.02em] text-white sm:text-base">
								{dailyBriefMock.title}
							</p>
							<p className="mt-0.5 font-mono text-[9px] text-white/55 sm:text-[10px]">
								{dailyBriefMock.meta}
							</p>
						</div>
						<div className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-green-500/30 bg-green-900/50 px-2 py-1 text-[9px] font-medium text-green-200 sm:px-2.5 sm:text-[10px]">
							<span className="inline-flex size-4 items-center justify-center rounded-full bg-green-500/90 text-[#042f2e]">
								<Play className="ml-px size-2 fill-current" aria-hidden />
							</span>
							Listen
							<span className="inline-flex items-end gap-px" aria-hidden>
								<span className="h-2 w-0.5 rounded-full bg-green-300/80" />
								<span className="h-3 w-0.5 rounded-full bg-green-300/80" />
								<span className="h-1.5 w-0.5 rounded-full bg-green-300/80" />
								<span className="h-2.5 w-0.5 rounded-full bg-green-300/80" />
							</span>
						</div>
					</div>

					<div className="inline-flex w-fit rounded-full border border-cyan/35 bg-cyan/10 px-2 py-0.5 font-mono text-[9px] text-cyan sm:text-[10px]">
						{dailyBriefMock.priorityBadge}
					</div>

					<div className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-hidden sm:gap-2">
						{dailyBriefMock.sections.map((section) => {
							const styles = accentStyles[section.accent];
							return (
								<div
									key={section.title}
									className={cn(
										"rounded-[var(--rounded-sm)] border bg-black/25 px-2.5 py-1.5 sm:px-3 sm:py-2",
										styles.border,
										styles.glow,
									)}
								>
									<p
										className={cn(
											"text-[10px] font-semibold sm:text-[11px]",
											styles.title,
										)}
									>
										{section.title}
									</p>
									<p className="mt-0.5 line-clamp-2 text-[9px] leading-snug text-white/78 sm:text-[10px] sm:leading-relaxed">
										{section.body}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</MarketingGraphicFrame>

			{belowCaption ? (
				<p className="mt-3 text-center text-caption text-body">{belowCaption}</p>
			) : null}
		</div>
	);
}
