import { createFileRoute } from "@tanstack/react-router";

import { NotFoundPage } from "#/components/pages/not-found-page.tsx";
import { notFoundPageContent } from "#/content/contact.ts";
import { createPageHeadFromContent } from "#/lib/seo.ts";

export const Route = createFileRoute("/$")({
	head: () => createPageHeadFromContent(notFoundPageContent.seo),
	component: NotFoundPage,
});
