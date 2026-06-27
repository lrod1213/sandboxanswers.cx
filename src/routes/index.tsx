import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "#/components/pages/home-page.tsx";
import { hireYourTeamPageContent } from "#/content/home-team.ts";
import { createPageHeadFromContent } from "#/lib/seo.ts";

export const Route = createFileRoute("/")({
	head: () =>
		createPageHeadFromContent({
			...hireYourTeamPageContent.seo,
			path: "/",
		}),
	component: HomePage,
});
