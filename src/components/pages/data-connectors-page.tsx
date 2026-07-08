import { Link } from "@tanstack/react-router";
import {
	Check,
	Database,
	ImageIcon,
	Shield,
	Sparkles,
	Unplug,
} from "lucide-react";

import { FaqAccordion } from "#/components/marketing/faq-accordion.tsx";
import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { MarketingHero } from "#/components/marketing/marketing-hero.tsx";
import { MeshGradient } from "#/components/marketing/mesh-gradient.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { StackIntegrationStrip } from "#/components/marketing/stack-integration-strip.tsx";
import { Button } from "#/components/ui/button.tsx";
import { siteConfig } from "#/config/site.ts";
import {
	connectorsFaqItems,
	connectorsStackIntegration,
	dataConnectorsPageContent,
	supportedConnectors,
} from "#/content/integrations.ts";
import { cn } from "#/lib/utils.ts";

const governanceIcons = [Unplug, Database, Shield, Sparkles] as const;

export function DataConnectorsPage() {
	const content = dataConnectorsPageContent;

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

			<StackIntegrationStrip content={connectorsStackIntegration} />

			<SectionBand variant="soft" id="platforms">
				<div className="mb-12 grid items-end gap-6 lg:grid-cols-[0.85fr_1fr]">
					<div>
						<p className="section-eyebrow mb-4">Supported platforms</p>
						<h2 className="text-display-lg">
							The systems your team already lives in.
						</h2>
					</div>
					<p className="text-body-lg text-body">
						Pre-built connectors for the CRM, support, and contact-center tools
						most CX teams run. Each one feeds the same governed answer
						layer—Ask mode, Daily Briefs, and AI Specialists included.
					</p>
				</div>

				<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
					{supportedConnectors.map((connector) => (
						<MarketingCard
							key={connector.slug}
							variant="marketing"
							className="flex h-full flex-col"
						>
							<div className="mb-5 flex items-center gap-3">
								<span className="inline-flex h-12 min-w-[3rem] items-center justify-center rounded-[var(--rounded-md)] border border-hairline bg-canvas-soft px-3">
									{connector.logo ? (
										<img
											src={connector.logo}
											alt=""
											className="max-h-7 w-auto max-w-[120px] object-contain"
											loading="lazy"
											decoding="async"
										/>
									) : (
										<span
											className="inline-flex size-8 items-center justify-center rounded-[var(--rounded-sm)] border border-dashed border-hairline-strong/70 text-mute"
											aria-hidden
										>
											<ImageIcon className="size-4" />
										</span>
									)}
								</span>
								<h3 className="text-display-sm">{connector.name}</h3>
							</div>
							<p className="mb-5 flex-1 text-body-md text-body">
								{connector.description}
							</p>
							<div className="rounded-[var(--rounded-sm)] border border-hairline bg-canvas-soft/60 px-3 py-2.5">
								<p className="font-mono text-[10px] tracking-[0.12em] text-mute uppercase">
									Typical data
								</p>
								<p className="mt-1 text-body-sm text-body">
									{connector.dataSources}
								</p>
							</div>
						</MarketingCard>
					))}
				</div>

				<p className="mx-auto mt-10 max-w-2xl text-center text-body-md text-body">
					Running something else?{" "}
					<Link to="/contact" className="font-medium text-link hover:underline">
						Send us a quick note
					</Link>{" "}
					and we&apos;ll tell you how fast you can be live.
				</p>
			</SectionBand>

			<SectionBand>
				<div className="mb-12 grid items-end gap-6 lg:grid-cols-[0.85fr_1fr]">
					<div>
						<p className="section-eyebrow mb-4">{content.outcomes.eyebrow}</p>
						<h2 className="text-display-lg">{content.outcomes.title}</h2>
					</div>
					<p className="text-body-lg text-body">
						{content.outcomes.description}
					</p>
				</div>

				<div className="grid gap-5 md:grid-cols-3">
					{content.outcomes.items.map((item, index) => (
						<MarketingCard key={item.title} className="min-h-56">
							<p className="font-mono-caption mb-6 text-body">
								0{index + 1}
							</p>
							<h3 className="text-display-sm mb-3">{item.title}</h3>
							<p className="text-body-md text-body">{item.description}</p>
						</MarketingCard>
					))}
				</div>
			</SectionBand>

			<SectionBand variant="soft">
				<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
					<div>
						<p className="section-eyebrow mb-4">{content.dataTypes.eyebrow}</p>
						<h2 className="text-display-lg mb-5">{content.dataTypes.title}</h2>
						<p className="text-body-lg text-body">
							{content.dataTypes.description}
						</p>
					</div>

					<ul className="grid gap-3 sm:grid-cols-2">
						{content.dataTypes.types.map((type) => (
							<li
								key={type}
								className="flex items-start gap-3 rounded-[var(--rounded-md)] border border-hairline bg-canvas px-4 py-3.5 shadow-[var(--shadow-inset)]"
							>
								<span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-link-bg-soft text-link">
									<Check className="size-3" aria-hidden />
								</span>
								<span className="text-body-sm-strong text-ink">{type}</span>
							</li>
						))}
					</ul>
				</div>
			</SectionBand>

			<SectionBand>
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<p className="section-eyebrow mb-4">{content.governance.eyebrow}</p>
					<h2 className="text-display-lg mb-5">{content.governance.title}</h2>
					<p className="text-body-lg text-body">
						{content.governance.description}
					</p>
				</div>

				<div className="grid gap-5 md:grid-cols-2">
					{content.governance.points.map((point, index) => {
						const Icon = governanceIcons[index] ?? Shield;
						return (
							<div
								key={point.title}
								className="relative overflow-hidden rounded-[var(--rounded-md)] border border-hairline bg-canvas p-6 shadow-[var(--shadow-elev-2)]"
							>
								<span
									className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-link/40 to-transparent"
									aria-hidden
								/>
								<div className="mb-4 inline-flex size-10 items-center justify-center rounded-[var(--rounded-md)] border border-link/15 bg-link-bg-soft text-link">
									<Icon className="size-5" aria-hidden />
								</div>
								<h3 className="text-body-md-strong mb-2 text-ink">
									{point.title}
								</h3>
								<p className="text-body-sm leading-relaxed text-body">
									{point.description}
								</p>
							</div>
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
					<FaqAccordion items={connectorsFaqItems} />
				</MarketingCard>
			</SectionBand>

			<section className="relative overflow-hidden bg-[var(--surface-inverse)] py-[var(--spacing-4xl)] text-[var(--on-inverse)] md:py-[var(--spacing-5xl)]">
				<MeshGradient className="opacity-40" />
				<span
					className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-link/50 to-transparent"
					aria-hidden
				/>
				<div
					className={cn(
						"marketing-container relative z-10 text-center",
					)}
				>
					<h2 className="mx-auto mb-5 max-w-3xl text-display-lg text-[var(--on-inverse)]">
						{content.cta.title}
					</h2>
					<p className="mx-auto mb-8 max-w-2xl text-body-lg text-[var(--on-inverse)]/75">
						{content.cta.description}
					</p>
					<div className="flex flex-col items-center gap-3">
						<Button asChild size="lg">
							<Link to="/contact">{content.cta.primaryCta}</Link>
						</Button>
						<p className="text-caption text-[var(--on-inverse)]/55">
							{content.cta.caption}
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
