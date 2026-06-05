import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "#/components/pages/home-page.tsx";
import { createPageMeta } from "#/lib/seo.ts";

export const Route = createFileRoute("/")({
	head: () => ({
		meta: createPageMeta({
			title: "The Answer Layer",
			description:
				"Real-time AI insights for CX leaders. Unlock the voices of your customers.",
			path: "/",
		}),
	}),
	component: HomePage,
});
