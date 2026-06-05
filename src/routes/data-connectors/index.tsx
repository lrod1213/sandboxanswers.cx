import { createFileRoute, Link } from "@tanstack/react-router";

import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { MeshGradient } from "#/components/marketing/mesh-gradient.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { apiConnectors, appConnectors } from "#/content/integrations.ts";
import { createPageHead } from "#/lib/seo.ts";

export const Route = createFileRoute("/data-connectors/")({
	head: () =>
		createPageHead({
			title: "Data Connectors",
			description:
				"Connect cxconnect.ai with your existing stack via APIs and native apps.",
			path: "/data-connectors",
		}),
	component: DataConnectorsPage,
});

function DataConnectorsPage() {
	return (
		<>
			<section className="marketing-hero">
				<MeshGradient />
				<div className="marketing-container relative z-10">
					<div className="mx-auto max-w-4xl text-center">
						<p className="section-eyebrow mb-4">Integrations</p>
						<h1 className="mx-auto mb-6 max-w-3xl text-[2rem] font-semibold leading-[1.05] tracking-[-0.05em] text-ink sm:text-display-xl md:text-[56px] md:leading-[56px] md:tracking-[-3px]">
							We connect with your existing stack
						</h1>
						<p className="text-body-lg mx-auto max-w-2xl text-body">
							If you don&apos;t see what you need, send us a note and we&apos;ll
							look into it.
						</p>
					</div>
				</div>
			</section>

			<SectionBand variant="soft">
				<div className="mb-12 grid items-end gap-6 lg:grid-cols-[0.8fr_1fr]">
					<h2 className="text-display-lg">
						We can connect with your data via APIs and apps.
					</h2>
					<p className="text-body-lg text-body">
						Change your stack at any time. The answer layer keeps your data
						intact and your context portable.
					</p>
				</div>

				<div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
					<div>
						<p className="section-eyebrow mb-4">API connectors</p>
						<h3 className="text-display-sm">Connect via API</h3>
					</div>
					<p className="max-w-xl text-body-sm text-body">
						For AI Insights + Talk with your Data. Don&apos;t see yours?{" "}
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
						<p className="section-eyebrow mb-4">Native apps</p>
						<h3 className="text-display-sm">Connect via Apps</h3>
					</div>
					<p className="max-w-xl text-body-sm text-body">
						For real-time multilingual support, improving customer messages, and
						real-time agent coaching.
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
