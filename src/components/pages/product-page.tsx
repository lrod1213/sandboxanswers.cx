import { Link } from "@tanstack/react-router";
import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { MeshGradient } from "#/components/marketing/mesh-gradient.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { Button } from "#/components/ui/button.tsx";
import type { ProductPageContent } from "#/content/products.ts";

type ProductPageProps = {
	content: ProductPageContent;
};

export function ProductPage({ content }: ProductPageProps) {
	return (
		<>
			<section className="marketing-hero">
				<MeshGradient />
				<div
					className="signal-grid marketing-hero-atmosphere opacity-60"
					aria-hidden
				/>
				<div className="marketing-container relative z-10">
					<div className="grid items-center gap-8 rise-in md:gap-14 lg:grid-cols-[0.95fr_1.05fr]">
						<div>
							<p className="font-mono-caption mb-4 text-body">
								{content.hero.eyebrow}
							</p>
							<h1 className="mb-6 max-w-3xl text-[2.375rem] font-semibold leading-[0.95] tracking-[-0.06em] text-ink sm:text-[2.75rem] md:text-[52px] md:leading-[0.94] md:tracking-[-3px] lg:text-[72px] lg:tracking-[-4.8px]">
								{content.hero.title}
							</h1>
							<p className="text-body-lg mb-8 max-w-xl text-body">
								{content.hero.lead}
							</p>
							<div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
								<Button asChild size="lg" className="w-full sm:w-auto">
									<Link to="/contact">{content.hero.primaryCta}</Link>
								</Button>
								{content.hero.secondaryCta && content.hero.secondaryHref ? (
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
								) : null}
							</div>
						</div>
						<ProductSignalPanel content={content} />
					</div>
				</div>
			</section>

			<SectionBand variant="soft">
				<div className="mb-12 grid items-end gap-6 lg:grid-cols-[0.8fr_1fr]">
					<h2 className="text-display-lg">Designed around the work.</h2>
					<p className="text-body-lg text-body">
						Each product surface carries the same answer-layer foundation: fast
						setup, governed context, and consumer-grade clarity.
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-3">
					{content.features.map((feature, index) => (
						<MarketingCard key={feature.title} className="min-h-56">
							<p className="font-mono-caption mb-8 text-body">0{index + 1}</p>
							<h2 className="text-display-sm mb-3">{feature.title}</h2>
							<p className="text-body-md text-body">{feature.description}</p>
						</MarketingCard>
					))}
				</div>
			</SectionBand>
		</>
	);
}

function ProductSignalPanel({ content }: ProductPageProps) {
	const featured = content.features.slice(0, 3);

	return (
		<div className="relative">
			<div className="signal-noise absolute inset-6 rounded-[32px] blur-3xl" />
			<div className="relative overflow-hidden rounded-[28px] bg-ink p-3 text-white elev-5">
				<div className="relative rounded-[20px] border border-white/10 bg-white/[0.035] p-5">
					<div className="mb-6 flex items-start justify-between gap-4 border-b border-white/10 pb-5">
						<div>
							<p className="font-mono-caption text-white/60">Product signal</p>
							<p className="mt-2 text-display-sm">{content.hero.eyebrow}</p>
						</div>
						<div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 font-mono text-[12px] text-white/70">
							live
						</div>
					</div>
					<div className="grid gap-3">
						{featured.map((feature, index) => (
							<div
								key={feature.title}
								className="rounded-[var(--rounded-md)] border border-white/10 bg-black/20 p-4"
							>
								<p className="font-mono text-[11px] text-cyan">0{index + 1}</p>
								<h2 className="mt-2 text-body-md-strong text-white">
									{feature.title}
								</h2>
								<p className="mt-2 text-body-sm text-white/65">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
