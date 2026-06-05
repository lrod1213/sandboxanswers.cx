import { useEffect, useState } from "react";

import { BannerPill } from "#/components/marketing/banner-pill.tsx";
import { ComparisonTable } from "#/components/marketing/comparison-table.tsx";
import { FaqAccordion } from "#/components/marketing/faq-accordion.tsx";
import { LogoStrip } from "#/components/marketing/logo-strip.tsx";
import { MarketingButton } from "#/components/marketing/marketing-button.tsx";
import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { MeshGradient } from "#/components/marketing/mesh-gradient.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { siteConfig } from "#/config/site.ts";
import {
	comparisonRows,
	faqItems,
	heroRotatingLines,
	insightFeatures,
	personaTabs,
	securityFeatures,
} from "#/content/home.ts";
import { cn } from "#/lib/utils.ts";

export function HomePage() {
	const [lineIndex, setLineIndex] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setLineIndex((i) => (i + 1) % heroRotatingLines.length);
		}, 3200);
		return () => clearInterval(id);
	}, []);

	const [activePersona, setActivePersona] = useState(personaTabs[0].id);
	const persona =
		personaTabs.find((p) => p.id === activePersona) ?? personaTabs[0];

	return (
		<>
			<section className="relative overflow-hidden bg-canvas pt-8 pb-20 md:pb-28 lg:pb-[var(--spacing-section)]">
				<MeshGradient />
				<div className="marketing-container relative z-10">
					<div className="mx-auto max-w-4xl text-center rise-in">
						<BannerPill className="mb-6">
							Real-time AI Insights for Top Brands
						</BannerPill>
						<p className="text-display-lg md:text-display-xl mb-4">
							Your customers are telling you
						</p>
						<p
							className="text-display-lg md:text-display-xl mb-8 min-h-[1.2em] text-link transition-opacity duration-500"
							key={lineIndex}
						>
							{heroRotatingLines[lineIndex]}.
						</p>
						<p className="text-body-lg mx-auto mb-4 max-w-2xl text-body">
							The Answer Layer: the easiest way to unlock the voices of your
							customers.
						</p>
						<div className="flex flex-wrap items-center justify-center gap-3">
							<MarketingButton to="/contact">
								See The Answer Layer in Action
							</MarketingButton>
							<MarketingButton variant="secondary" to="/theanswerlayer">
								Learn more
							</MarketingButton>
						</div>
					</div>
				</div>
			</section>

			<SectionBand variant="soft" className="py-12 md:py-16">
				<LogoStrip />
			</SectionBand>

			<SectionBand>
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<h2 className="text-display-lg mb-4">
						Understand what really matters in your business
					</h2>
				</div>
				<div className="grid gap-6 md:grid-cols-3">
					{insightFeatures.map((feature) => (
						<MarketingCard
							key={feature.title}
							variant={feature.highlight ? "large" : "marketing"}
							className={cn(feature.highlight && "md:col-span-1")}
						>
							<h3 className="text-display-sm mb-3">{feature.title}</h3>
							{!feature.highlight ? (
								<p className="text-body-md text-body">{feature.description}</p>
							) : null}
						</MarketingCard>
					))}
				</div>
				<p className="text-body-lg mx-auto mt-8 max-w-2xl text-center text-body">
					{insightFeatures[1].description}
				</p>
				<p className="text-body-md mx-auto mt-4 max-w-2xl text-center text-body">
					{insightFeatures[2].description}
				</p>
				<p className="text-display-sm mt-10 text-center font-medium">
					We turn &ldquo;what happened&rdquo; into &ldquo;what&apos;s
					next&rdquo;
				</p>
			</SectionBand>

			<SectionBand variant="soft">
				<div className="mx-auto mb-10 max-w-3xl text-center">
					<h2 className="text-display-lg mb-4">
						From contact center to C-suite, everyone gets what they need
					</h2>
					<p className="text-body-lg text-body">
						Find out exactly what customers are saying — about your products,
						service, competitors, policies and support.
					</p>
					<p className="text-body-md mt-2 text-body">
						One truth, easily accessible company-wide.
					</p>
				</div>
				<div className="mb-8 flex flex-wrap justify-center gap-2">
					{personaTabs.map((tab) => (
						<button
							key={tab.id}
							type="button"
							onClick={() => setActivePersona(tab.id)}
							className={cn(
								"rounded-[64px] border px-4 py-2 text-body-sm transition-colors",
								activePersona === tab.id
									? "border-ink bg-ink text-white"
									: "border-hairline bg-canvas text-ink hover:bg-canvas-soft",
							)}
						>
							{tab.label}
						</button>
					))}
				</div>
				<MarketingCard variant="large" className="mx-auto max-w-3xl">
					<p className="font-mono-caption mb-4 text-mute">
						{persona.salutation}
					</p>
					<p className="text-body-lg text-body">{persona.body}</p>
					<div className="mt-8">
						<MarketingButton to="/contact" size="md">
							Book a Demo
						</MarketingButton>
					</div>
				</MarketingCard>
			</SectionBand>

			<SectionBand>
				<div className="grid items-center gap-12 lg:grid-cols-2">
					<div>
						<p className="font-mono-caption mb-4 text-mute">
							Talk with your data
						</p>
						<h2 className="text-display-lg mb-4">
							If you can talk or type, you&apos;re in
						</h2>
						<p className="text-body-lg mb-6 text-body">
							Where insights find you, conversations replace dashboards, and
							clarity arrives at the speed of thought.
						</p>
						<div className="space-y-6">
							<div>
								<h3 className="text-display-sm mb-2">
									Ask your data a question
								</h3>
								<p className="text-body-md text-body">
									Your questions could be about anything, for example: Agent
									Performance, Product, Compliance, Governance, Risk, Fraud...
								</p>
							</div>
							<div>
								<h3 className="text-display-sm mb-2">Get answers instantly</h3>
								<p className="text-body-md text-body">
									Work smarter and easier. Ask to visualize data your colleagues
									need, or ask for guidance on how to use your data to achieve
									the right results for your business.
								</p>
							</div>
						</div>
					</div>
					<MarketingCard variant="soft" className="bg-ink p-8 text-white">
						<p className="font-mono-caption mb-4 text-white/60">Example</p>
						<p className="text-body-lg">
							&ldquo;What product issues are leading to the highest risk of
							churn today?&rdquo;
						</p>
					</MarketingCard>
				</div>
			</SectionBand>

			<SectionBand variant="soft">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-display-lg mb-4">
						Stop being a human pivot table and reclaim time for high-impact work
					</h2>
					<p className="text-body-lg mb-2 text-body">
						We help your leaders shift from tedious data work to focus on
						higher-value initiatives.
					</p>
					<p className="text-body-md mb-8 text-body">
						Data isn&apos;t the goal. Good decisions are.
					</p>
					<MarketingButton to="/contact">Book a Demo</MarketingButton>
				</div>
			</SectionBand>

			<SectionBand>
				<div className="mx-auto max-w-3xl text-center">
					<p className="font-mono-caption mb-4 text-mute">
						It&apos;s complicated is for relationships, not your data
					</p>
					<h2 className="text-display-lg mb-4">
						If your data strategy involves Excel, we need to talk
					</h2>
					<p className="text-body-lg mb-8 text-body">
						No more slow-to-load spreadsheets. You&apos;re welcome.
					</p>
					<MarketingButton to="/contact">Book a Demo</MarketingButton>
				</div>
			</SectionBand>

			<SectionBand variant="dark">
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<p className="font-mono-caption mb-4 text-white/60">
						Privacy &amp; Security
					</p>
					<h2 className="text-display-lg mb-4">
						We believe your data is, well, your data
					</h2>
					<p className="text-body-lg text-white/80">
						Enterprise-grade data privacy and security meets consumer-grade user
						experience.
					</p>
				</div>
				<div className="mb-10 grid gap-6 md:grid-cols-3">
					{securityFeatures.map((item) => (
						<div
							key={item.title}
							className="rounded-lg border border-white/10 bg-white/5 p-6"
						>
							<h3 className="text-display-sm mb-2">{item.title}</h3>
							<p className="text-body-sm text-white/70">{item.description}</p>
						</div>
					))}
				</div>
				<div className="text-center">
					<MarketingButton
						variant="secondary"
						href={siteConfig.trustCenterUrl}
						external
					>
						View our Trust Center
					</MarketingButton>
				</div>
			</SectionBand>

			<SectionBand>
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<p className="font-mono-caption mb-4 text-mute">Compare solutions</p>
					<h2 className="text-display-lg mb-4">Compare solutions</h2>
					<p className="text-body-lg text-body">
						Move past average handle time, and start understanding the voices of
						your customers across every channel and language in real-time
					</p>
				</div>
				<ComparisonTable rows={comparisonRows} />
			</SectionBand>

			<SectionBand variant="soft">
				<div className="mx-auto max-w-3xl">
					<p className="font-mono-caption mb-4 text-center text-mute">FAQs</p>
					<h2 className="text-display-lg mb-4 text-center">
						Frequently asked questions
					</h2>
					<p className="text-body-md mb-8 text-center text-body">
						Connect with us if you have any additional questions.
					</p>
					<FaqAccordion items={faqItems} />
					<div className="mt-8 text-center">
						<MarketingButton to="/contact" size="md">
							Get in touch
						</MarketingButton>
					</div>
				</div>
			</SectionBand>
		</>
	);
}
