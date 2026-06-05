export type ProductPageContent = {
	slug: string;
	seo: { title: string; description: string };
	hero: {
		eyebrow: string;
		title: string;
		lead: string;
		primaryCta: string;
		secondaryCta?: string;
		secondaryHref?: string;
	};
	features: { title: string; description: string }[];
};

export const theAnswerLayer: ProductPageContent = {
	slug: "theanswerlayer",
	seo: {
		title: "The Answer Layer",
		description:
			"The easiest way to unlock the voices of your customers. Real-time AI insights for CX leaders.",
	},
	hero: {
		eyebrow: "The Answer Layer",
		title: "The easiest way to unlock the voices of your customers.",
		lead: "Answers in seconds. No bottlenecks. Just clarity. Built for words and numbers—the unstructured voices of your customers and the metrics that matter.",
		primaryCta: "See it in action",
		secondaryCta: "Learn more",
		secondaryHref: "/data-connectors",
	},
	features: [
		{
			title: "Answers in seconds",
			description:
				"Ask your data a question in plain language and get insights instantly—no dashboards to configure first.",
		},
		{
			title: "Built for CX leaders",
			description:
				"From contact center to C-suite, everyone gets what they need from one source of truth.",
		},
		{
			title: "Real-time by design",
			description:
				"Move past average handle time and start understanding customer voices across every channel and language.",
		},
	],
};

export const translations: ProductPageContent = {
	slug: "translations",
	seo: {
		title: "Real-time Translations",
		description:
			"Deliver native-language customer and agent experiences in 150+ languages in real time.",
	},
	hero: {
		eyebrow: "Real-time Translations",
		title: "Every language. Every channel. In real time.",
		lead: "Help your teams serve customers in their native language without slowing down operations or ballooning costs.",
		primaryCta: "Book a Demo",
	},
	features: [
		{
			title: "150+ languages",
			description:
				"Scale multilingual support with consistent quality across regions and brands.",
		},
		{
			title: "Agent and customer experiences",
			description:
				"Improve comprehension on both sides of the conversation with real-time translation.",
		},
		{
			title: "Works with your stack",
			description:
				"Connect to the platforms you already use via our apps and APIs.",
		},
	],
};

export const languages: ProductPageContent = {
	slug: "languages",
	seo: {
		title: "Languages",
		description:
			"Support customers and agents in 150+ languages with cxconnect.ai multilingual capabilities.",
	},
	hero: {
		eyebrow: "Languages",
		title: "Speak your customers' language—literally.",
		lead: "cxconnect.ai helps global brands deliver support that feels local, whether you operate in five languages or five hundred.",
		primaryCta: "Get in touch",
	},
	features: [
		{
			title: "Global coverage",
			description:
				"Support major and long-tail languages so no customer is left behind.",
		},
		{
			title: "Consistent quality",
			description:
				"Maintain tone and accuracy across agents, channels, and regions.",
		},
		{
			title: "Faster time to market",
			description:
				"Launch new regions without rebuilding your entire support stack.",
		},
	],
};
