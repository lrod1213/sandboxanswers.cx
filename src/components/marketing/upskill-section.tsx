import {
	BarChart3,
	GraduationCap,
	HeartHandshake,
	Layers,
	MessageSquareMore,
	Presentation,
	Search,
	Table2,
	TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionBand } from "#/components/marketing/section-band.tsx";
import {
	strategicShiftItems,
	tediousWorkItems,
} from "#/content/ai-assistants-team.ts";
import { cn } from "#/lib/utils.ts";

const tediousIcons: LucideIcon[] = [
	Search,
	Table2,
	BarChart3,
	Presentation,
	MessageSquareMore,
];

const strategicIcons: LucideIcon[] = [
	TrendingUp,
	HeartHandshake,
	Layers,
	GraduationCap,
];

const strategicIconClasses = [
	"from-pink-500/20 to-fuchsia-500/10 text-pink-300",
	"from-cyan-500/20 to-teal-500/10 text-cyan-300",
	"from-violet-500/20 to-purple-500/10 text-violet-300",
	"from-amber-500/20 to-orange-500/10 text-amber-300",
] as const;

export function UpskillSection() {
	return (
		<SectionBand variant="dark" className="relative overflow-hidden !pt-12 md:!pt-16 lg:!pt-20">
			<div
				className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_15%_20%,rgba(147,51,234,0.18),transparent_34%),radial-gradient(circle_at_85%_72%,rgba(94,234,212,0.12),transparent_28%)]"
				aria-hidden
			/>
			<div className="signal-grid absolute inset-0 opacity-[0.12]" aria-hidden />
			<div
				className="pointer-events-none absolute -top-24 right-0 size-72 rounded-full bg-link/10 blur-3xl"
				aria-hidden
			/>

			<div className="relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
				<div>
					<p className="section-eyebrow mb-4">Ready to upskill?</p>
					<h2 className="text-display-lg mb-6 text-white">
						AI isn&apos;t here to take your job. It&apos;s here to take the parts
						you never wanted anyway.
					</h2>
					<p className="mb-6 max-w-xl text-body-md text-white/65">
						Stop spending leadership hours on repeat reporting. Hand the grind
						to AI Specialists and reclaim time for the decisions only you can
						make.
					</p>

					<ul className="space-y-3">
						{tediousWorkItems.map((item, index) => {
							const Icon = tediousIcons[index] ?? Search;
							return (
								<li
									key={item}
									className="upskill-task-rise flex items-start gap-3 rounded-[var(--rounded-md)] border border-white/8 bg-white/[0.03] p-4 backdrop-blur-sm transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-warning/25 hover:bg-white/[0.05]"
									style={{ animationDelay: `${index * 70}ms` }}
								>
									<span className="inline-flex size-9 shrink-0 items-center justify-center rounded-[var(--rounded-sm)] border border-warning/20 bg-warning/10 text-warning">
										<Icon className="size-4" aria-hidden />
									</span>
									<div className="min-w-0 pt-0.5">
										<p className="text-body-sm text-white/85">{item}</p>
										<p className="mt-1 font-mono text-[10px] tracking-[0.08em] text-white/35 uppercase">
											Offload to AI
										</p>
									</div>
								</li>
							);
						})}
					</ul>
				</div>

				<div className="relative">
					<div
						className="pointer-events-none absolute -left-8 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-transparent to-cyan/40 lg:block"
						aria-hidden
					/>
					<p className="mb-4 font-mono text-[11px] tracking-[0.12em] text-cyan/80 uppercase">
						What you get back
					</p>
					<div className="grid gap-4 sm:grid-cols-2">
						{strategicShiftItems.map((item, index) => {
							const Icon = strategicIcons[index] ?? TrendingUp;
							return (
								<div
									key={item.title}
									className={cn(
										"upskill-card-rise group relative overflow-hidden rounded-[var(--rounded-md)] border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_40px_-24px_rgba(147,51,234,0.45)]",
										index === 0 && "sm:-translate-y-1 sm:shadow-[0_20px_40px_-24px_rgba(147,51,234,0.35)]",
									)}
									style={{ animationDelay: `${120 + index * 80}ms` }}
								>
									<div
										className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(circle_at_80%_0%,rgba(147,51,234,0.16),transparent_55%)]"
										aria-hidden
									/>
									<span
										className={cn(
											"mb-4 inline-flex size-10 items-center justify-center rounded-[var(--rounded-sm)] border border-white/10 bg-gradient-to-br",
											strategicIconClasses[index] ??
												strategicIconClasses[0],
										)}
									>
										<Icon className="size-4" aria-hidden />
									</span>
									<h3 className="text-body-md-strong mb-2 text-white">
										{item.title}
									</h3>
									<p className="text-body-sm text-white/75">{item.description}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</SectionBand>
	);
}
