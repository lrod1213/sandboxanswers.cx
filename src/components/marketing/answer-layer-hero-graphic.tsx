import {
	Activity,
	ArrowDown,
	Layers,
	MessageSquare,
	Sparkles,
	Sun,
	Users,
} from "lucide-react";

import { MarketingGraphicFrame } from "#/components/marketing/marketing-graphic-frame.tsx";
import { cn } from "#/lib/utils.ts";

type AnswerLayerHeroGraphicProps = {
	className?: string;
};

const connectors = ["Salesforce", "Zendesk", "Genesys", "Intercom"] as const;

const surfaces = [
	{
		label: "Ask",
		icon: MessageSquare,
		accent: "link" as const,
	},
	{
		label: "Daily Brief",
		icon: Sun,
		accent: "cyan" as const,
	},
	{
		label: "Company Pulse",
		icon: Activity,
		accent: "pink" as const,
	},
	{
		label: "AI Agents",
		icon: Users,
		accent: "violet" as const,
	},
] as const;

const accentStyles = {
	link: {
		border: "border-link/35",
		bg: "bg-link/10",
		text: "text-link",
	},
	cyan: {
		border: "border-cyan/35",
		bg: "bg-cyan/10",
		text: "text-cyan",
	},
	pink: {
		border: "border-highlight-pink/35",
		bg: "bg-highlight-pink/10",
		text: "text-highlight-pink",
	},
	violet: {
		border: "border-link/35",
		bg: "bg-link/10",
		text: "text-link",
	},
} as const;

export function AnswerLayerHeroGraphic({
	className,
}: AnswerLayerHeroGraphicProps) {
	return (
		<div className={cn("relative w-full", className)}>
			<MarketingGraphicFrame ariaLabel="The Answer Layer stack showing connectors flowing through Sync Engine to Ask, Daily Brief, Company Pulse, and AI Agents">
				<div className="flex min-h-0 flex-1 flex-col gap-2 p-3 sm:gap-2.5 sm:p-4">
					<div className="flex items-start justify-between gap-2">
						<div className="min-w-0">
							<p className="text-[14px] font-semibold tracking-[-0.02em] text-white sm:text-[15px]">
								The Answer Layer
							</p>
							<p className="mt-0.5 font-mono text-[9px] text-white/55 sm:text-[10px]">
								Connectors → Sync Engine → Intelligence surfaces
							</p>
						</div>
						<span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-link/35 bg-link/10 px-2 py-1 font-mono text-[9px] text-link sm:text-[10px]">
							<Sparkles className="size-3" aria-hidden />
							Governed
						</span>
					</div>

					<div className="rounded-[var(--rounded-sm)] border border-white/10 bg-black/20 px-2.5 py-2 sm:px-3 sm:py-2.5">
						<p className="mb-1.5 font-mono text-[8px] tracking-[0.12em] text-white/45 uppercase sm:text-[9px]">
							Your stack
						</p>
						<div className="flex flex-wrap gap-1.5">
							{connectors.map((name) => (
								<span
									key={name}
									className="rounded-full border border-white/12 bg-white/[0.06] px-2 py-0.5 font-mono text-[8px] text-white/70 sm:text-[9px]"
								>
									{name}
								</span>
							))}
							<span className="rounded-full border border-dashed border-white/20 px-2 py-0.5 font-mono text-[8px] text-white/40 sm:text-[9px]">
								+ more
							</span>
						</div>
					</div>

					<div className="flex justify-center py-0.5" aria-hidden>
						<ArrowDown className="size-3.5 text-link/60" />
					</div>

					<div className="rounded-[var(--rounded-sm)] border border-cyan/30 bg-cyan/5 px-2.5 py-2 shadow-[inset_3px_0_0_0_var(--cyan)] sm:px-3 sm:py-2.5">
						<div className="flex items-center gap-2">
							<span className="inline-flex size-6 shrink-0 items-center justify-center rounded-[var(--rounded-sm)] border border-cyan/30 bg-cyan/10 text-cyan">
								<Layers className="size-3" aria-hidden />
							</span>
							<div className="min-w-0">
								<p className="font-mono text-[9px] font-medium text-cyan sm:text-[10px]">
									Sync Engine
								</p>
								<p className="text-[8px] leading-snug text-white/60 sm:text-[9px]">
									Normalize · Govern · Unify
								</p>
							</div>
						</div>
					</div>

					<div className="flex justify-center py-0.5" aria-hidden>
						<ArrowDown className="size-3.5 text-link/60" />
					</div>

					<div className="grid min-h-0 flex-1 grid-cols-2 gap-1.5 sm:gap-2">
						{surfaces.map((surface) => {
							const Icon = surface.icon;
							const styles = accentStyles[surface.accent];
							return (
								<div
									key={surface.label}
									className={cn(
										"flex flex-col items-center justify-center rounded-[var(--rounded-sm)] border bg-black/20 px-2 py-2 text-center sm:py-2.5",
										styles.border,
									)}
								>
									<span
										className={cn(
											"mb-1 inline-flex size-6 items-center justify-center rounded-[var(--rounded-sm)] border",
											styles.border,
											styles.bg,
											styles.text,
										)}
									>
										<Icon className="size-3" aria-hidden />
									</span>
									<p
										className={cn(
											"font-mono text-[8px] sm:text-[9px]",
											styles.text,
										)}
									>
										{surface.label}
									</p>
								</div>
							);
						})}
					</div>

					<div className="flex flex-wrap items-center justify-center gap-1.5 pt-0.5">
						<span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[8px] text-white/45 sm:text-[9px]">
							One canonical view
						</span>
						<span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[8px] text-white/45 sm:text-[9px]">
							150+ languages
						</span>
					</div>
				</div>
			</MarketingGraphicFrame>
		</div>
	);
}
