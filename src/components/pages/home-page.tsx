import { Link } from "@tanstack/react-router";
import {
	Award,
	Ban,
	Lock,
	Shield,
	Sparkles,
	type LucideIcon,
} from "lucide-react";

import { DailyBriefHeroGraphic } from "#/components/marketing/daily-brief-hero-graphic.tsx";
import { ExplorePlansSection } from "#/components/marketing/explore-plans-section.tsx";
import { FaqAccordion } from "#/components/marketing/faq-accordion.tsx";
import { HomeAnswerLayerShowcaseSection } from "#/components/marketing/home-answer-layer-showcase-section.tsx";
import { HomeHeroValueStrip } from "#/components/marketing/home-hero-value-strip.tsx";
import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { MeshGradient } from "#/components/marketing/mesh-gradient.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { SocialProofSection } from "#/components/marketing/social-proof-section.tsx";
import { StackIntegrationStrip } from "#/components/marketing/stack-integration-strip.tsx";
import { TrustedByCarousel } from "#/components/marketing/trusted-by-carousel.tsx";
import { Button } from "#/components/ui/button.tsx";
import {
	explorePlans,
	faqItems,
	hireYourTeamPageContent,
	privacySecurityPoints,
	socialProof,
	stackIntegration,
} from "#/content/home-team.ts";
import { siteConfig } from "#/config/site.ts";

const privacySecurityIcons = {
	award: Award,
	shield: Shield,
	lock: Lock,
	ban: Ban,
} as const satisfies Record<
	(typeof privacySecurityPoints)[number]["icon"],
	LucideIcon
>;

export function HomePage() {
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
									<Sparkles className="size-3.5 text-link" aria-hidden />
									Executive customer intelligence
								</div>
								<h1 className="max-w-4xl text-[2.375rem] font-semibold leading-[0.95] tracking-[-0.06em] text-ink sm:text-[2.5rem] sm:leading-[0.92] sm:tracking-[-0.08em] md:text-[56px] md:tracking-[-3.4px] lg:text-[72px] lg:tracking-[-4px]">
									Know what matters before you ask.
								</h1>
								<div className="mt-8 flex max-w-xl flex-col gap-5">
									<p className="text-body-lg text-body">
										Your customers are already telling you what&apos;s changing—you
										just don&apos;t have time to find it across five tools before
										standup. The Answer Layer does, while you&apos;re grabbing your
										first coffee.
									</p>
									<HomeHeroValueStrip />
									<div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
										<Button asChild size="lg" className="w-full sm:w-auto">
											<Link to="/contact">Book a demo</Link>
										</Button>
										<Button
											asChild
											variant="outline"
											size="lg"
											className="w-full sm:w-auto"
										>
											<Link to="/daily-signal">See how it works</Link>
										</Button>
									</div>
								</div>
							</div>
							<DailyBriefHeroGraphic
								belowCaption={hireYourTeamPageContent.heroVideo.belowCaption}
								className="mx-auto w-full max-w-[560px] lg:max-w-none lg:translate-y-4"
							/>
						</div>
						<TrustedByCarousel className="mt-10 lg:mt-12" />
					</div>
				</div>
			</section>

			<SectionBand className="!py-0 sm:!py-0 md:!py-0 lg:!py-0">
				<HomeAnswerLayerShowcaseSection className="rounded-none sm:rounded-[var(--rounded-xl)]" />
			</SectionBand>

			<StackIntegrationStrip content={stackIntegration} />

			<SocialProofSection content={socialProof} />

			<ExplorePlansSection content={explorePlans} className="mt-0" />

			<SectionBand variant="soft">
				<div className="mb-12 max-w-3xl">
					<p className="section-eyebrow mb-4">Privacy &amp; security</p>
					<h2 className="text-display-lg mb-4">
						Safe to bring to your board. Safe to connect your data.
					</h2>
					<p className="text-body-lg text-body">
						Your AI Agents only work with data you connect, under controls
						your security and legal teams can stand behind.
					</p>
				</div>
				<div className="mb-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
					{privacySecurityPoints.map((item) => {
						const Icon = privacySecurityIcons[item.icon];
						return (
							<div
								key={item.title}
								className="group relative overflow-hidden rounded-[var(--rounded-md)] border border-hairline bg-canvas p-6 shadow-[var(--shadow-elev-2)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-link/30 hover:shadow-[var(--shadow-elev-4)]"
							>
								<div
									className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-link/5 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
									aria-hidden
								/>
								<div className="relative flex gap-4">
									<span className="inline-flex size-11 shrink-0 items-center justify-center rounded-[var(--rounded-md)] border border-link/15 bg-link-bg-soft text-link">
										<Icon className="size-5" aria-hidden />
									</span>
									<div>
										<h3 className="text-body-md-strong mb-2 text-ink">
											{item.title}
										</h3>
										<p className="text-body-sm leading-relaxed text-body">
											{item.description}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div className="text-center">
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

			<SectionBand>
				<div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
					<p className="section-eyebrow mb-4">FAQ</p>
					<h2 className="text-display-lg">Answers to common questions.</h2>
				</div>
				<MarketingCard
					variant="large"
					className="mx-auto max-w-3xl p-4 sm:p-6 md:p-8"
				>
					<FaqAccordion items={[...faqItems]} />
				</MarketingCard>
			</SectionBand>

			<section className="relative overflow-hidden bg-[var(--surface-inverse)] py-[var(--spacing-4xl)] text-[var(--on-inverse)] md:py-[var(--spacing-5xl)]">
				<span
					className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-link/50 to-transparent"
					aria-hidden
				/>
				<div
					className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_15%_8%,rgba(147,51,234,0.18),transparent_36%),radial-gradient(circle_at_85%_92%,rgba(94,234,212,0.1),transparent_32%)]"
					aria-hidden
				/>
				<div
					className="signal-grid pointer-events-none absolute inset-0 opacity-[0.08]"
					aria-hidden
				/>
				<div className="marketing-container relative">
					<div className="mx-auto max-w-2xl text-center">
						<p className="section-eyebrow mb-4">Get started</p>
						<h2 className="text-display-lg text-white">
							Ready to know what matters before you ask?
						</h2>
						<p className="mx-auto mt-5 max-w-xl text-body-lg text-white/65">
							Book a 30-minute demo and see the Daily Brief built on your own
							customer data—turning the signals you already own into executive
							intelligence your team can act on.
						</p>
						<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
							<Button asChild size="lg" className="w-full sm:w-auto">
								<Link to="/contact">Book a Demo</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="w-full border-white/25 bg-transparent text-white shadow-none hover:border-white/40 hover:bg-white/10 hover:text-white sm:w-auto"
							>
								<Link to="/daily-signal">See how it works</Link>
							</Button>
						</div>
						<p className="mt-5 text-caption text-white/45">
							30-minute walkthrough · No commitment
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
