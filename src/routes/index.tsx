import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "#/components/pages/home-page.tsx";
import { homePageContent } from "#/content/home.ts";
import { createPageHeadFromContent } from "#/lib/seo.ts";

export const Route = createFileRoute("/")({
	head: () => createPageHeadFromContent(homePageContent.seo),
	component: HomePage,
});
