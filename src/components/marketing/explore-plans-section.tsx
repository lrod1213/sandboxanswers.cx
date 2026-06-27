import { Link } from "@tanstack/react-router";
import { Check, TrendingUp } from "lucide-react";

import { Button } from "#/components/ui/button.tsx";
import type { ExplorePlansContent } from "#/content/ai-assistants-team.ts";
import { cn } from "#/lib/utils.ts";

type ExplorePlansSectionProps = {
	content: ExplorePlansContent;
	className?: string;
};

export function ExplorePlansSection({
	content,
	className,
}: ExplorePlansSectionProps) {
	return (
		<section
			className={cn(
				"relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden bg-[var(--surface-inverse)] px-[var(--spacing-lg)] py-16 text-[var(--on-inverse)] md:py-20",
				className,
			)}
		>
			<div
				className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_12%_18%,rgba(147,51,234,0.14),transparent_34%),radial-gradient(circle_at_88%_82%,rgba(94,234,212,0.08),transparent_30%)]"
				aria-hidden
			/>
			<div className="signal-grid absolute inset-0 opacity-[0.08]" aria-hidden />

			<div className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center">
				<h2 className="text-display-lg max-w-2xl text-white">{content.title}</h2>
				<p className="mt-4 max-w-xl text-body-lg text-white/65">
					{content.subtitle}
				</p>

				<div className="mt-10 w-full overflow-hidden rounded-[var(--rounded-lg)] border border-white/10 bg-white/[0.03] shadow-[0_24px_60px_-40px_rgba(0,0,0,0.55)] backdrop-blur-sm md:mt-12">
					<span
						className="pointer-events-none block h-px w-full bg-gradient-to-r from-transparent via-link/40 to-transparent"
						aria-hidden
					/>
					<div className="grid gap-8 p-6 text-left sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:p-10">
						<div className="flex flex-col">
							<span className="inline-flex w-fit items-center gap-2 rounded-full border border-link/25 bg-link/10 px-3 py-1 text-[11px] font-medium tracking-[0.08em] text-link uppercase">
								<span className="size-1.5 rounded-full bg-link" aria-hidden />
								{content.planLabel}
							</span>
							<p className="mt-5 text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-[2.25rem]">
								{content.headline}
							</p>
							<p className="mt-3 max-w-md text-body-md leading-relaxed text-white/65">
								{content.priceNote}
							</p>
							<div className="mt-5 flex max-w-md items-start gap-3 rounded-[var(--rounded-md)] border border-cyan/20 bg-cyan/[0.06] p-3.5">
								<TrendingUp
									className="mt-0.5 size-4 shrink-0 text-cyan"
									aria-hidden
								/>
								<p className="text-body-sm text-white/80">{content.valueLine}</p>
							</div>
							{content.segments.length > 0 ? (
								<div className="mt-6 grid max-w-md gap-3 sm:grid-cols-2">
									{content.segments.map((segment) => (
										<div
											key={segment.name}
											className="rounded-[var(--rounded-md)] border border-white/10 bg-white/[0.03] p-4"
										>
											<p className="flex items-center gap-2 text-body-sm-strong text-white">
												<span
													className="size-1.5 rounded-full bg-link"
													aria-hidden
												/>
												{segment.name}
											</p>
											<p className="mt-1.5 text-caption leading-relaxed text-white/60">
												{segment.description}
											</p>
										</div>
									))}
								</div>
							) : null}
							<div className="mt-auto pt-8">
								<div className="flex flex-col items-start">
									<Button asChild size="lg" className="w-full sm:w-auto">
										<Link to={content.cta.href}>{content.cta.label}</Link>
									</Button>
									{content.ctaCaption ? (
										<p className="mt-3 text-left text-caption text-white/50">
											{content.ctaCaption}
										</p>
									) : null}
								</div>
							</div>
						</div>

						<div className="rounded-[var(--rounded-md)] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
							<p className="mb-4 text-body-sm-strong text-white">
								{content.featuresLabel}
							</p>
							<ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
								{content.features.map((feature) => (
									<li
										key={feature}
										className="flex items-center gap-3 text-body-sm text-white/75"
									>
										<span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-link/25 bg-link/10 text-link">
											<Check className="size-3" aria-hidden />
										</span>
										{feature}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				{content.footnote ? (
					<p className="mx-auto mt-8 max-w-2xl text-caption text-white/50">
						{content.footnote}
					</p>
				) : null}
			</div>
		</section>
	);
}
