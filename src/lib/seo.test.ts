import { describe, expect, it } from "vitest";

import { contactSchema } from "#/lib/contact-schema.ts";
import { createPageHeadFromContent } from "#/lib/seo.ts";

describe("contactSchema", () => {
	it("accepts a valid submission", () => {
		const result = contactSchema.safeParse({
			name: "Jane Doe",
			email: "jane@example.com",
			company: "Acme",
			role: "VP CX",
			interests: ["The Answer Layer"],
			message: "Hello",
			attribution: { utm_source: "google" },
		});

		expect(result.success).toBe(true);
	});

	it("rejects submissions without interests", () => {
		const result = contactSchema.safeParse({
			name: "Jane Doe",
			email: "jane@example.com",
			company: "Acme",
			role: "VP CX",
			interests: [],
		});

		expect(result.success).toBe(false);
	});
});

describe("createPageHeadFromContent", () => {
	it("creates canonical links from content seo", () => {
		const head = createPageHeadFromContent({
			title: "Contact Us",
			description: "Get in touch",
			path: "/contact",
		});

		expect(head.links).toEqual([
			{ rel: "canonical", href: "https://cxconnect.ai/contact" },
		]);
	});
});
