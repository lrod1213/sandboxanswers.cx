import { createFileRoute } from "@tanstack/react-router";

import { CompanyPulsePage } from "#/components/pages/company-pulse-page.tsx";
import { companyPulsePageContent } from "#/content/company-pulse.ts";
import { createPageHeadFromContent } from "#/lib/seo.ts";

export const Route = createFileRoute("/company-pulse")({
	head: () => createPageHeadFromContent(companyPulsePageContent.seo),
	component: CompanyPulsePage,
});
