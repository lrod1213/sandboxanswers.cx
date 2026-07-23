import {
	ArrowRight,
	BarChart3,
	CheckCircle2,
	ClipboardList,
	Clock3,
	Database,
	Headphones,
	Layers,
	Star,
	Ticket,
	Users,
	Zap,
} from "lucide-react";

import { MarketingGraphicFrame } from "#/components/marketing/marketing-graphic-frame.tsx";
import { cn } from "#/lib/utils.ts";

type AnswerLayerComparisonGraphicProps = {
	className?: string;
};

const dataSources = [
	{ label: "Surveys", icon: ClipboardList },
	{ label: "Calls", icon: Headphones },
	{ label: "Tickets", icon: Ticket },
	{ label: "Reviews", icon: Star },
	{ label: "CRM", icon: Database },
] as const;

const oldWaySteps = [
	{ label: "Traditional Analytics", icon: BarChart3 },
	{ label: "Analysts", icon: Users },
	{ label: "Power BI", icon: BarChart3 },
	{ label: "Executives", icon: Users },
	{ label: "Decision", icon: CheckCircle2 },
] as const;

export function AnswerLayerComparisonGraphic({
	className,
}: AnswerLayerComparisonGraphicProps) {
	return (
		<div className={cn("relative w-full", className)}>
			<MarketingGraphicFrame
				className="!aspect-[16/10]"
				ariaLabel="Comparison showing the old way takes weeks across many handoffs while The Answer Layer way delivers decisions in minutes from one layer"
			>
				<div className="flex h-full min-h-0 flex-col gap-2 p-3 sm:gap-2.5 sm:p-4">
					<div className="grid min-h-0 flex-1 grid-cols-1 gap-3 sm:grid-cols-[1fr_auto_1fr] sm:gap-3">
						<div className="flex min-h-0 flex-col rounded-[var(--rounded-sm)] border border-highlight-pink/25 bg-black/20 p-2 sm:p-2.5">
							<p className="font-mono text-[8px] tracking-[0.12em] text-highlight-pink uppercase sm:text-[9px]">
								The old way
							</p>
							<p className="mt-1 text-[9px] leading-snug text-white/55 sm:text-[10px]">
								Many steps. Many handoffs. Slow decisions.
							</p>

							<div className="mt-2 flex min-h-0 flex-1 flex-col gap-1">
								<div className="flex flex-wrap gap-1">
									{dataSources.map((source) => {
										const Icon = source.icon;
										return (
											<span
												key={source.label}
												className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[7px] text-white/50 sm:text-[8px]"
											>
												<Icon className="size-2.5 shrink-0" aria-hidden />
												{source.label}
											</span>
										);
									})}
								</div>

								<div className="my-1 h-px bg-white/10" aria-hidden />

								<ul className="space-y-1">
									{oldWaySteps.map((step, index) => {
										const Icon = step.icon;
										return (
											<li key={step.label} className="relative">
												<div className="flex items-center gap-1.5 rounded-[var(--rounded-sm)] border border-white/10 bg-black/25 px-1.5 py-1 sm:px-2">
													<Icon
														className="size-3 shrink-0 text-white/45"
														aria-hidden
													/>
													<span className="text-[8px] text-white/75 sm:text-[9px]">
														{step.label}
													</span>
												</div>
												{index < oldWaySteps.length - 1 ? (
													<div
														className="ml-3 h-1 border-l border-dashed border-white/15"
														aria-hidden
													/>
												) : null}
											</li>
										);
									})}
								</ul>
							</div>

							<div className="mt-2 rounded-[var(--rounded-sm)] border border-highlight-pink/30 bg-highlight-pink/5 px-2 py-1.5">
								<div className="flex items-center gap-1.5">
									<Clock3
										className="size-3 shrink-0 text-highlight-pink"
										aria-hidden
									/>
									<div>
										<p className="font-mono text-[7px] tracking-[0.1em] text-white/45 uppercase sm:text-[8px]">
											Time to insight
										</p>
										<p className="text-[11px] font-semibold text-highlight-pink sm:text-[12px]">
											Weeks
										</p>
									</div>
								</div>
								<p className="mt-1 text-[7px] text-white/50 sm:text-[8px]">
									Multiple teams. Multiple handoffs.
								</p>
							</div>
						</div>

						<div className="flex flex-col items-center justify-center gap-1 py-1 sm:px-0.5 sm:py-0">
							<p className="text-center font-mono text-[7px] tracking-[0.08em] text-cyan uppercase sm:text-[8px]">
								Remove
								<br className="hidden sm:block" />
								<span className="sm:hidden"> </span>
								the layers
							</p>
							<ArrowRight
								className="size-4 rotate-90 text-link sm:size-5 sm:rotate-0"
								aria-hidden
							/>
						</div>

						<div className="flex min-h-0 flex-col rounded-[var(--rounded-sm)] border border-cyan/30 bg-cyan/5 p-2 shadow-[inset_3px_0_0_0_var(--cyan)] sm:p-2.5">
							<p className="font-mono text-[8px] tracking-[0.12em] text-cyan uppercase sm:text-[9px]">
								The Answer Layer way
							</p>
							<p className="mt-1 text-[9px] leading-snug text-white/65 sm:text-[10px]">
								One layer. Instant clarity. Faster decisions.
							</p>

							<div className="mt-2 flex min-h-0 flex-1 flex-col gap-1.5">
								<div className="rounded-[var(--rounded-sm)] border border-white/10 bg-black/20 px-2 py-1.5">
									<p className="mb-1 font-mono text-[7px] tracking-[0.1em] text-white/45 uppercase sm:text-[8px]">
										Customer data
									</p>
									<div className="flex flex-wrap gap-1">
										{dataSources.map((source) => {
											const Icon = source.icon;
											return (
												<span
													key={`new-${source.label}`}
													className="inline-flex size-5 items-center justify-center rounded-[var(--rounded-sm)] border border-white/10 bg-white/[0.04] text-white/55"
													title={source.label}
												>
													<Icon className="size-2.5" aria-hidden />
													<span className="sr-only">{source.label}</span>
												</span>
											);
										})}
									</div>
								</div>

								<div className="flex justify-center" aria-hidden>
									<ArrowRight className="size-3 rotate-90 text-cyan/70" />
								</div>

								<div className="rounded-[var(--rounded-sm)] border border-link/35 bg-link/10 px-2 py-2 text-center sm:py-2.5">
									<div className="mx-auto mb-1 inline-flex size-7 items-center justify-center rounded-[var(--rounded-sm)] border border-link/30 bg-link/15 text-link">
										<Layers className="size-3.5" aria-hidden />
									</div>
									<p className="text-[10px] font-semibold tracking-[-0.02em] text-white sm:text-[11px]">
										The Answer Layer
									</p>
									<p className="mt-0.5 font-mono text-[7px] text-link sm:text-[8px]">
										+ AI Agents
									</p>
								</div>

								<div className="flex justify-center" aria-hidden>
									<ArrowRight className="size-3 rotate-90 text-cyan/70" />
								</div>

								<div className="flex items-center justify-center gap-1.5 rounded-[var(--rounded-sm)] border border-cyan/25 bg-black/20 px-2 py-1.5">
									<CheckCircle2 className="size-3 text-cyan" aria-hidden />
									<span className="text-[8px] font-medium text-white sm:text-[9px]">
										Decision
									</span>
								</div>
							</div>

							<div className="mt-2 rounded-[var(--rounded-sm)] border border-cyan/35 bg-cyan/10 px-2 py-1.5">
								<div className="flex items-center gap-1.5">
									<Zap className="size-3 shrink-0 text-cyan" aria-hidden />
									<div>
										<p className="font-mono text-[7px] tracking-[0.1em] text-white/45 uppercase sm:text-[8px]">
											Time to insight
										</p>
										<p className="text-[11px] font-semibold text-cyan sm:text-[12px]">
											Minutes
										</p>
									</div>
								</div>
								<p className="mt-1 text-[7px] text-white/60 sm:text-[8px]">
									Ask. Understand. Act.
								</p>
							</div>
						</div>
					</div>
				</div>
			</MarketingGraphicFrame>
		</div>
	);
}
