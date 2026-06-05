import { createFileRoute } from "@tanstack/react-router";

import { MarketingButton } from "#/components/marketing/marketing-button.tsx";
import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { MeshGradient } from "#/components/marketing/mesh-gradient.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { aboutContent } from "#/content/about.ts";
import { createPageMeta } from "#/lib/seo.ts";

export const Route = createFileRoute("/about")({
	head: () => ({
		meta: createPageMeta({
			title: "About Us",
			description: aboutContent.story.body,
			path: "/about",
		}),
	}),
	component: AboutPage,
});

function AboutPage() {
	return (
		<>
			<section className="relative overflow-hidden bg-canvas py-16 md:py-24">
				<MeshGradient />
				<div className="marketing-container relative z-10">
					<div className="mx-auto max-w-3xl text-center">
						<p className="font-mono-caption mb-4 text-mute">
							{aboutContent.hero.eyebrow}
						</p>
						<h1 className="text-display-xl mb-6">{aboutContent.hero.title}</h1>
						<p className="text-body-lg text-body">{aboutContent.hero.lead}</p>
					</div>
				</div>
			</section>

			<SectionBand variant="soft">
				<div className="mx-auto max-w-3xl">
					<h2 className="text-display-lg mb-4">{aboutContent.story.title}</h2>
					<p className="text-body-lg mb-8 text-body">
						{aboutContent.story.body}
					</p>
					<MarketingButton to="/contact">Request a demo</MarketingButton>
				</div>
			</SectionBand>

			<SectionBand>
				<div className="mx-auto max-w-3xl">
					<p className="font-mono-caption mb-4 text-mute">Our mission</p>
					<h2 className="text-display-lg mb-4">{aboutContent.mission.title}</h2>
					<p className="text-body-lg text-body">{aboutContent.mission.body}</p>
				</div>
			</SectionBand>

			<SectionBand variant="soft">
				<div className="mx-auto max-w-3xl text-center">
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
