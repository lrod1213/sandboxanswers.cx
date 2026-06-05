const UTM_KEYS = [
	"utm_source",
	"utm_medium",
	"utm_campaign",
	"utm_content",
	"utm_term",
] as const;

type UtmKey = (typeof UTM_KEYS)[number];

export function captureFirstTouchAttribution() {
	if (typeof window === "undefined") return;

	const params = new URLSearchParams(window.location.search);

	for (const key of UTM_KEYS) {
		const value = params.get(key);
		if (value && !localStorage.getItem(key)) {
			localStorage.setItem(key, value);
		}
	}

	if (!localStorage.getItem("referrer")) {
		const referrer = document.referrer || "direct";
		localStorage.setItem("referrer", referrer);
	}

	if (!localStorage.getItem("landing_url")) {
		localStorage.setItem("landing_url", window.location.href);
	}

	if (!localStorage.getItem("first_touch_at")) {
		localStorage.setItem("first_touch_at", new Date().toISOString());
	}

	sessionStorage.setItem("lead_entry_point", window.location.pathname);
}

export function getCalAttributionConfig(): Record<string, string> {
	if (typeof window === "undefined") return {};

	const config: Record<string, string> = {};

	for (const key of UTM_KEYS) {
		const value = localStorage.getItem(key);
		if (value) config[key] = value;
	}

	const referrer = localStorage.getItem("referrer");
	if (referrer) config.referrer = referrer;

	const landingUrl = localStorage.getItem("landing_url");
	if (landingUrl) config.landing_url = landingUrl;

	const firstTouchAt = localStorage.getItem("first_touch_at");
	if (firstTouchAt) config.first_touch_at = firstTouchAt;

	const leadEntryPoint = sessionStorage.getItem("lead_entry_point");
	if (leadEntryPoint) config.lead_entry_point = leadEntryPoint;

	return config;
}

export type { UtmKey };
