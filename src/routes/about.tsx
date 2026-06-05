import { createFileRoute, Link } from "@tanstack/react-router";

import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { MeshGradient } from "#/components/marketing/mesh-gradient.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { Button } from "#/components/ui/button.tsx";
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
			<section className="marketing-hero">
				<MeshGradient />
				<div className="marketing-container relative z-10">
					<div className="mx-auto max-w-4xl text-center">
						<p className="font-mono-caption mb-4 text-body">
							{aboutContent.hero.eyebrow}
						</p>
						<h1 className="mx-auto mb-6 max-w-3xl text-[2rem] font-semibold leading-[1.05] tracking-[-0.05em] text-ink sm:text-display-xl md:text-[56px] md:leading-[56px] md:tracking-[-3px]">
							{aboutContent.hero.title}
						</h1>
						<p className="text-body-lg mx-auto max-w-2xl text-body">
							{aboutContent.hero.lead}
						</p>
					</div>
				</div>
			</section>

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
					<p className="font-mono-caption mb-4 text-body">Our mission</p>
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
