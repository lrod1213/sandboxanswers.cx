import { useRouterState } from "@tanstack/react-router";
import posthog from "posthog-js";
import { useEffect } from "react";

import { isGtmEnabled, isPostHogEnabled } from "#/config/analytics.ts";

export function PageViewTracker() {
	const pathname = useRouterState({
		select: (state) => state.location.pathname,
	});

	useEffect(() => {
		if (isPostHogEnabled()) {
			posthog.capture("$pageview", { path: pathname });
		}

		if (isGtmEnabled()) {
			window.dataLayer = window.dataLayer ?? [];
			window.dataLayer.push({
				event: "page_view",
				page_path: pathname,
				page_location: window.location.href,
				page_title: document.title,
			});
		}
	}, [pathname]);

	return null;
}
