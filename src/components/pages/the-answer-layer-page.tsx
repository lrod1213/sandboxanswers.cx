import { Link } from "@tanstack/react-router";
import {
	Activity,
	ArrowRight,
	Ban,
	Layers,
	MessageSquare,
	Shield,
	Sun,
	Users,
} from "lucide-react";

import { AnswerLayerComparisonGraphic } from "#/components/marketing/answer-layer-comparison-graphic.tsx";
import { AnswerLayerHeroGraphic } from "#/components/marketing/answer-layer-hero-graphic.tsx";
import { AnswerLayerShowcaseSection } from "#/components/marketing/answer-layer-showcase-section.tsx";
import { FaqAccordion } from "#/components/marketing/faq-accordion.tsx";
import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { MeshGradient } from "#/components/marketing/mesh-gradient.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { StackIntegrationStrip } from "#/components/marketing/stack-integration-strip.tsx";
import { TrustedByCarousel } from "#/components/marketing/trusted-by-carousel.tsx";
import {
	AskModeDemo,
	MonitorModeDemo,
} from "#/components/marketing/work-mode-demos.tsx";
import { Button } from "#/components/ui/button.tsx";
import { siteConfig } from "#/config/site.ts";
import {
	theAnswerLayerFaqItems,
	theAnswerLayerPageContent,
} from "#/content/the-answer-layer.ts";
import { cn } from "#/lib/utils.ts";

const surfaceIcons = [Sun, Activity, Users, MessageSquare] as const;
const howItWorksIcons = [Layers, Shield, MessageSquare] as const;
const reassuranceIcons = [Users, Shield, Ban] as const;

export function TheAnswerLayerPage() {
	const content = theAnswerLayerPageContent;

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
									<Layers className="size-3.5 text-link" aria-hidden />
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
											<a href={content.hero.secondaryCta.href}>
												{content.hero.secondaryCta.label}
											</a>
										</Button>
									</div>
								</div>
							</div>
							<AnswerLayerHeroGraphic className="mx-auto w-full max-w-[560px] lg:max-w-none lg:translate-y-4" />
						</div>
						<TrustedByCarousel className="mt-10 lg:mt-12" />
					</div>
				</div>
			</section>

			<SectionBand variant="soft">
				<div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
					<div>
						<p className="section-eyebrow mb-4">{content.problem.eyebrow}</p>
						<h2 className="text-display-lg mb-5">{content.problem.title}</h2>
						<p className="mb-6 text-body-lg text-body">{content.problem.lead}</p>
						<ul className="space-y-3">
							{content.problem.points.map((point) => (
								<li
									key={point}
									className="flex items-start gap-3 text-body-md text-body"
								>
									<span
										className="mt-2 size-1.5 shrink-0 rounded-full bg-highlight-pink"
										aria-hidden
									/>
									{point}
								</li>
							))}
						</ul>
					</div>
					<AnswerLayerComparisonGraphic />
				</div>
			</SectionBand>

			<SectionBand>
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

			<SectionBand variant="soft" id="how-it-works">
				<div className="mb-12 grid items-end gap-6 lg:grid-cols-[0.85fr_1fr]">
					<div>
						<p className="section-eyebrow mb-4">{content.howItWorks.eyebrow}</p>
						<h2 className="text-display-lg">{content.howItWorks.title}</h2>
					</div>
					<p className="text-body-lg text-body">
						{content.howItWorks.description}
					</p>
				</div>
				<ol className="grid gap-5 md:grid-cols-3">
					{content.howItWorks.steps.map((step, index) => {
						const Icon = howItWorksIcons[index] ?? Layers;
						return (
							<li
								key={step.title}
								className="relative overflow-hidden rounded-[var(--rounded-md)] border border-hairline bg-canvas p-6 shadow-[var(--shadow-elev-2)]"
							>
								<span
									className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-link/40 to-transparent"
									aria-hidden
								/>
								<div className="mb-4 flex items-center gap-3">
									<span className="inline-flex size-10 shrink-0 items-center justify-center rounded-[var(--rounded-md)] border border-link/15 bg-link-bg-soft text-link">
										<Icon className="size-5" aria-hidden />
									</span>
									<p className="font-mono text-[11px] tracking-[0.12em] text-link uppercase">
										Step 0{index + 1}
									</p>
								</div>
								<h3 className="text-display-sm mb-3">{step.title}</h3>
								<p className="text-body-md text-body">{step.description}</p>
							</li>
						);
					})}
				</ol>
			</SectionBand>

			<SectionBand className="!py-0 sm:!py-0 md:!py-0 lg:!py-0">
				<AnswerLayerShowcaseSection
					className="rounded-none sm:rounded-[var(--rounded-xl)]"
					eyebrow={content.showcase.eyebrow}
					title={content.showcase.title}
					description={content.showcase.description}
					tabPrompt={content.showcase.tabPrompt}
					featureIds={content.showcase.featureIds}
					defaultFeatureId={content.showcase.defaultFeatureId}
				/>
			</SectionBand>

			<SectionBand>
				<div className="mb-12 grid items-end gap-6 lg:grid-cols-[0.85fr_1fr]">
					<div>
						<p className="section-eyebrow mb-4">{content.workModes.eyebrow}</p>
						<h2 className="text-display-lg">{content.workModes.title}</h2>
					</div>
					<p className="text-body-lg text-body">
						{content.workModes.description}
					</p>
				</div>

				<div className="grid gap-5 lg:grid-cols-2">
					{content.workModes.modes.map((mode) => (
						<MarketingCard
							key={mode.title}
							variant="marketing"
							className="flex min-h-0 flex-col sm:min-h-[420px]"
						>
							<h3 className="text-display-sm mb-3">{mode.title}</h3>
							<p className="mb-6 text-body-md text-body">{mode.description}</p>
							{mode.demo === "ask" ? <AskModeDemo /> : <MonitorModeDemo />}
						</MarketingCard>
					))}
				</div>
			</SectionBand>

			<SectionBand variant="soft">
				<div className="mb-12 max-w-3xl">
					<p className="section-eyebrow mb-4">{content.surfaces.eyebrow}</p>
					<h2 className="text-display-lg mb-4">{content.surfaces.title}</h2>
					<p className="text-body-lg text-body">{content.surfaces.description}</p>
				</div>
				<div className="grid gap-5 md:grid-cols-2">
					{content.surfaces.items.map((item, index) => {
						const Icon = surfaceIcons[index] ?? MessageSquare;
						return (
							<MarketingCard key={item.title} variant="marketing" className="h-full">
								<span className="mb-4 inline-flex size-10 items-center justify-center rounded-[var(--rounded-sm)] border border-link/15 bg-link-bg-soft text-link">
									<Icon className="size-4" aria-hidden />
								</span>
								<h3 className="text-body-md-strong mb-2 text-ink">
									{item.title}
								</h3>
								<p className="mb-5 text-body-sm leading-relaxed text-body">
									{item.description}
								</p>
								<Link
									to={item.href}
									className="inline-flex items-center gap-1 text-body-sm font-medium text-link hover:underline"
								>
									{item.cta}
									<ArrowRight className="size-3.5" aria-hidden />
								</Link>
							</MarketingCard>
						);
					})}
				</div>
			</SectionBand>

			<StackIntegrationStrip content={content.stackIntegration} />

			<SectionBand variant="dark" className="relative overflow-hidden">
				<div
					className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_12%_20%,rgba(147,51,234,0.16),transparent_34%),radial-gradient(circle_at_88%_72%,rgba(94,234,212,0.1),transparent_28%)]"
					aria-hidden
				/>
				<div className="signal-grid absolute inset-0 opacity-[0.1]" aria-hidden />
				<div className="relative">
					<div className="mx-auto mb-12 max-w-3xl text-center">
						<p className="section-eyebrow mb-4 text-white/60">
							{content.reassurance.eyebrow}
						</p>
						<h2 className="text-display-lg mb-4 text-white">
							{content.reassurance.title}
						</h2>
						<p className="text-body-lg text-white/70">
							{content.reassurance.description}
						</p>
					</div>
					<div className="grid gap-5 md:grid-cols-3">
						{content.reassurance.points.map((point, index) => {
							const Icon = reassuranceIcons[index] ?? Shield;
							return (
								<MarketingCard
									key={point.title}
									variant="soft"
									className="border border-white/10 bg-white/[0.04] text-white backdrop-blur-sm"
								>
									<span className="mb-4 inline-flex size-10 items-center justify-center rounded-[var(--rounded-sm)] border border-link/25 bg-link/15 text-link">
										<Icon className="size-4" aria-hidden />
									</span>
									<h3 className="text-body-md-strong mb-2 text-white">
										{point.title}
									</h3>
									<p className="text-body-sm text-white/70">{point.description}</p>
								</MarketingCard>
							);
						})}
					</div>
					<div className="mt-10 text-center">
						<Button
							asChild
							variant="outline"
							size="lg"
							className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
						>
							<a
								href={siteConfig.trustCenterUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								View our Trust Center
							</a>
						</Button>
					</div>
				</div>
			</SectionBand>

			<SectionBand variant="soft">
				<div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
					<p className="section-eyebrow mb-4">{content.faq.eyebrow}</p>
					<h2 className="text-display-lg">{content.faq.title}</h2>
				</div>
				<MarketingCard
					variant="large"
					className="mx-auto max-w-3xl p-4 sm:p-6 md:p-8"
				>
					<FaqAccordion items={theAnswerLayerFaqItems} />
				</MarketingCard>
			</SectionBand>

			<section className="relative overflow-hidden bg-[var(--surface-inverse)] py-[var(--spacing-4xl)] text-[var(--on-inverse)] md:py-[var(--spacing-5xl)]">
				<MeshGradient className="opacity-40" />
				<span
					className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-link/50 to-transparent"
					aria-hidden
				/>
				<div className={cn("marketing-container relative z-10 text-center")}>
					<h2 className="mx-auto mb-5 max-w-3xl text-display-lg text-[var(--on-inverse)]">
						{content.cta.title}
					</h2>
					<p className="mx-auto mb-8 max-w-2xl text-body-lg text-[var(--on-inverse)]/75">
						{content.cta.description}
					</p>
					<div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
						<Button asChild size="lg">
							<Link to="/contact">{content.cta.primaryCta}</Link>
						</Button>
						<Button asChild variant="outline" size="lg">
							<Link to={content.cta.secondaryHref}>
								{content.cta.secondaryCta}
							</Link>
						</Button>
					</div>
					<p className="mt-4 text-caption text-[var(--on-inverse)]/55">
						{content.cta.caption}
					</p>
				</div>
			</section>
		</>
	);
}
