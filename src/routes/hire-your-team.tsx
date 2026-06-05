import { createFileRoute } from "@tanstack/react-router";

import { AiAssistantsTeamPage } from "#/components/pages/ai-assistants-team-page.tsx";
import { createPageHead } from "#/lib/seo.ts";

export const Route = createFileRoute("/hire-your-team")({
	head: () =>
		createPageHead({
			title: "Hire your AI team",
			description:
				"Hire AI assistants to handle tedious CX reporting and monitoring—so your team can focus on revenue, retention, and strategy.",
			path: "/hire-your-team",
		}),
	component: AiAssistantsTeamPage,
});
