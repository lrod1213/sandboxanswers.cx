import type { FaqItem } from "#/components/marketing/faq-accordion.tsx";
import type { StackIntegrationContent } from "#/content/ai-assistants-team.ts";
import type { PageSeoContent } from "#/content/types.ts";

export const theAnswerLayerPageContent = {
	seo: {
		title: "The Answer Layer — Governed customer intelligence for CX leaders",
		description:
			"The Answer Layer connects your customer systems once and delivers governed intelligence—on demand, in your morning brief, and through always-on monitoring—without manual exports or analyst queues.",
		path: "/theanswerlayer",
	} satisfies PageSeoContent,
	hero: {
		eyebrow: "The Answer Layer",
		title: "The answer is already in your customer data.",
		lead: "The Answer Layer sits above the tools you already use—support, CRM, CCaaS, surveys, and reviews. Connect once, and it turns scattered conversations into governed intelligence your team can ask for, wake up to, or monitor around the clock.",
		primaryCta: {
			label: "Book a Demo",
			href: "/contact",
		},
		secondaryCta: {
			label: "See how it works",
			href: "#how-it-works",
		},
	},
	problem: {
		eyebrow: "The problem",
		title: "Getting to that answer is still a project.",
		lead: "The signal is there—in tickets, calls, CRM notes, and reviews. But today, turning it into something leadership can trust means hunting across platforms, rebuilding reports, and waiting on someone to stitch it together.",
		points: [
			"Every question sends you back to exports, pivot tables, and analyst queues",
			"Dashboards show what happened—not what it means for this week's decision",
			"CX leaders become the human API between systems and the boardroom",
		],
		image: {
			src: "/images/hire-your-team-data-to-decisions.png",
			alt: "The old way takes weeks across many handoffs — The Answer Layer way delivers decisions in minutes from one layer.",
		},
	},
	overview: {
		eyebrow: "What it is",
		title: "One intelligence layer above your customer stack.",
		lead: "The Answer Layer is not another dashboard or chatbot. It is the governed layer that sits on top of your operational data, unifies what customers are telling you across every channel, and returns sourced answers—when you ask, when you wake up, or while you sleep.",
		points: [
			"Connect your stack once; every experience draws from the same canonical customer picture",
			"Every answer traces back to the sources you connect—ready to validate before you share it upstream",
			"Built for CX leaders who need credible intelligence without standing up a data team",
		],
	},
	howItWorks: {
		eyebrow: "How it works",
		title: "Connect once. Intelligence everywhere.",
		description:
			"Three steps—from the tools you run today to governed answers your team can act on.",
		steps: [
			{
				title: "Connect your sources",
				description:
					"Plug in CRM, support, CCaaS, and conversation tools through pre-built connectors. Our team handles mapping and governance.",
			},
			{
				title: "Unify into one layer",
				description:
					"Sync Engine harmonizes tickets, chats, calls, and CRM data into a single answer layer every surface can trust.",
			},
			{
				title: "Get intelligence your way",
				description:
					"Ask a question on demand, open your morning brief, watch the company pulse, or hire AI Agents to monitor— all from the same foundation.",
			},
		],
	},
	showcase: {
		eyebrow: "See it in action",
		title: "Same layer. Different moments in your week.",
		description:
			"The Answer Layer is one product with many surfaces. Explore how governed intelligence shows up—from your morning brief to the live company pulse to the agents watching overnight.",
		tabPrompt: "Pick a moment to explore",
		featureIds: ["daily-brief", "lenses", "company-pulse"] as const,
		defaultFeatureId: "daily-brief",
	},
	workModes: {
		eyebrow: "How it reaches you",
		title: "Ask when you need an answer. Monitor when you don't.",
		description:
			"Most teams use both modes from the same layer: plain-language questions when a leader asks, and quiet monitoring so nothing important waits until standup.",
		modes: [
			{
				title: "Ask mode",
				description:
					"Skip the late-night pivot table. Ask the layer a business question in plain language and get a governed answer in seconds—drawn from every connected source together.",
				demo: "ask" as const,
			},
			{
				title: "Monitor mode",
				description:
					"Hire AI Agents to watch the layer around the clock. They surface churn risk, emerging themes, and coaching moments before they become fire drills.",
				demo: "monitor" as const,
			},
		],
	},
	surfaces: {
		eyebrow: "Built into the layer",
		title: "One foundation. Every way your team works.",
		description:
			"These are not separate products—they are how the same answer layer meets your team where they already work.",
		items: [
			{
				title: "The Daily Brief",
				description:
					"A personalized morning read on what changed overnight—ranked signals, emerging themes, and decisions worth attention before standup.",
				href: "/daily-signal",
				cta: "Explore The Daily Signal",
			},
			{
				title: "The Company Pulse",
				description:
					"An always-on executive view of customer health—churn risk, revenue motion, and operational friction updated as your data changes.",
				href: "/company-pulse",
				cta: "Explore The Company Pulse",
			},
			{
				title: "AI Agents",
				description:
					"A scalable team that monitors the layer for you—turn agents on when you need coverage, off when you don't.",
				href: "/hire-your-team",
				cta: "Hire your AI team",
			},
			{
				title: "Full platform",
				description:
					"Perspective lenses, conversation audit, virtual coach, and 150+ languages—every capability runs on the same governed layer.",
				href: "/features",
				cta: "See all features",
			},
		],
	},
	stackIntegration: {
		eyebrow: "Getting started",
		title: "Your stack in. Governed intelligence out.",
		description:
			"The Answer Layer starts with the CRM, support, and conversation tools you already run. We connect and normalize them—you start seeing answers in days, not months.",
		connectors: [
			{ name: "Salesforce", logo: "/images/connectors/salesforce.png" },
			{ name: "Zendesk", logo: "/images/connectors/zendesk.png" },
			{ name: "Genesys", logo: "/images/connectors/genesys.png" },
			{ name: "Intercom", logo: "/images/connectors/intercom.png" },
			{ name: "Dynamics 365", logo: "/images/connectors/dynamics-365.png" },
			{ name: "Freshworks", logo: "/images/connectors/freshworks.png" },
			{ name: "Gladly", logo: "/images/connectors/gladly.png" },
			{ name: "Talkdesk", logo: "/images/connectors/talkdesk.png" },
		],
		connectorNote:
			"Don't see your stack? Tell us what you use—we'll tell you how fast you can be live.",
		steps: [
			{
				title: "We handle the integration",
				description:
					"You point us at your sources. Our team connects, maps, and governs the data flowing into your answer layer.",
			},
			{
				title: "Live in days, not months",
				description:
					"Most teams connect their first sources and validate their first answer within the first pilot week.",
			},
			{
				title: "Onboarding included",
				description:
					"Every plan includes tailored onboarding so your team is confident using the layer from day one.",
			},
		],
	} satisfies StackIntegrationContent,
	reassurance: {
		eyebrow: "Built for skeptical teams",
		title: "Governed intelligence. Human judgement.",
		description:
			"The Answer Layer is designed for leaders who need AI speed without black-box risk. You stay in control of what runs, what gets shared, and what your data is used for.",
		points: [
			{
				title: "Agents you control",
				description:
					"Turn AI Agents on when you need coverage and off when you don't. No rogue automation, no surprise customer outreach.",
			},
			{
				title: "Sourced answers you can defend",
				description:
					"Every insight traces back to your connected data and policies—so you can validate before it reaches the boardroom.",
			},
			{
				title: "Your data stays yours",
				description:
					"What your team learns from stays in your environment. We do not use your customer data to train language models.",
			},
		],
	},
	faq: {
		eyebrow: "FAQ",
		title: "Still deciding? Start here.",
	},
	cta: {
		title: "See the Answer Layer on data that looks like yours.",
		description:
			"In a 30-minute walkthrough, we'll connect a sample of your stack, show you Ask mode and a Daily Brief, and help you pick the first agents to hire.",
		primaryCta: "Book a demo",
		secondaryCta: "Explore connectors",
		secondaryHref: "/data-connectors",
		caption: "30-minute walkthrough · No commitment",
	},
} as const;

export const theAnswerLayerFaqItems: FaqItem[] = [
	{
		question: "What is The Answer Layer?",
		answer:
			"A governed intelligence layer that sits above your customer systems—support, CRM, CCaaS, surveys, and reviews. You connect once, and it returns sourced answers on demand, in your morning brief, and through always-on monitoring.",
	},
	{
		question: "How is this different from another dashboard?",
		answer:
			"Dashboards visualize metrics someone already chose to track. The Answer Layer synthesizes cross-system evidence for the question in front of you this week—with traceable sources, whether you ask on demand or receive a brief overnight.",
	},
	{
		question: "How is this different from a chatbot?",
		answer:
			"It is not a customer-facing chatbot. The Answer Layer reads your operational data and gives your team governed intelligence—briefs, alerts, and on-demand answers. AI Agents monitor and synthesize; they do not talk to your customers unless you build that workflow.",
	},
	{
		question: "Do I need Ask mode and monitoring?",
		answer:
			"Most teams use both from the same layer. Ask when a leader needs a fast answer. Keep AI Agents running to surface what changed before anyone has to go looking for it.",
	},
	{
		question: "Who sees value first?",
		answer:
			"CX and operations leaders who spend nights reconciling exports before executive reviews—typically in the first pilot week, starting with one question they already ask every Monday.",
	},
	{
		question: "How fast can we get started?",
		answer:
			"Most teams connect their first sources in days. We handle integration and mapping; you validate the first answer against what it takes today, then expand briefs, pulse views, and agents as trust builds.",
	},
];
