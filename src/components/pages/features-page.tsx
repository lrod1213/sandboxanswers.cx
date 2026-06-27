import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { MarketingHero } from "#/components/marketing/marketing-hero.tsx";
import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { Button } from "#/components/ui/button.tsx";
import { featuresPageContent } from "#/content/features.ts";

export function FeaturesPage() {
	const content = featuresPageContent;

	return (
		<>
			<MarketingHero
				variant="centered"
				eyebrow={content.hero.eyebrow}
				title={content.hero.title}
				lead={content.hero.lead}
				actions={
					<Button asChild size="lg" className="mt-2">
						<Link to="/contact">See it in action</Link>
					</Button>
				}
			/>

			<SectionBand variant="soft">
				<div className="mb-12 grid items-end gap-6 lg:grid-cols-[0.8fr_1fr]">
					<h2 className="text-display-lg">{content.featureBand.title}</h2>
					<p className="text-body-lg text-body">
						{content.featureBand.description}
					</p>
				</div>

				<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
					{content.features.map((feature) => (
						<MarketingCard key={feature.title} variant="marketing" className="flex h-full flex-col">
							<h3 className="text-display-sm mb-3">{feature.title}</h3>
							<p className="mb-6 flex-1 text-body-md text-body">
								{feature.description}
							</p>
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
					))}
				</div>
			</SectionBand>

			<SectionBand>
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-display-lg mb-4">
						See the Answer Layer on your data.
					</h2>
					<p className="text-body-lg mb-8 text-body">
						Start with a scoped pilot, connect your sources, and explore features
						with your team in days—not months.
					</p>
					<div className="flex flex-col justify-center gap-3 sm:flex-row">
						<Button asChild size="lg">
							<Link to="/contact">Book a demo</Link>
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
