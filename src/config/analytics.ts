import { clientEnv } from "#/config/env.ts";

export const analyticsConfig = {
	gtmId: clientEnv.VITE_GTM_ID,
	posthogHost: clientEnv.VITE_POSTHOG_HOST ?? "https://us.i.posthog.com",
	cal: {
		namespace: "book-a-demo",
		calLink: clientEnv.VITE_CAL_LINK ?? "team/cxconnect.ai/book-a-demo",
		brandColor: "#2dd4bf",
	},
} as const;

export function isGtmEnabled() {
	return Boolean(analyticsConfig.gtmId);
}

export function isPostHogEnabled() {
	return Boolean(clientEnv.VITE_POSTHOG_KEY);
}
