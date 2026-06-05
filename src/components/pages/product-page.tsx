import { MarketingButton } from "#/components/marketing/marketing-button.tsx";
import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { MeshGradient } from "#/components/marketing/mesh-gradient.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import type { ProductPageContent } from "#/content/products.ts";

type ProductPageProps = {
	content: ProductPageContent;
};

export function ProductPage({ content }: ProductPageProps) {
	return (
		<>
			<section className="relative overflow-hidden bg-canvas py-16 md:py-24">
				<MeshGradient />
				<div className="marketing-container relative z-10">
					<div className="mx-auto max-w-3xl text-center rise-in">
						<p className="font-mono-caption mb-4 text-mute">
							{content.hero.eyebrow}
						</p>
						<h1 className="text-display-xl mb-6">{content.hero.title}</h1>
						<p className="text-body-lg mb-8 text-body">{content.hero.lead}</p>
						<div className="flex flex-wrap justify-center gap-3">
							<MarketingButton to="/contact">
								{content.hero.primaryCta}
							</MarketingButton>
							{content.hero.secondaryCta && content.hero.secondaryHref ? (
								<MarketingButton
									variant="secondary"
									to={content.hero.secondaryHref}
								>
									{content.hero.secondaryCta}
								</MarketingButton>
							) : null}
						</div>
					</div>
				</div>
			</section>

			<SectionBand variant="soft">
				<div className="grid gap-6 md:grid-cols-3">
					{content.features.map((feature) => (
						<MarketingCard key={feature.title}>
							<h2 className="text-display-sm mb-3">{feature.title}</h2>
							<p className="text-body-md text-body">{feature.description}</p>
						</MarketingCard>
					))}
				</div>
			</SectionBand>
		</>
	);
}
