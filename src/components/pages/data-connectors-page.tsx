import { Link } from "@tanstack/react-router";

import { MarketingHero } from "#/components/marketing/marketing-hero.tsx";
import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import {
	apiConnectors,
	appConnectors,
	dataConnectorsPageContent,
} from "#/content/integrations.ts";

export function DataConnectorsPage() {
	const content = dataConnectorsPageContent;

	return (
		<>
			<MarketingHero
				variant="centered"
				eyebrow={content.hero.eyebrow}
				title={content.hero.title}
				lead={content.hero.lead}
			/>

			<SectionBand variant="soft">
				<div className="mb-12 grid items-end gap-6 lg:grid-cols-[0.8fr_1fr]">
					<h2 className="text-display-lg">{content.featureBand.title}</h2>
					<p className="text-body-lg text-body">
						{content.featureBand.description}
					</p>
				</div>

				<div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
					<div>
						<p className="section-eyebrow mb-4">
							{content.apiSection.eyebrow}
						</p>
						<h3 className="text-display-sm">{content.apiSection.title}</h3>
					</div>
					<p className="max-w-xl text-body-sm text-body">
						{content.apiSection.notePrefix}{" "}
						<Link to="/contact" className="text-link hover:underline">
							Send us a quick note
						</Link>
						.
					</p>
				</div>
				<div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{apiConnectors.map((connector) => (
						<MarketingCard key={connector.slug} className="min-h-48">
							<h4 className="text-display-sm mb-2">{connector.name}</h4>
							<p className="text-body-sm text-body">{connector.description}</p>
						</MarketingCard>
					))}
				</div>

				<div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
					<div>
						<p className="section-eyebrow mb-4">
							{content.appSection.eyebrow}
						</p>
						<h3 className="text-display-sm">{content.appSection.title}</h3>
					</div>
					<p className="max-w-xl text-body-sm text-body">
						{content.appSection.description}
					</p>
				</div>
				<div className="grid gap-4 md:grid-cols-3">
					{appConnectors.map((connector) => (
						<MarketingCard key={connector.name} className="min-h-56">
							<h4 className="text-display-sm mb-2">{connector.name}</h4>
							<p className="text-body-sm mb-4 text-body">
								{connector.description}
							</p>
							<Link
								to="/contact"
								className="text-body-sm font-medium text-link hover:underline"
							>
								View Details
							</Link>
						</MarketingCard>
					))}
				</div>
			</SectionBand>
		</>
	);
}
