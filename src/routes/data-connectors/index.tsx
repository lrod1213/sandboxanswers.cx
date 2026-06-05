import { createFileRoute } from "@tanstack/react-router";

import { DataConnectorsPage } from "#/components/pages/data-connectors-page.tsx";
import { dataConnectorsPageContent } from "#/content/integrations.ts";
import { createPageHeadFromContent } from "#/lib/seo.ts";

export const Route = createFileRoute("/data-connectors/")({
	head: () => createPageHeadFromContent(dataConnectorsPageContent.seo),
	component: DataConnectorsPage,
});
