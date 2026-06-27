import { createFileRoute } from "@tanstack/react-router";

import { DailySignalPage } from "#/components/pages/daily-signal-page.tsx";
import { dailySignalPageContent } from "#/content/daily-signal.ts";
import { createPageHeadFromContent } from "#/lib/seo.ts";

export const Route = createFileRoute("/daily-signal")({
	head: () => createPageHeadFromContent(dailySignalPageContent.seo),
	component: DailySignalPage,
});
