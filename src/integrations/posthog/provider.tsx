import { PostHogProvider as BasePostHogProvider } from "@posthog/react";
import posthog from "posthog-js";
import type { ReactNode } from "react";

import { clientEnv } from "#/config/env.ts";

if (typeof window !== "undefined" && clientEnv.VITE_POSTHOG_KEY) {
	posthog.init(clientEnv.VITE_POSTHOG_KEY, {
		api_host: clientEnv.VITE_POSTHOG_HOST ?? "https://us.i.posthog.com",
		person_profiles: "identified_only",
		capture_pageview: false,
		capture_pageleave: true,
		defaults: "2025-11-30",
		bootstrap: {
			featureFlags: {},
		},
	});
}

interface PostHogProviderProps {
	children: ReactNode;
}

export default function PostHogProvider({ children }: PostHogProviderProps) {
	return <BasePostHogProvider client={posthog}>{children}</BasePostHogProvider>;
}

export { posthog };
