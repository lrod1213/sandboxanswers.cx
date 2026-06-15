import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { FaqAccordion } from "#/components/marketing/faq-accordion.tsx";
import { LogoStrip } from "#/components/marketing/logo-strip.tsx";
import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { MarketingHero } from "#/components/marketing/marketing-hero.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { Button } from "#/components/ui/button.tsx";
import { pricingContent } from "#/content/pricing.ts";

export function PricingPage() {
	const { plan, features, customers } = pricingContent;

	return (
		<>
			<MarketingHero
				variant="centered"
				eyebrow={pricingContent.hero.eyebrow}
				title={pricingContent.hero.title}
				lead={pricingContent.hero.lead}
			/>

			<SectionBand variant="soft">
				<div className="mx-auto max-w-3xl">
					<MarketingCard variant="large" className="overflow-hidden p-0">
						<div className="border-b border-hairline bg-canvas-soft px-8 py-10 md:px-10">
							<h2 className="text-display-lg mb-6">{plan.title}</h2>
							<div className="mb-6 flex flex-wrap items-end gap-x-3 gap-y-1">
								<p className="text-body-md-strong text-body">{plan.priceLabel}</p>
								<p className="text-[2.75rem] font-semibold leading-none tracking-[-0.04em] text-ink sm:text-[3.25rem]">
									{plan.price}
								</p>
								<p className="pb-1 text-body-lg text-body">{plan.period}</p>
							</div>
							<p className="text-body-lg mb-4 text-body">{plan.description}</p>
							<p className="text-body-md text-body">{plan.promise}</p>
							<div className="mt-8">
								<Button asChild size="lg">
									<Link to="/contact">Talk to sales</Link>
								</Button>
							</div>
						</div>
						<div className="px-8 py-10 md:px-10">
							<h3 className="text-display-sm mb-6">
								{pricingContent.featuresTitle}
							</h3>
							<ul className="grid gap-3 sm:grid-cols-2">
								{features.map((feature) => (
									<li
										key={feature}
										className="flex items-start gap-3 text-body-md text-ink"
									>
										<span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-link-bg-soft text-link">
											<Check className="size-3" aria-hidden />
										</span>
										{feature}
									</li>
								))}
							</ul>
						</div>
					</MarketingCard>
				</div>
			</SectionBand>

			<SectionBand>
				<div className="mx-auto max-w-3xl text-center">
					<p className="section-eyebrow mb-4">{customers.eyebrow}</p>
					<h2 className="text-display-lg mb-4">{customers.title}</h2>
					<p className="text-body-lg mb-3 text-body">{customers.lead}</p>
					<p className="text-body-md-strong text-ink">{customers.tagline}</p>
				</div>
				<div className="mt-14">
					<LogoStrip
						title="Trusted by the most valuable brands"
						className="max-w-5xl"
					/>
				</div>
			</SectionBand>

			<SectionBand variant="soft">
				<div className="mx-auto max-w-3xl">
					<p className="section-eyebrow mb-4">FAQ</p>
					<h2 className="text-display-lg mb-8">
						Questions teams ask before they buy.
					</h2>
					<MarketingCard variant="large" className="p-6 md:p-8">
						<FaqAccordion items={[...pricingContent.faq]} />
					</MarketingCard>
				</div>
			</SectionBand>
		</>
	);
}
