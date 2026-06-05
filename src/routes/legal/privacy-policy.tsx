import { createFileRoute } from "@tanstack/react-router";

import { LegalDocumentPage } from "#/components/pages/legal-document-page.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { privacyPolicy } from "#/content/legal.ts";
import { createPageHeadFromContent } from "#/lib/seo.ts";

export const Route = createFileRoute("/legal/privacy-policy")({
	head: () => createPageHeadFromContent(privacyPolicy.seo),
	component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
	return (
		<SectionBand className="pt-12">
			<LegalDocumentPage content={privacyPolicy} />
		</SectionBand>
	);
}
