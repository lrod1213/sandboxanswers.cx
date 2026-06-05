import { createFileRoute } from "@tanstack/react-router";

import { SectionBand } from "#/components/marketing/section-band.tsx";
import { termsOfService } from "#/content/legal.ts";
import { createPageHead } from "#/lib/seo.ts";

export const Route = createFileRoute("/legal/terms-of-service")({
	head: () =>
		createPageHead({
			title: termsOfService.title,
			path: "/legal/terms-of-service",
		}),
	component: TermsPage,
});

function TermsPage() {
	return (
		<SectionBand className="pt-12">
			<article className="prose prose-neutral mx-auto max-w-3xl">
				<h1 className="text-display-lg">{termsOfService.title}</h1>
				<p className="text-caption text-mute">
					Last updated: {termsOfService.lastUpdated}
				</p>
				{termsOfService.sections.map((section) => (
					<section key={section.heading} className="mt-10">
						<h2 className="text-display-sm">{section.heading}</h2>
						<p className="text-body-md text-body">{section.body}</p>
					</section>
				))}
			</article>
		</SectionBand>
	);
}
