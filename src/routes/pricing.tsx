import { createFileRoute } from "@tanstack/react-router";

import { PricingPage } from "#/components/pages/pricing-page.tsx";
import { pricingContent } from "#/content/pricing.ts";
import { createPageHeadFromContent } from "#/lib/seo.ts";

export const Route = createFileRoute("/pricing")({
	head: () => createPageHeadFromContent(pricingContent.seo),
	component: PricingPage,
});
