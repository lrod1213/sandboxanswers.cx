import {
	Headphones,
	Mail,
	Play,
	Radio,
	Sparkles,
	Sun,
} from "lucide-react";

import { MarketingGraphicFrame } from "#/components/marketing/marketing-graphic-frame.tsx";
import { cn } from "#/lib/utils.ts";

type DailySignalHeroGraphicProps = {
	className?: string;
};

type OvernightSignal = {
	time: string;
	category: string;
	text: string;
	accent: "cyan" | "pink" | "violet";
};

const signalMock = {
	header: "The Daily Signal",
	meta: "Overnight watch · 6 sources connected",
	sources: ["Zendesk", "Salesforce", "Reviews", "+3"],
	overnightCount: "14 signals ranked",
	signals: [
		{
			time: "2:14 AM",
			category: "Churn Risk",
			text: "Enterprise onboarding friction rising in EMEA tickets",
			accent: "pink",
		},
		{
			time: "4:02 AM",
			category: "Revenue",
			text: "Expansion language detected across 3 strategic accounts",
			accent: "cyan",
		},
		{
			time: "5:48 AM",
			category: "Product",
			text: "Portal access delays now the top theme in week-one tickets",
			accent: "violet",
		},
	] satisfies OvernightSignal[],
	brief: {
		title: "Daily Brief",
		meta: "Ready · 6:00 AM · 3 priorities surfaced",
		summary:
			"Overnight churn signals, revenue opportunities, and product themes—ranked and ready before standup.",
	},
} as const;

const signalAccentStyles = {
	cyan: {
		border: "border-cyan/30",
		dot: "bg-cyan shadow-[0_0_6px_var(--cyan)]",
		label: "text-cyan",
	},
	pink: {
		border: "border-highlight-pink/35",
		dot: "bg-highlight-pink shadow-[0_0_6px_var(--highlight-pink)]",
		label: "text-highlight-pink",
	},
	violet: {
		border: "border-link/35",
		dot: "bg-link shadow-[0_0_6px_var(--link)]",
		label: "text-link",
	},
} as const;

export function DailySignalHeroGraphic({ className }: DailySignalHeroGraphicProps) {
	return (
		<div className={cn("relative w-full", className)}>
			<MarketingGraphicFrame ariaLabel="The Daily Signal monitoring overnight customer activity and delivering a morning Daily Brief">
				<div className="flex min-h-0 flex-1 flex-col gap-2 p-3 sm:gap-2.5 sm:p-4">
					<div className="flex items-start justify-between gap-2">
						<div className="min-w-0">
							<p className="text-[14px] font-semibold tracking-[-0.02em] text-white sm:text-[15px]">
								{signalMock.header}
							</p>
							<p className="mt-0.5 font-mono text-[9px] text-white/55 sm:text-[10px]">
								{signalMock.meta}
							</p>
						</div>
						<span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-cyan/35 bg-cyan/10 px-2 py-1 font-mono text-[9px] text-cyan sm:text-[10px]">
							<Radio className="size-3" aria-hidden />
							Watching
						</span>
					</div>

					<div className="flex flex-wrap gap-1.5">
						{signalMock.sources.map((source) => (
							<span
								key={source}
								className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-0.5 font-mono text-[8px] text-white/55 sm:text-[9px]"
							>
								{source}
							</span>
						))}
					</div>

					<div className="min-h-0 flex-1 overflow-hidden rounded-[var(--rounded-sm)] border border-white/10 bg-black/20 px-2.5 py-2 sm:px-3 sm:py-2.5">
						<div className="mb-1.5 flex items-center justify-between gap-2">
							<p className="font-mono text-[8px] tracking-[0.12em] text-white/45 uppercase sm:text-[9px]">
								Overnight activity
							</p>
							<p className="font-mono text-[8px] text-cyan sm:text-[9px]">
								{signalMock.overnightCount}
							</p>
						</div>
						<ul className="space-y-1.5">
							{signalMock.signals.map((signal) => {
								const styles = signalAccentStyles[signal.accent];
								return (
									<li
										key={signal.text}
										className={cn(
											"rounded-[var(--rounded-sm)] border bg-black/25 px-2 py-1.5 sm:px-2.5 sm:py-2",
											styles.border,
										)}
									>
										<div className="flex items-center justify-between gap-2">
											<div className="flex min-w-0 items-center gap-1.5">
												<span
													className={cn(
														"size-1.5 shrink-0 rounded-full",
														styles.dot,
													)}
													aria-hidden
												/>
												<p
													className={cn(
														"font-mono text-[8px] sm:text-[9px]",
														styles.label,
													)}
												>
													{signal.category}
												</p>
											</div>
											<p className="shrink-0 font-mono text-[7px] text-white/40 sm:text-[8px]">
												{signal.time}
											</p>
										</div>
										<p className="mt-1 line-clamp-2 text-[8px] leading-snug text-white/78 sm:text-[9px]">
											{signal.text}
										</p>
									</li>
								);
							})}
						</ul>
					</div>

					<div className="rounded-[var(--rounded-sm)] border border-cyan/30 bg-cyan/5 px-2.5 py-2 shadow-[inset_3px_0_0_0_var(--cyan)] sm:px-3 sm:py-2.5">
						<div className="flex items-start justify-between gap-2">
							<div className="min-w-0">
								<div className="flex items-center gap-1.5">
									<Sun className="size-3 text-cyan" aria-hidden />
									<p className="text-[11px] font-semibold text-white sm:text-[12px]">
										{signalMock.brief.title}
									</p>
								</div>
								<p className="mt-0.5 font-mono text-[8px] text-white/55 sm:text-[9px]">
									{signalMock.brief.meta}
								</p>
							</div>
							<div className="flex shrink-0 items-center gap-1">
								<span className="inline-flex size-6 items-center justify-center rounded-full border border-link/30 bg-link/10 text-link">
									<Mail className="size-3" aria-hidden />
								</span>
								<span className="inline-flex size-6 items-center justify-center rounded-full border border-green-500/30 bg-green-900/40 text-green-200">
									<Headphones className="size-3" aria-hidden />
								</span>
							</div>
						</div>
						<p className="mt-1.5 line-clamp-2 text-[8px] leading-snug text-white/75 sm:text-[9px]">
							{signalMock.brief.summary}
						</p>
						<div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-900/50 px-2 py-0.5 text-[8px] font-medium text-green-200 sm:text-[9px]">
							<span className="inline-flex size-4 items-center justify-center rounded-full bg-green-500/90 text-[#042f2e]">
								<Play className="ml-px size-2 fill-current" aria-hidden />
							</span>
							Listen on your commute
						</div>
					</div>

					<div className="flex flex-wrap items-center gap-1.5">
						<span className="inline-flex items-center gap-1 rounded-full border border-link/30 bg-link/10 px-2 py-0.5 font-mono text-[8px] text-link sm:text-[9px]">
							<Sparkles className="size-3" aria-hidden />
							From The Answer Layer
						</span>
					</div>
				</div>
			</MarketingGraphicFrame>
		</div>
	);
}
