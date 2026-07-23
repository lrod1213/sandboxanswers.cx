import { Link } from "@tanstack/react-router";
import {
	Activity,
	ArrowRight,
	AudioLines,
	Ban,
	Briefcase,
	Eye,
	GraduationCap,
	Headphones,
	Layers,
	Lightbulb,
	MessageSquare,
	Shield,
	Sun,
	TrendingUp,
	Users,
} from "lucide-react";

import { CompanyPulseHeroGraphic } from "#/components/marketing/company-pulse-hero-graphic.tsx";
import { FaqAccordion } from "#/components/marketing/faq-accordion.tsx";
import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { MarketingHero } from "#/components/marketing/marketing-hero.tsx";
import { MeshGradient } from "#/components/marketing/mesh-gradient.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import {
	AskModeDemo,
	MonitorModeDemo,
} from "#/components/marketing/work-mode-demos.tsx";
import { Button } from "#/components/ui/button.tsx";
import { siteConfig } from "#/config/site.ts";
import { featuresFaqItems, featuresPageContent } from "#/content/features.ts";
import { cn } from "#/lib/utils.ts";

const featureIcons = [
	MessageSquare,
	Sun,
	Activity,
	Users,
	Eye,
	AudioLines,
	GraduationCap,
] as const;

const personaIcons = [Headphones, TrendingUp, Lightbulb, Briefcase] as const;

const reassuranceIcons = [Users, Shield, Ban] as const;

const unifiedLayerIcons = [Layers, Shield, MessageSquare] as const;

export function FeaturesPage() {
	const content = featuresPageContent;

	return (
		<>
			<MarketingHero
				variant="centered"
				atmosphere
				eyebrow={content.hero.eyebrow}
				title={content.hero.title}
				lead={content.hero.lead}
				actions={
					<div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
						<Button asChild size="lg" className="w-full sm:w-auto">
							<Link to="/contact">{content.hero.primaryCta}</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="w-full sm:w-auto"
						>
							<Link to={content.hero.secondaryHref}>
								{content.hero.secondaryCta}
							</Link>
						</Button>
					</div>
				}
			/>

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
				<div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
					<div>
						<p className="section-eyebrow mb-4">
							{content.companyPulseSpotlight.eyebrow}
						</p>
						<h2 className="text-display-lg mb-5">
							{content.companyPulseSpotlight.title}
						</h2>
						<p className="mb-6 text-body-lg text-body">
							{content.companyPulseSpotlight.lead}
						</p>
						<ul className="mb-8 space-y-3">
							{content.companyPulseSpotlight.highlights.map((highlight) => (
								<li
									key={highlight}
									className="flex items-start gap-3 text-body-md text-body"
								>
									<span
										className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan"
										aria-hidden
									/>
									{highlight}
								</li>
							))}
						</ul>
						<Link
							to={content.companyPulseSpotlight.href}
							className="inline-flex items-center gap-1 text-body-sm font-medium text-link hover:underline"
						>
							{content.companyPulseSpotlight.cta}
							<ArrowRight className="size-3.5" aria-hidden />
						</Link>
					</div>
					<CompanyPulseHeroGraphic className="w-full" />
				</div>
			</SectionBand>

			<SectionBand>
				<div className="mb-12 grid items-end gap-6 lg:grid-cols-[0.85fr_1fr]">
					<div>
						<p className="section-eyebrow mb-4">{content.featureBand.eyebrow}</p>
						<h2 className="text-display-lg">{content.featureBand.title}</h2>
					</div>
					<p className="text-body-lg text-body">
						{content.featureBand.description}
					</p>
				</div>

				<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
					{content.features.map((feature, index) => {
						const Icon = featureIcons[index] ?? MessageSquare;
						return (
							<MarketingCard
								key={feature.title}
								variant="marketing"
								className="flex h-full flex-col"
							>
								<div className="mb-5 inline-flex size-10 items-center justify-center rounded-[var(--rounded-md)] border border-link/15 bg-link-bg-soft text-link">
									<Icon className="size-5" aria-hidden />
								</div>
								<h3 className="text-display-sm mb-3">{feature.title}</h3>
								<p className="mb-5 text-body-md text-body">
									{feature.description}
								</p>
								<ul className="mb-6 flex-1 space-y-2">
									{feature.highlights.map((highlight) => (
										<li
											key={highlight}
											className="flex items-start gap-2 text-body-sm text-body"
										>
											<span
												className="mt-1.5 size-1.5 shrink-0 rounded-full bg-link"
												aria-hidden
											/>
											{highlight}
										</li>
									))}
								</ul>
								{feature.href ? (
									<Link
										to={feature.href}
										className="inline-flex items-center gap-1 text-body-sm font-medium text-link hover:underline"
									>
										Learn more
										<ArrowRight className="size-3.5" aria-hidden />
									</Link>
								) : null}
							</MarketingCard>
						);
					})}
				</div>
			</SectionBand>

			<SectionBand>
				<div className="mb-12 grid items-end gap-6 lg:grid-cols-[0.85fr_1fr]">
					<div>
						<p className="section-eyebrow mb-4">
							{content.unifiedLayer.eyebrow}
						</p>
						<h2 className="text-display-lg">{content.unifiedLayer.title}</h2>
					</div>
					<p className="text-body-lg text-body">
						{content.unifiedLayer.description}
					</p>
				</div>

				<div className="grid gap-5 md:grid-cols-3">
					{content.unifiedLayer.steps.map((step, index) => {
						const Icon = unifiedLayerIcons[index] ?? Layers;
						return (
							<div
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
									<span
										className="font-mono text-[11px] tracking-[0.14em] text-mute uppercase"
										aria-hidden
									>
										{String(index + 1).padStart(2, "0")}
									</span>
								</div>
								<h3 className="text-body-md-strong mb-2 text-ink">
									{step.title}
								</h3>
								<p className="text-body-sm leading-relaxed text-body">
									{step.description}
								</p>
							</div>
						);
					})}
				</div>

				<p className="mx-auto mt-10 max-w-2xl text-center text-body-md text-body">
					Need to see how connectors fit in?{" "}
					<Link
						to="/data-connectors"
						className="font-medium text-link hover:underline"
					>
						Explore our supported platforms
					</Link>
					.
				</p>
			</SectionBand>

			<SectionBand variant="soft">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<p className="section-eyebrow mb-4">{content.audiences.eyebrow}</p>
					<h2 className="text-display-lg mb-5">{content.audiences.title}</h2>
					<p className="text-body-lg text-body">
						{content.audiences.description}
					</p>
				</div>

				<div className="grid gap-5 md:grid-cols-2">
					{content.audiences.personas.map((persona, index) => {
						const Icon = personaIcons[index] ?? Briefcase;
						return (
							<MarketingCard key={persona.title} className="min-h-44">
								<div className="mb-4 inline-flex size-10 items-center justify-center rounded-[var(--rounded-md)] border border-link/15 bg-link-bg-soft text-link">
									<Icon className="size-5" aria-hidden />
								</div>
								<h3 className="text-display-sm mb-3">{persona.title}</h3>
								<p className="text-body-md text-body">{persona.description}</p>
							</MarketingCard>
						);
					})}
				</div>
			</SectionBand>

			<SectionBand>
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<p className="section-eyebrow mb-4">{content.reassurance.eyebrow}</p>
					<h2 className="text-display-lg mb-5">{content.reassurance.title}</h2>
					<p className="text-body-lg text-body">
						{content.reassurance.description}
					</p>
				</div>

				<div className="grid gap-5 md:grid-cols-3">
					{content.reassurance.points.map((point, index) => {
						const Icon = reassuranceIcons[index] ?? Shield;
						return (
							<MarketingCard key={point.title} variant="soft" className="min-h-52">
								<div className="mb-4 inline-flex size-10 items-center justify-center rounded-[var(--rounded-md)] border border-link/15 bg-link-bg-soft text-link">
									<Icon className="size-5" aria-hidden />
								</div>
								<h3 className="text-body-md-strong mb-2 text-ink">
									{point.title}
								</h3>
								<p className="text-body-sm leading-relaxed text-body">
									{point.description}
								</p>
							</MarketingCard>
						);
					})}
				</div>

				<div className="mt-10 text-center">
					<Button asChild variant="outline" size="lg">
						<a
							href={siteConfig.trustCenterUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							View our Trust Center
						</a>
					</Button>
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
					<FaqAccordion items={featuresFaqItems} />
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
