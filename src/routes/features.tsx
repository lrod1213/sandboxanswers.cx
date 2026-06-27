import { createFileRoute } from "@tanstack/react-router";

import { FeaturesPage } from "#/components/pages/features-page.tsx";
import { featuresPageContent } from "#/content/features.ts";
import { createPageHeadFromContent } from "#/lib/seo.ts";

export const Route = createFileRoute("/features")({
	head: () => createPageHeadFromContent(featuresPageContent.seo),
	component: FeaturesPage,
});
