import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "#/components/pages/home-page.tsx";
import { createPageHead } from "#/lib/seo.ts";

export const Route = createFileRoute("/")({
	head: () =>
		createPageHead({
			title: "The Answer Layer",
			description:
				"Real-time AI insights for CX leaders. Unlock the voices of your customers.",
			path: "/",
		}),
	component: HomePage,
});
