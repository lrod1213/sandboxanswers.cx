import type { PageSeoContent } from "#/content/types.ts";

export const dailySignalPageContent = {
	seo: {
		title: "The Daily Signal",
		description:
			"The Daily Signal surfaces customer intelligence from your data. The Daily Brief delivers your morning pulse—in your inbox or on audio—before you have to ask.",
		path: "/daily-signal",
	} satisfies PageSeoContent,
	hero: {
		eyebrow: "The Daily Signal",
		title: "Wake up to what matters.",
		lead: "Your customers are already telling you what changed overnight. The Daily Signal watches every connected source and distills it into executive intelligence—delivered each morning as your Daily Brief.",
		primaryCta: {
			label: "Listen to Your Daily Brief",
			href: "/contact",
		},
		secondaryCta: {
			label: "Book a Demo",
			href: "/contact",
		},
		video: {
			src: "/videos/daily-signal-walkthrough.mp4",
			poster: "/images/hire-your-team-daily-brief.jpg",
			label: "Daily Signal",
			caption: "See your morning pulse on customer intelligence",
		},
	},
	dailySignal: {
		eyebrow: "What is the Daily Signal?",
		title: "Customer intelligence that finds you.",
		lead: "The Daily Signal is The Answer Layer's always-on read on your business—monitoring support, sales, product feedback, CRM activity, and reviews to surface what changed, what is at risk, and what is worth your attention.",
		points: [
			"Continuous monitoring across every source you connect—no manual exports or dashboard checks",
			"Signals ranked by business impact, not volume or noise",
			"One canonical view of customer intelligence your whole leadership team can trust",
		],
	},
	dailyBrief: {
		eyebrow: "What is the Daily Brief?",
		title: "Your morning pulse, written for you.",
		lead: "The Daily Brief is how the Daily Signal reaches you. Each morning, your AI Chief of Staff delivers a personalized summary of overnight churn risks, revenue opportunities, emerging themes, and recommended next actions—read it in your inbox or listen on the go.",
		highlights: [
			"Overnight churn signals ranked by revenue impact",
			"Emerging themes from support, sales, and product feedback",
			"Three decisions worth your attention before standup",
		],
		image: {
			src: "/images/hire-your-team-daily-brief.jpg",
			alt: "The Daily Brief — summary, critical churn risks, operational oddities, and recommended next actions.",
			width: 1024,
			height: 577,
		},
	},
	whyItMatters: {
		title: "Why leaders start their day here",
		description:
			"Most teams don't lack data—they lack time to turn it into decisions. The Daily Signal and Daily Brief replace the morning scramble with clarity you can act on.",
		items: [
			{
				title: "Act before standup",
				description:
					"Walk into your first meeting knowing which accounts need attention, which themes are emerging, and what changed overnight—without opening five tools.",
			},
			{
				title: "Skip the hunt",
				description:
					"Stop mining dashboards, stitching exports, and waiting on analysts to explain what your customer data already says.",
			},
			{
				title: "Lead with evidence",
				description:
					"Every insight in your Daily Brief is sourced from the customer data you connect—so you can share it with confidence across the org.",
			},
		],
	},
	howItWorks: {
		title: "From signal to action in minutes",
		steps: [
			{
				title: "Connect your sources",
				description:
					"Plug in support, CRM, surveys, reviews, and call transcripts. The Answer Layer unifies them into one intelligence layer.",
			},
			{
				title: "The Daily Signal watches",
				description:
					"AI Specialists and your Chief of Staff monitor overnight activity—surfacing risks, opportunities, and patterns automatically.",
			},
			{
				title: "Your Daily Brief arrives",
				description:
					"Read the summary in your inbox or listen to the audio brief on your commute. Ask follow-up questions when you need to go deeper.",
			},
		],
	},
} as const;
