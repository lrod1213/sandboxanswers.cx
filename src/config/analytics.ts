export const analyticsConfig = {
	gtmId: import.meta.env.VITE_GTM_ID as string | undefined,
	posthogHost:
		(import.meta.env.VITE_POSTHOG_HOST as string | undefined) ??
		"https://us.i.posthog.com",
	cal: {
		namespace: "book-a-demo",
		calLink:
			(import.meta.env.VITE_CAL_LINK as string | undefined) ??
			"team/cxconnect.ai/book-a-demo",
		brandColor: "#2dd4bf",
	},
} as const;

export function isGtmEnabled() {
	return Boolean(analyticsConfig.gtmId);
}
