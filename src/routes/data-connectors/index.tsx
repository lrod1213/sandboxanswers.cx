import { createFileRoute, Link } from "@tanstack/react-router";

import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { MeshGradient } from "#/components/marketing/mesh-gradient.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { apiConnectors, appConnectors } from "#/content/integrations.ts";
import { createPageMeta } from "#/lib/seo.ts";

export const Route = createFileRoute("/data-connectors/")({
	head: () => ({
		meta: createPageMeta({
			title: "Data Connectors",
			description:
				"Connect cxconnect.ai with your existing stack via APIs and native apps.",
			path: "/data-connectors",
		}),
	}),
	component: DataConnectorsPage,
});

function DataConnectorsPage() {
	return (
		<>
			<section className="relative overflow-hidden bg-canvas py-16 md:py-24">
				<MeshGradient />
				<div className="marketing-container relative z-10">
					<div className="mx-auto max-w-3xl text-center">
						<p className="font-mono-caption mb-4 text-mute">Integrations</p>
						<h1 className="text-display-xl mb-6">
							We connect with your existing stack
						</h1>
						<p className="text-body-lg text-body">
							If you don&apos;t see what you need, send us a note and we&apos;ll
							look into it.
						</p>
					</div>
				</div>
			</section>

			<SectionBand variant="soft">
				<h2 className="text-display-lg mb-2">
					We can connect with your data via APIs and Apps
				</h2>
				<p className="text-body-md mb-12 text-body">
					And just know that you can easily change at any time—all of your data
					will remain intact.
				</p>

				<h3 className="text-display-sm mb-2">Connect via API</h3>
				<p className="text-body-sm mb-8 text-body">
					For AI Insights + Talk with your Data. Don&apos;t see yours?{" "}
					<Link to="/contact" className="text-link hover:underline">
						Send us a quick note
					</Link>
					.
				</p>
				<div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{apiConnectors.map((connector) => (
						<MarketingCard key={connector.slug}>
							<h4 className="text-display-sm mb-2">{connector.name}</h4>
							<p className="text-body-sm text-body">{connector.description}</p>
						</MarketingCard>
					))}
				</div>

				<h3 className="text-display-sm mb-2">Connect via Apps</h3>
				<p className="text-body-sm mb-8 text-body">
					For real-time multilingual support, improving customer messages, and
					real-time agent coaching.
				</p>
				<div className="grid gap-4 md:grid-cols-3">
					{appConnectors.map((connector) => (
						<MarketingCard key={connector.name}>
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
