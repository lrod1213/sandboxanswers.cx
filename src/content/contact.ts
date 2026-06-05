import type { PageSeoContent } from "#/content/types.ts";

export const contactPageContent = {
	seo: {
		title: "Contact Us",
		description:
			"Schedule a 20-minute product tour with the cxconnect.ai team or send us a message.",
		path: "/contact",
	} satisfies PageSeoContent,
	hero: {
		eyebrow: "Contact",
		title: "The Answer Layer. Now for CX Leaders.",
		lead: "Instant Answers. No bottlenecks. Just clarity.",
		sublead: "Schedule a 20-minute product tour with our team.",
	},
	tourHighlights: [
		"Quick discovery discussion",
		"Personalized use-cases",
		"Your questions, answered",
	],
	testimonial: {
		quote:
			"Very cool platform and demo. Are you sure this isn't our real data?",
		author: "Andres Jordão",
		role: "CEO at Barkyn",
	},
	cal: {
		eyebrow: "Book a demo",
		title: "Pick a time that works for you",
		switchToForm: "Contact us instead",
	},
	form: {
		eyebrow: "Contact us instead",
		title: "Send us a message",
		lead: "Prefer email? Tell us about your team and we'll follow up shortly.",
		switchToCal: "Schedule a demo instead",
	},
} as const;

export const successPageContent = {
	seo: {
		title: "Thank you",
		description: "We received your message and will be in touch soon.",
		path: "/success",
		noIndex: true,
	} satisfies PageSeoContent,
	title: "Thank you for reaching out.",
	body: "We received your message and will get back to you shortly.",
} as const;

export const notFoundPageContent = {
	seo: {
		title: "Page not found",
		description: "The page you are looking for does not exist or has moved.",
		path: "",
		noIndex: true,
	} satisfies PageSeoContent,
	title: "Page not found.",
	body: "The page you are looking for does not exist or has moved.",
} as const;
