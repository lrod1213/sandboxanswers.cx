import type { LegalDocumentContent } from "#/content/types.ts";

type LegalDocumentPageProps = {
	content: LegalDocumentContent;
};

export function LegalDocumentPage({ content }: LegalDocumentPageProps) {
	return (
		<article className="prose prose-neutral mx-auto max-w-3xl">
			<h1 className="text-display-lg">{content.title}</h1>
			<p className="text-caption text-mute">
				Last updated: {content.lastUpdated}
			</p>
			{content.sections.map((section) => (
				<section key={section.heading} className="mt-10">
					<h2 className="text-display-sm">{section.heading}</h2>
					<p className="text-body-md text-body">{section.body}</p>
				</section>
			))}
		</article>
	);
}
