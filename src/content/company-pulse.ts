import type { PageSeoContent } from "#/content/types.ts";

export const companyPulsePageContent = {
	seo: {
		title: "The Company Pulse",
		description:
			"The Company Pulse gives leadership a living view of customer health—churn risk, revenue signals, sentiment shifts, and operational friction—updated continuously from the data you already connect.",
		path: "/company-pulse",
	} satisfies PageSeoContent,
	hero: {
		eyebrow: "The Company Pulse",
		title: "See how the company is feeling—in real time.",
		lead: "Your customer data never stops talking. The Company Pulse turns it into a single executive view of business health—so you know what is rising, what is cooling, and what needs a decision before it hits the board deck.",
		primaryCta: {
			label: "Book a Demo",
			href: "/contact",
		},
		secondaryCta: {
			label: "See The Daily Signal",
			href: "/daily-signal",
		},
	},
	overview: {
		eyebrow: "What is The Company Pulse?",
		title: "One pulse for the whole business.",
		lead: "The Company Pulse is your always-on executive layer—monitoring every connected source to surface churn risk, expansion intent, product themes, and operational friction in one governed view your leadership team can trust.",
		points: [
			"Continuous read across support, CRM, surveys, reviews, and product usage—no manual reconciliation",
			"Signals ranked by revenue and retention impact, not ticket volume",
			"A shared source of truth for CX, product, and revenue leaders",
		],
	},
	signals: {
		eyebrow: "What you see",
		title: "The signals that move the business.",
		lead: "Each pulse update highlights what changed, who is affected, and where to focus—sourced from your operational data, not a generic industry report.",
		items: [
			{
				title: "Customer health",
				description:
					"Track sentiment, escalation patterns, and relationship cooling across segments before renewal conversations.",
			},
			{
				title: "Revenue motion",
				description:
					"Surface expansion intent, cross-sell signals, and renewal risk buried in conversations and usage data.",
			},
			{
				title: "Product & operations",
				description:
					"Spot emerging themes, release friction, and process breakdowns while they are still fixable.",
			},
		],
	},
	whyItMatters: {
		title: "Why executives watch the pulse",
		description:
			"Dashboards show what happened. The Company Pulse shows what is happening—and what deserves a decision today.",
		items: [
			{
				title: "Lead without lag",
				description:
					"Stop waiting for weekly reports or ad hoc analyst requests. See movement across the business as your data updates.",
			},
			{
				title: "Align the room",
				description:
					"Give CX, product, and revenue the same governed narrative—so standups and QBRs start from one version of the truth.",
			},
			{
				title: "Act with evidence",
				description:
					"Every pulse signal traces back to the sources you connect—ready for executives, boards, and cross-functional partners.",
			},
		],
	},
	howItWorks: {
		title: "From connected data to company pulse",
		steps: [
			{
				title: "Connect your stack",
				description:
					"Plug in the CRM, support platform, surveys, and conversation tools your teams already run on.",
			},
			{
				title: "The pulse monitors",
				description:
					"AI Agents and your Chief of Staff watch customer activity continuously—ranking what matters for the business.",
			},
			{
				title: "Leadership stays ahead",
				description:
					"Review the pulse on demand, pair it with your Daily Brief, or ask follow-up questions when you need to go deeper.",
			},
		],
	},
} as const;
