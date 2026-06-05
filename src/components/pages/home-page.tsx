import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { BannerPill } from "#/components/marketing/banner-pill.tsx";
import { ComparisonTable } from "#/components/marketing/comparison-table.tsx";
import { FaqAccordion } from "#/components/marketing/faq-accordion.tsx";
import { LogoStrip } from "#/components/marketing/logo-strip.tsx";
import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { MarketingHero } from "#/components/marketing/marketing-hero.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { Button } from "#/components/ui/button.tsx";
import { siteConfig } from "#/config/site.ts";
import {
	comparisonRows,
	faqItems,
	heroRotatingLines,
	homePageContent,
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
			<MarketingHero
				variant="split"
				titleSize="home"
				atmosphere
				banner={
					<BannerPill className="mb-6 max-w-full sm:mb-8">
						{homePageContent.hero.banner}
					</BannerPill>
				}
				title={
					<>
						Your customers are already telling you{" "}
						<span
							className="relative inline-block text-link"
							key={lineIndex}
						>
							{heroRotatingLines[lineIndex]}.
							<span className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-full bg-link-bg-soft" />
						</span>
					</>
				}
				lead={homePageContent.hero.lead}
				actions={
					<>
						<div className="mb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
							<Button asChild size="lg" className="w-full sm:w-auto">
								<Link to={homePageContent.hero.primaryCta.href}>
									{homePageContent.hero.primaryCta.label}
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="w-full sm:w-auto"
							>
								<Link to={homePageContent.hero.secondaryCta.href}>
									{homePageContent.hero.secondaryCta.label}
								</Link>
							</Button>
						</div>
						<div className="grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-[var(--rounded-lg)] bg-hairline elev-4 sm:grid-cols-4">
							{homePageContent.proofStats.map(([value, label]) => (
								<div
									key={value}
									className="bg-canvas/90 p-3 backdrop-blur sm:p-4"
								>
									<p className="text-display-sm text-[1.125rem] sm:text-[1.25rem]">
										{value}
									</p>
									<p className="mt-1.5 text-caption text-body sm:mt-2">
										{label}
									</p>
								</div>
							))}
						</div>
					</>
				}
				visual={<HeroSignalBoard />}
			/>

			<SectionBand variant="soft" className="py-12 md:py-16">
				<LogoStrip />
				<SignalTicker />
			</SectionBand>

			<SectionBand>
				<div className="mb-12 grid items-end gap-6 lg:grid-cols-[0.9fr_1fr]">
					<div>
						<p className="section-eyebrow mb-4">Insight system</p>
						<h2 className="text-display-lg">
							Understand what really matters in your business.
						</h2>
					</div>
					<p className="text-body-lg text-body">
						Move from scattered reporting to a governed layer that understands
						customer language, product friction, revenue risk, and next-best
						actions.
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-3">
					{insightFeatures.map((feature, index) => (
						<MarketingCard
							key={feature.title}
							variant={feature.highlight ? "large" : "marketing"}
							className={cn(
								"min-h-64",
								feature.highlight &&
									"bg-ink text-white md:-mt-8 md:min-h-80 md:p-8",
							)}
						>
							<p
								className={cn(
									"font-mono-caption mb-8",
									feature.highlight ? "text-white/70" : "text-body",
								)}
							>
								0{index + 1}
							</p>
							<h3 className="text-display-sm mb-3">{feature.title}</h3>
							<p
								className={cn(
									"text-body-md",
									feature.highlight ? "text-white/80" : "text-body",
								)}
							>
								{feature.description}
							</p>
						</MarketingCard>
					))}
				</div>
				<p className="text-display-sm mx-auto mt-12 max-w-2xl text-center">
					We turn &ldquo;what happened&rdquo; into &ldquo;what&apos;s
					next.&rdquo;
				</p>
			</SectionBand>

			<SectionBand variant="soft">
				<div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
					<div className="lg:sticky lg:top-28">
						<p className="section-eyebrow mb-4">Company-wide</p>
						<h2 className="text-display-lg mb-4">
							From contact center to C-suite, everyone gets what they need.
						</h2>
						<p className="text-body-lg text-body">
							One truth for products, service, competitors, policies, support,
							risk, and revenue.
						</p>
					</div>
					<MarketingCard variant="large" className="p-4 md:p-6">
						<div className="mb-6 flex flex-wrap gap-2">
							{personaTabs.map((tab) => (
								<button
									key={tab.id}
									type="button"
									onClick={() => setActivePersona(tab.id)}
									className={cn(
										"rounded-[var(--rounded-pill-sm)] border px-4 py-2 text-body-sm-strong transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/30",
										activePersona === tab.id
											? "border-ink bg-ink text-white"
											: "border-hairline bg-canvas text-ink hover:bg-canvas-soft",
									)}
								>
									{tab.label}
								</button>
							))}
						</div>
						<div className="rounded-[var(--rounded-md)] bg-canvas-soft p-6 shadow-[var(--shadow-inset)] md:p-8">
							<p className="section-eyebrow mb-4">
								{persona.salutation}
							</p>
							<p className="text-body-lg text-body">{persona.body}</p>
							<div className="mt-8">
								<Button asChild>
									<Link to="/contact">Book a Demo</Link>
								</Button>
							</div>
						</div>
					</MarketingCard>
				</div>
			</SectionBand>

			<SectionBand>
				<div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
					<div>
						<p className="section-eyebrow mb-4">
							Talk with your data
						</p>
						<h2 className="text-display-lg mb-4">
							If you can talk or type, you&apos;re in.
						</h2>
						<p className="text-body-lg mb-8 text-body">
							Where insights find you, conversations replace dashboards, and
							clarity arrives at the speed of thought.
						</p>
						<div className="grid gap-4 sm:grid-cols-2">
							<MarketingCard variant="soft">
								<h3 className="text-display-sm mb-2">
									Ask your data a question
								</h3>
								<p className="text-body-md text-body">
									Product, compliance, governance, risk, fraud, agent
									performance, and more.
								</p>
							</MarketingCard>
							<MarketingCard variant="soft">
								<h3 className="text-display-sm mb-2">Get answers instantly</h3>
								<p className="text-body-md text-body">
									Visualize what colleagues need and guide teams toward the
									right business result.
								</p>
							</MarketingCard>
						</div>
					</div>
					<CustomerVoiceMap />
				</div>
			</SectionBand>

			<SectionBand variant="soft">
				<div className="grid gap-px overflow-hidden rounded-[var(--rounded-lg)] bg-hairline elev-4 lg:grid-cols-2">
					<div className="bg-canvas p-8 md:p-10">
						<p className="section-eyebrow mb-4">
							Decision velocity
						</p>
						<h2 className="text-display-lg mb-4">
							Stop being a human pivot table.
						</h2>
						<p className="text-body-lg text-body">
							We help leaders move from tedious data work to higher-value
							initiatives. Data isn&apos;t the goal. Good decisions are.
						</p>
					</div>
					<div className="bg-canvas p-8 md:p-10">
						<p className="section-eyebrow mb-4">
							Operational clarity
						</p>
						<h2 className="text-display-lg mb-4">
							If your data strategy involves Excel, we need to talk.
						</h2>
						<p className="text-body-lg mb-8 text-body">
							No more slow-to-load spreadsheets. You&apos;re welcome.
						</p>
						<Button asChild size="lg">
							<Link to="/contact">Book a Demo</Link>
						</Button>
					</div>
				</div>
			</SectionBand>

			<SectionBand variant="dark">
				<div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
					<div>
						<p className="section-eyebrow mb-4">
							Privacy &amp; Security
						</p>
						<h2 className="text-display-lg">
							We believe your data is, well, your data.
						</h2>
					</div>
					<p className="text-body-lg text-white/80">
						Enterprise-grade data privacy and security meets consumer-grade user
						experience.
					</p>
				</div>
				<div className="mb-10 grid gap-px overflow-hidden rounded-[var(--rounded-lg)] bg-white/10 md:grid-cols-3">
					{securityFeatures.map((item) => (
						<div key={item.title} className="bg-white/[0.04] p-6">
							<h3 className="text-display-sm mb-2">{item.title}</h3>
							<p className="text-body-sm text-white/70">{item.description}</p>
						</div>
					))}
				</div>
				<div className="text-center">
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

			<SectionBand>
				<div className="mx-auto mb-12 max-w-3xl text-center">
					<p className="section-eyebrow mb-4">Compare solutions</p>
					<h2 className="text-display-lg mb-4">
						The Answer Layer is built for words and numbers.
					</h2>
					<p className="text-body-lg text-body">
						Move past average handle time and understand customers across every
						channel and language in real time.
					</p>
				</div>
				<ComparisonTable rows={comparisonRows} />
			</SectionBand>

			<SectionBand variant="soft">
				<div className="mx-auto max-w-3xl">
					<p className="section-eyebrow mb-4 text-center">FAQs</p>
					<h2 className="text-display-lg mb-4 text-center">
						Frequently asked questions.
					</h2>
					<p className="text-body-md mb-8 text-center text-body">
						Connect with us if you have any additional questions.
					</p>
					<FaqAccordion items={faqItems} />
					<div className="mt-8 text-center">
						<Button asChild>
							<Link to="/contact">Get in touch</Link>
						</Button>
					</div>
				</div>
			</SectionBand>
		</>
	);
}

function HeroSignalBoard() {
	return (
		<div className="relative mx-auto w-full max-w-[560px] lg:translate-y-8">
			<div className="signal-noise absolute inset-4 rounded-[24px] blur-3xl sm:inset-6 sm:rounded-[32px]" />
			<div className="signal-grid absolute inset-0 opacity-80" />
			<div className="relative overflow-hidden rounded-[28px] bg-ink p-3 text-white elev-5">
				<div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_20%_0%,var(--cyan)_0,transparent_28%),radial-gradient(circle_at_80%_20%,var(--highlight-pink)_0,transparent_22%)]" />
				<div className="relative rounded-[20px] border border-white/10 bg-white/[0.035] p-4 md:p-5">
					<div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
						<div>
							<p className="font-mono-caption text-white/60">Answer OS</p>
							<p className="text-body-sm text-white/80">
								Live customer intelligence
							</p>
						</div>
						<div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 font-mono text-[12px] text-white/70">
							online
						</div>
					</div>

					<div className="grid gap-3">
						{homePageContent.signalRows.map((row) => (
							<div
								key={row.label}
								className="grid grid-cols-[1fr_auto] gap-4 rounded-[var(--rounded-md)] border border-white/10 bg-black/20 p-4"
							>
								<div>
									<p className="font-mono text-[12px] text-white/50">
										{row.label}
									</p>
									<p className="mt-1 text-body-md-strong text-white">
										{row.value}
									</p>
								</div>
								<div className="flex items-center gap-3">
									<div className="h-12 w-1.5 overflow-hidden rounded-full bg-white/10">
										<div
											className="rounded-full bg-cyan"
											style={{ height: row.heat }}
										/>
									</div>
									<p className="font-mono text-[12px] text-white/70">
										{row.heat}
									</p>
								</div>
							</div>
						))}
					</div>

					<div className="relative mt-4 overflow-hidden rounded-[var(--rounded-md)] border border-white/10 bg-black/30 p-4">
						<div className="signal-scan absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
						<p className="font-mono-caption mb-3 text-white/50">
							Live workflow
						</p>
						<div className="space-y-2">
							{homePageContent.commandLines.map((line, index) => (
								<p key={line} className="font-mono text-[12px] text-white/70">
									<span className="text-cyan">0{index + 1}</span> / {line}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="float-slow absolute -top-5 -right-2 hidden rounded-[var(--rounded-lg)] bg-canvas p-4 elev-4 md:block">
				<p className="font-mono-caption text-body">Opportunity</p>
				<p className="mt-2 text-display-sm">$1.8M</p>
			</div>
			<div className="float-slower absolute -bottom-6 -left-4 hidden rounded-[var(--rounded-lg)] bg-canvas p-4 elev-4 md:block">
				<p className="font-mono-caption text-body">Emerging theme</p>
				<p className="mt-2 text-body-sm-strong">billing confusion</p>
			</div>
		</div>
	);
}

function SignalTicker() {
	const items = homePageContent.signalTickerItems;
	const tickerItems = [
		...items.map((item) => ({ id: `first-${item}`, item })),
		...items.map((item) => ({ id: `second-${item}`, item })),
	];

	return (
		<div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-[var(--rounded-lg)] border border-hairline bg-canvas shadow-[var(--shadow-inset)]">
			<div className="flex items-center border-b border-hairline px-4 py-3">
				<p className="font-mono-caption shrink-0 text-body">Signal stream</p>
				<div className="ml-4 h-px flex-1 bg-hairline" />
			</div>
			<div className="overflow-hidden py-4">
				<div className="ticker-track flex w-max gap-3 px-4">
					{tickerItems.map(({ id, item }) => (
						<div
							key={id}
							className="rounded-full border border-hairline bg-canvas-soft px-4 py-2 text-body-sm text-body"
						>
							<span className="mr-2 font-mono text-[11px] text-link">
								{String(items.indexOf(item) + 1).padStart(2, "0")}
							</span>
							{item}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

function CustomerVoiceMap() {
	const nodes = [
		{
			label: "refunds",
			className: "left-[8%] top-[20%]",
			size: "size-28",
		},
		{
			label: "setup",
			className: "left-[38%] top-[8%]",
			size: "size-36",
		},
		{
			label: "billing",
			className: "right-[10%] top-[24%]",
			size: "size-24",
		},
		{
			label: "APAC",
			className: "bottom-[18%] left-[22%]",
			size: "size-24",
		},
		{
			label: "churn",
			className: "bottom-[10%] right-[18%]",
			size: "size-32",
		},
	] as const;

	return (
		<div className="relative min-h-[360px] overflow-hidden rounded-[20px] bg-ink p-3 text-white elev-5 sm:min-h-[440px] sm:rounded-[28px] sm:p-4 md:min-h-[520px]">
			<div className="signal-noise absolute inset-0 opacity-70" />
			<div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)]" />
			<div className="relative flex min-h-[320px] flex-col rounded-[16px] border border-white/10 bg-black/20 p-4 sm:min-h-[400px] sm:rounded-[20px] sm:p-5 md:min-h-[488px]">
				<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
					<div>
						<p className="font-mono-caption mb-2 text-white/60">Voice map</p>
						<p className="max-w-sm text-body-md-strong sm:text-display-sm">
							&ldquo;What product issues are leading to the highest risk of
							churn today?&rdquo;
						</p>
					</div>
					<div className="w-fit shrink-0 rounded-full border border-white/10 bg-white/10 px-3 py-1 font-mono text-[12px] text-white/70">
						18,402 calls
					</div>
				</div>

				<div className="relative mt-6 min-h-[200px] flex-1 sm:absolute sm:inset-x-5 sm:bottom-5 sm:top-36 sm:mt-0 sm:min-h-0">
					<div className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/40 bg-cyan/10 blur-[1px]" />
					<div className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
					<div className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
					{nodes.map((node) => (
						<div
							key={node.label}
							className={cn(
								"float-slow absolute grid place-items-center rounded-full border border-white/10 bg-white/10 text-center backdrop-blur",
								node.className,
								node.size,
							)}
						>
							<span className="font-mono text-[12px] text-white/80">
								{node.label}
							</span>
						</div>
					))}
				</div>

				<div className="relative z-10 mt-4 grid gap-px overflow-hidden rounded-[var(--rounded-md)] bg-white/10 sm:absolute sm:inset-x-5 sm:bottom-5 sm:mt-0 sm:grid-cols-3">
					{[
						["Top driver", "onboarding friction"],
						["Related", "refunds + billing"],
						["Action", "guided setup experiment"],
					].map(([label, value]) => (
						<div key={label} className="bg-black/30 p-4">
							<p className="font-mono text-[11px] text-white/50">{label}</p>
							<p className="mt-1 text-body-sm-strong text-white">{value}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
