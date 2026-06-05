import { createFileRoute } from "@tanstack/react-router";

import { LegalDocumentPage } from "#/components/pages/legal-document-page.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { termsOfService } from "#/content/legal.ts";
import { createPageHeadFromContent } from "#/lib/seo.ts";

export const Route = createFileRoute("/legal/terms-of-service")({
	head: () => createPageHeadFromContent(termsOfService.seo),
	component: TermsPage,
});

function TermsPage() {
	return (
		<SectionBand className="pt-12">
			<LegalDocumentPage content={termsOfService} />
		</SectionBand>
	);
}
