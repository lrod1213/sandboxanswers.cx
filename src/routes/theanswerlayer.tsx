import { createFileRoute } from "@tanstack/react-router";

import { TheAnswerLayerPage } from "#/components/pages/the-answer-layer-page.tsx";
import { theAnswerLayerPageContent } from "#/content/the-answer-layer.ts";
import { createPageHeadFromContent } from "#/lib/seo.ts";

export const Route = createFileRoute("/theanswerlayer")({
	head: () => createPageHeadFromContent(theAnswerLayerPageContent.seo),
	component: TheAnswerLayerPage,
});
