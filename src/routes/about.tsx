import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "#/components/pages/about-page.tsx";
import { createPageHeadFromContent } from "#/lib/seo.ts";
import { aboutContent } from "#/content/about.ts";

export const Route = createFileRoute("/about")({
	head: () => createPageHeadFromContent(aboutContent.seo),
	component: AboutPage,
});
