import type { PageSeoContent } from "#/content/types.ts";

export type FeatureItem = {
	title: string;
	description: string;
	href?: string;
};

export const featuresPageContent = {
	seo: {
		title: "Features",
		description:
			"Explore Answer Layer features—ask mode, daily briefs, AI Specialists, perspective lenses, and governed customer intelligence.",
		path: "/features",
	} satisfies PageSeoContent,
	hero: {
		eyebrow: "Platform features",
		title: "Everything you need to turn conversations into answers.",
		lead: "From instant Q&A to morning briefs and role-specific lenses, The Answer Layer gives every team a faster path from customer data to decisions.",
	},
	featureBand: {
		title: "Built for the way teams actually work.",
		description:
			"Each feature shares the same governed answer layer—one canonical model, one security posture, and clarity designed for humans, not data engineers.",
	},
	features: [
		{
			title: "Ask mode",
			description:
				"Ask any question in plain language and get governed answers from the customer data you already own—no SQL, spreadsheets, or report queues.",
			href: "/hire-your-team",
		},
		{
			title: "The Daily Brief",
			description:
				"Your personal AI chief of staff—a morning pulse on company health, emerging themes, and what needs attention before your day begins.",
			href: "/daily-signal",
		},
		{
			title: "AI Specialists",
			description:
				"Hire a scalable AI workforce for churn, feedback, compliance, and more. Toggle who is on, when they're on, and stay in control.",
			href: "/hire-your-team",
		},
		{
			title: "Perspective lenses",
			description:
				"Ask the same question through the eyes of a CEO, marketer, product leader, or CX strategist—and get the story that drives action.",
			href: "/hire-your-team",
		},
		{
			title: "Conversation audit",
			description:
				"AI-powered insights and subtext analysis across every omnichannel interaction—alerts, anomalies, and trends surfaced automatically.",
		},
		{
			title: "Virtual coach",
			description:
				"Agent feedback loops and coaching powered by real conversation data, not generic scripts or quarterly slide decks.",
		},
	] satisfies FeatureItem[],
} as const;
