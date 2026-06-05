import { createFileRoute } from "@tanstack/react-router";

import { SuccessPage } from "#/components/pages/success-page.tsx";
import { successPageContent } from "#/content/contact.ts";
import { createPageHeadFromContent } from "#/lib/seo.ts";

export const Route = createFileRoute("/success")({
	head: () => createPageHeadFromContent(successPageContent.seo),
	component: SuccessPage,
});
