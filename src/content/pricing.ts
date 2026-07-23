import type { PageSeoContent } from "#/content/types.ts";

export const pricingContent = {
	seo: {
		title: "Pricing",
		description:
			"Flexible cxconnect.ai plans starting at $1,950 per month. Custom packages based on conversation volume and connectors—never charged by seat.",
		path: "/pricing",
	} satisfies PageSeoContent,
	hero: {
		eyebrow: "Pricing",
		title: "Custom plans for custom needs.",
		lead: "With options to start with a pilot based on your data.",
	},
	plan: {
		title: "Flexible plans",
		priceLabel: "Starting at",
		price: "$1,950",
		period: "per month",
		description:
			"Our packages depend on your team's monthly conversation volume and the connectors you plug into cxconnect.ai.",
		promise:
			"Our promise? You'll never be charged by seat, which means anyone in your organization can get the insights they need.",
	},
	featuresTitle: "Key features for your team:",
	features: [
		"SSO & Okta",
		"User segmentation",
		"HIPAA compliance",
		"GDPR compliance",
		"API access",
		"Real-time alerts",
		"Tailored onboarding",
		"AI Agent roster",
		"PII removal",
		"Multilingual support",
	],
	customers: {
		eyebrow: "Customers",
		title: "Trusted by the most customer-centric and innovative teams.",
		lead: "Driving product excellence—for global businesses that value customer-led growth.",
		tagline: "Revealing what matters to build what's loved.",
	},
	faq: [
		{
			question: "What drives the price of a plan?",
			answer:
				"Monthly conversation volume, number of data connectors, and which AI Agents you enable. We scope packages during onboarding so you pay for the coverage you need—not empty seats.",
		},
		{
			question: "Is there a free trial?",
			answer:
				"We typically start with a scoped pilot on your data so you can validate sourcing and workflows before committing to a full deployment.",
		},
		{
			question: "Do you charge per user or per seat?",
			answer:
				"No. Anyone in your organization can ask questions and review insights. Pricing scales with data volume and platform usage, not headcount.",
		},
		{
			question: "Can we start small and expand?",
			answer:
				"Yes. Most teams begin with one or two AI Agents and a handful of connectors, then add coverage as they trust the answer layer.",
		},
	],
} as const;
