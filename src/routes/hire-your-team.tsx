import { createFileRoute } from "@tanstack/react-router";

import { AiAssistantsTeamPage } from "#/components/pages/ai-assistants-team-page.tsx";
import { hireYourTeamPageContent } from "#/content/ai-assistants-team.ts";
import { createPageHeadFromContent } from "#/lib/seo.ts";

export const Route = createFileRoute("/hire-your-team")({
	head: () => createPageHeadFromContent(hireYourTeamPageContent.seo),
	component: AiAssistantsTeamPage,
});
