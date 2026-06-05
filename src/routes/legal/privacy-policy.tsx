import { createFileRoute } from "@tanstack/react-router";

import { SectionBand } from "#/components/marketing/section-band.tsx";
import { privacyPolicy } from "#/content/legal.ts";
import { createPageMeta } from "#/lib/seo.ts";

export const Route = createFileRoute("/legal/privacy-policy")({
	head: () => ({
		meta: createPageMeta({
			title: privacyPolicy.title,
			path: "/legal/privacy-policy",
		}),
	}),
	component: PrivacyPage,
});

function PrivacyPage() {
	return (
		<SectionBand className="pt-12">
			<article className="prose prose-neutral mx-auto max-w-3xl">
				<h1 className="text-display-lg">{privacyPolicy.title}</h1>
				<p className="text-caption text-mute">
					Last updated: {privacyPolicy.lastUpdated}
				</p>
				{privacyPolicy.sections.map((section) => (
					<section key={section.heading} className="mt-10">
						<h2 className="text-display-sm">{section.heading}</h2>
						<p className="text-body-md text-body">{section.body}</p>
					</section>
				))}
			</article>
		</SectionBand>
	);
}
