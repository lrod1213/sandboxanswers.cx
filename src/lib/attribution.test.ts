import { beforeEach, describe, expect, it } from "vitest";

import {
	captureFirstTouchAttribution,
	getCalAttributionConfig,
} from "#/lib/attribution.ts";

describe("attribution", () => {
	beforeEach(() => {
		localStorage.clear();
		sessionStorage.clear();
	});

	it("stores first-touch utm params", () => {
		const originalLocation = window.location;
		Object.defineProperty(window, "location", {
			value: new URL("https://cxconnect.ai/contact?utm_source=linkedin"),
			writable: true,
		});

		captureFirstTouchAttribution();

		expect(localStorage.getItem("utm_source")).toBe("linkedin");
		expect(getCalAttributionConfig().utm_source).toBe("linkedin");

		Object.defineProperty(window, "location", {
			value: originalLocation,
			writable: true,
		});
	});
});
