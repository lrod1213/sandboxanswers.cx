import { Link } from "@tanstack/react-router";
import {
	Activity,
	BarChart3,
	Clock3,
	Radio,
	Sparkles,
	TrendingUp,
} from "lucide-react";

import { CompanyPulseHeroGraphic } from "#/components/marketing/company-pulse-hero-graphic.tsx";
import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { MeshGradient } from "#/components/marketing/mesh-gradient.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { TrustedByCarousel } from "#/components/marketing/trusted-by-carousel.tsx";
import { Button } from "#/components/ui/button.tsx";
import { companyPulsePageContent } from "#/content/company-pulse.ts";

const whyIcons = [Clock3, BarChart3, Sparkles] as const;
const signalIcons = [Activity, TrendingUp, Radio] as const;

export function CompanyPulsePage() {
	const content = companyPulsePageContent;

	return (
		<>
			<section className="marketing-hero !pb-10 md:!pb-12 lg:!pb-16">
				<MeshGradient />
				<div
					className="signal-grid marketing-hero-atmosphere opacity-70"
					aria-hidden
				/>
				<div className="marketing-container relative z-10">
					<div className="rise-in">
						<div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
							<div>
								<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas/80 px-3 py-1 text-body-sm text-body shadow-[var(--shadow-inset)] backdrop-blur-sm">
									<Activity className="size-3.5 text-link" aria-hidden />
									{content.hero.eyebrow}
								</div>
								<h1 className="max-w-4xl text-[2rem] font-semibold leading-[0.95] tracking-[-0.06em] text-ink sm:text-[2.5rem] sm:leading-[0.92] sm:tracking-[-0.08em] md:text-[56px] md:tracking-[-3.4px] lg:text-[64px] lg:tracking-[-3.6px]">
									{content.hero.title}
								</h1>
								<div className="mt-8 flex max-w-xl flex-col gap-5">
									<p className="text-body-lg text-body">{content.hero.lead}</p>
									<div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
										<Button asChild size="lg" className="w-full sm:w-auto">
											<Link to={content.hero.primaryCta.href}>
												{content.hero.primaryCta.label}
											</Link>
										</Button>
										<Button
											asChild
											variant="outline"
											size="lg"
											className="w-full sm:w-auto"
										>
											<Link to={content.hero.secondaryCta.href}>
												{content.hero.secondaryCta.label}
											</Link>
										</Button>
									</div>
								</div>
							</div>
							<CompanyPulseHeroGraphic className="mx-auto w-full max-w-[560px] lg:max-w-none lg:translate-y-4" />
						</div>
						<TrustedByCarousel className="mt-10 lg:mt-12" />
					</div>
				</div>
			</section>

			<SectionBand variant="soft">
				<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
					<div>
						<p className="section-eyebrow mb-4">{content.overview.eyebrow}</p>
						<h2 className="text-display-lg mb-5">{content.overview.title}</h2>
						<p className="text-body-lg text-body">{content.overview.lead}</p>
					</div>
					<ul className="space-y-4">
						{content.overview.points.map((point) => (
							<li
								key={point}
								className="flex items-start gap-3 rounded-[var(--rounded-md)] border border-hairline bg-canvas p-4 shadow-[var(--shadow-inset)]"
							>
								<span
									className="mt-2 size-1.5 shrink-0 rounded-full bg-link"
									aria-hidden
								/>
								<p className="text-body-md text-body">{point}</p>
							</li>
						))}
					</ul>
				</div>
			</SectionBand>

			<SectionBand>
				<div className="mb-12 max-w-3xl">
					<p className="section-eyebrow mb-4">{content.signals.eyebrow}</p>
					<h2 className="text-display-lg mb-4">{content.signals.title}</h2>
					<p className="text-body-lg text-body">{content.signals.lead}</p>
				</div>
				<div className="grid gap-5 md:grid-cols-3">
					{content.signals.items.map((item, index) => {
						const Icon = signalIcons[index] ?? Sparkles;
						return (
							<MarketingCard key={item.title} variant="soft" className="h-full">
								<span className="mb-4 inline-flex size-10 items-center justify-center rounded-[var(--rounded-sm)] border border-link/15 bg-link-bg-soft text-link">
									<Icon className="size-4" aria-hidden />
								</span>
								<h3 className="text-body-md-strong mb-2 text-ink">
									{item.title}
								</h3>
								<p className="text-body-sm leading-relaxed text-body">
									{item.description}
								</p>
							</MarketingCard>
						);
					})}
				</div>
			</SectionBand>

			<SectionBand variant="dark" className="relative overflow-hidden">
				<div
					className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_12%_20%,rgba(147,51,234,0.16),transparent_34%),radial-gradient(circle_at_88%_72%,rgba(94,234,212,0.1),transparent_28%)]"
					aria-hidden
				/>
				<div className="signal-grid absolute inset-0 opacity-[0.1]" aria-hidden />
				<div className="relative">
					<div className="mb-12 max-w-3xl">
						<h2 className="text-display-lg mb-4 text-white">
							{content.whyItMatters.title}
						</h2>
						<p className="text-body-lg text-white/70">
							{content.whyItMatters.description}
						</p>
					</div>
					<div className="grid gap-5 md:grid-cols-3">
						{content.whyItMatters.items.map((item, index) => {
							const Icon = whyIcons[index] ?? Sparkles;
							return (
								<MarketingCard
									key={item.title}
									variant="soft"
									className="border border-white/10 bg-white/[0.04] text-white backdrop-blur-sm"
								>
									<span className="mb-4 inline-flex size-10 items-center justify-center rounded-[var(--rounded-sm)] border border-link/25 bg-link/15 text-link">
										<Icon className="size-4" aria-hidden />
									</span>
									<h3 className="text-body-md-strong mb-2 text-white">
										{item.title}
									</h3>
									<p className="text-body-sm text-white/70">{item.description}</p>
								</MarketingCard>
							);
						})}
					</div>
				</div>
			</SectionBand>

			<SectionBand variant="soft">
				<div className="mb-12 max-w-3xl">
					<h2 className="text-display-lg">{content.howItWorks.title}</h2>
				</div>
				<ol className="grid gap-5 md:grid-cols-3">
					{content.howItWorks.steps.map((step, index) => (
						<li
							key={step.title}
							className="relative rounded-[var(--rounded-md)] border border-hairline bg-canvas p-6 shadow-[var(--shadow-inset)]"
						>
							<p className="mb-4 font-mono text-[11px] tracking-[0.12em] text-link uppercase">
								Step 0{index + 1}
							</p>
							<h3 className="text-display-sm mb-3">{step.title}</h3>
							<p className="text-body-md text-body">{step.description}</p>
						</li>
					))}
				</ol>
			</SectionBand>

			<SectionBand>
				<div className="mx-auto max-w-3xl text-center">
					<p className="section-eyebrow mb-4">Stay ahead of the signal</p>
					<h2 className="text-display-lg mb-4">
						Know how the company is doing before anyone asks.
					</h2>
					<p className="text-body-lg mb-8 text-body">
						Connect your sources, enable The Company Pulse, and give leadership a
						living view of customer health—alongside your Daily Brief and AI Agents.
					</p>
					<div className="flex flex-col justify-center gap-3 sm:flex-row">
						<Button asChild size="lg">
							<Link to={content.hero.primaryCta.href}>
								{content.hero.primaryCta.label}
							</Link>
						</Button>
						<Button asChild variant="outline" size="lg">
							<Link to="/hire-your-team">Hire your AI team</Link>
						</Button>
					</div>
				</div>
			</SectionBand>
		</>
	);
}
