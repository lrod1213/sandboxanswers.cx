import { Link } from "@tanstack/react-router";

import { MarketingHero } from "#/components/marketing/marketing-hero.tsx";
import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { Button } from "#/components/ui/button.tsx";
import { aboutContent } from "#/content/about.ts";

export function AboutPage() {
	return (
		<>
			<MarketingHero
				variant="centered"
				eyebrow={aboutContent.hero.eyebrow}
				title={aboutContent.hero.title}
				lead={aboutContent.hero.lead}
			/>

			<SectionBand variant="soft">
				<div className="grid gap-8 rounded-[var(--rounded-lg)] bg-canvas p-8 elev-4 md:p-10 lg:grid-cols-[0.8fr_1fr]">
					<h2 className="text-display-lg mb-4">{aboutContent.story.title}</h2>
					<div>
						<p className="text-body-lg mb-8 text-body">
							{aboutContent.story.body}
						</p>
						<Button asChild size="lg">
							<Link to="/contact">Request a demo</Link>
						</Button>
					</div>
				</div>
			</SectionBand>

			<SectionBand>
				<div className="mx-auto max-w-3xl">
					<p className="section-eyebrow mb-4">Our mission</p>
					<h2 className="text-display-lg mb-4">{aboutContent.mission.title}</h2>
					<p className="text-body-lg text-body">{aboutContent.mission.body}</p>
				</div>
			</SectionBand>

			<SectionBand variant="soft">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-display-lg mb-4">{aboutContent.awards.title}</h2>
					<p className="text-body-lg mb-10 text-body">
						{aboutContent.awards.lead}
					</p>
					<div className="grid gap-4 sm:grid-cols-3">
						{aboutContent.awards.items.map((item) => (
							<MarketingCard key={item} variant="soft">
								<h3 className="text-display-sm">{item}</h3>
							</MarketingCard>
						))}
					</div>
				</div>
			</SectionBand>
		</>
	);
}
