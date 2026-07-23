import { Activity, Sparkles, TrendingDown, TrendingUp } from "lucide-react";

import { MarketingGraphicFrame } from "#/components/marketing/marketing-graphic-frame.tsx";
import { cn } from "#/lib/utils.ts";

type CompanyPulseHeroGraphicProps = {
	className?: string;
};

type PulseMetric = {
	label: string;
	value: string;
	delta: string;
	tone: "up" | "down" | "neutral";
};

type PulseSignal = {
	category: string;
	text: string;
	accent: "cyan" | "pink" | "violet" | "amber";
};

const pulseMock = {
	header: "Company Pulse",
	meta: "Live · Updated 4m ago · All connected sources",
	healthScore: "78",
	healthLabel: "Stable with rising risk in EMEA enterprise",
	metrics: [
		{
			label: "Active signals",
			value: "14",
			delta: "+3 since yesterday",
			tone: "up",
		},
		{
			label: "Accounts at risk",
			value: "6",
			delta: "2 new this week",
			tone: "down",
		},
		{
			label: "Expansion intent",
			value: "9",
			delta: "Q3 conversations",
			tone: "neutral",
		},
	] satisfies PulseMetric[],
	signals: [
		{
			category: "Churn Risk",
			text: "Enterprise onboarding friction rising in EMEA support threads",
			accent: "pink",
		},
		{
			category: "Revenue",
			text: "Expansion language detected across 4 strategic accounts",
			accent: "cyan",
		},
		{
			category: "Product",
			text: "Portal access delays now the top theme in week-one tickets",
			accent: "violet",
		},
	] satisfies PulseSignal[],
} as const;

const metricToneStyles = {
	up: "text-cyan",
	down: "text-highlight-pink",
	neutral: "text-link",
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
	amber: {
		border: "border-warning/35",
		dot: "bg-warning shadow-[0_0_6px_var(--warning)]",
		label: "text-warning",
	},
} as const;

export function CompanyPulseHeroGraphic({
	className,
}: CompanyPulseHeroGraphicProps) {
	return (
		<div className={cn("relative w-full", className)}>
			<MarketingGraphicFrame ariaLabel="Company Pulse dashboard showing live customer health metrics and ranked business signals">
				<div className="flex min-h-0 flex-1 flex-col gap-2.5 p-3 sm:gap-3 sm:p-4">
					<div className="flex items-start justify-between gap-2">
						<div className="min-w-0">
							<p className="text-[14px] font-semibold tracking-[-0.02em] text-white sm:text-[15px]">
								{pulseMock.header}
							</p>
							<p className="mt-0.5 font-mono text-[9px] text-white/55 sm:text-[10px]">
								{pulseMock.meta}
							</p>
						</div>
						<span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-cyan/35 bg-cyan/10 px-2 py-1 font-mono text-[9px] text-cyan sm:text-[10px]">
							<Activity className="size-3" aria-hidden />
							Live
						</span>
					</div>

					<div className="rounded-[var(--rounded-sm)] border border-link/30 bg-black/25 px-2.5 py-2 sm:px-3 sm:py-2.5">
						<div className="flex items-end justify-between gap-3">
							<div>
								<p className="font-mono text-[8px] tracking-[0.12em] text-white/45 uppercase sm:text-[9px]">
									Company health
								</p>
								<p className="mt-1 text-[28px] font-semibold leading-none tracking-[-0.04em] text-white sm:text-[32px]">
									{pulseMock.healthScore}
								</p>
							</div>
							<p className="max-w-[11rem] text-right text-[8px] leading-snug text-white/65 sm:text-[9px]">
								{pulseMock.healthLabel}
							</p>
						</div>
					</div>

					<div className="grid grid-cols-3 gap-1.5 sm:gap-2">
						{pulseMock.metrics.map((metric) => (
							<div
								key={metric.label}
								className="rounded-[var(--rounded-sm)] border border-white/10 bg-black/20 px-2 py-1.5 sm:px-2.5 sm:py-2"
							>
								<p className="font-mono text-[7px] tracking-[0.08em] text-white/45 uppercase sm:text-[8px]">
									{metric.label}
								</p>
								<p className="mt-1 text-[14px] font-semibold text-white sm:text-[15px]">
									{metric.value}
								</p>
								<p
									className={cn(
										"mt-0.5 font-mono text-[7px] sm:text-[8px]",
										metricToneStyles[metric.tone],
									)}
								>
									{metric.delta}
								</p>
							</div>
						))}
					</div>

					<div className="min-h-0 flex-1 overflow-hidden rounded-[var(--rounded-sm)] border border-cyan/25 bg-cyan/5 px-2.5 py-2 shadow-[inset_3px_0_0_0_var(--cyan)] sm:px-3 sm:py-2.5">
						<p className="mb-1.5 font-mono text-[8px] tracking-[0.12em] text-white/45 uppercase sm:text-[9px]">
							Signals moving now
						</p>
						<ul className="space-y-1.5">
							{pulseMock.signals.map((signal) => {
								const styles = signalAccentStyles[signal.accent];
								return (
									<li
										key={signal.text}
										className={cn(
											"rounded-[var(--rounded-sm)] border bg-black/20 px-2 py-1.5 sm:px-2.5 sm:py-2",
											styles.border,
										)}
									>
										<div className="flex items-center gap-1.5">
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
										<p className="mt-1 line-clamp-2 text-[8px] leading-snug text-white/78 sm:text-[9px]">
											{signal.text}
										</p>
									</li>
								);
							})}
						</ul>
					</div>

					<div className="flex flex-wrap items-center gap-1.5">
						<span className="inline-flex items-center gap-1 rounded-full border border-link/30 bg-link/10 px-2 py-0.5 font-mono text-[8px] text-link sm:text-[9px]">
							<Sparkles className="size-3" aria-hidden />
							Governed sources
						</span>
						<span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[8px] text-white/45 sm:text-[9px]">
							<TrendingUp className="size-3 text-cyan" aria-hidden />
							Revenue
						</span>
						<span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[8px] text-white/45 sm:text-[9px]">
							<TrendingDown className="size-3 text-highlight-pink" aria-hidden />
							Retention
						</span>
					</div>
				</div>
			</MarketingGraphicFrame>
		</div>
	);
}
