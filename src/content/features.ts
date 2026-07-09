import type { FaqItem } from "#/components/marketing/faq-accordion.tsx";
import type { PageSeoContent } from "#/content/types.ts";

export type FeatureItem = {
	title: string;
	description: string;
	highlights: readonly string[];
	href?: string;
};

export const featuresPageContent = {
	seo: {
		title: "Features",
		description:
			"Ask mode, Daily Briefs, AI Specialists, perspective lenses, and governed customer intelligence—everything in The Answer Layer, built for CX leaders who need answers before standup.",
		path: "/features",
	} satisfies PageSeoContent,
	hero: {
		eyebrow: "Platform features",
		title: "Answers when you ask. Signal when you don't.",
		lead: "The Answer Layer isn't another dashboard or chatbot—it's how your team gets governed intelligence from the customer data you already own. Ask a question in seconds, wake up to a Daily Brief, or hire AI Specialists to watch while you sleep.",
		primaryCta: "See it on your data",
		secondaryCta: "Explore connectors",
		secondaryHref: "/data-connectors",
	},
	workModes: {
		eyebrow: "Two ways to work",
		title: "On-demand answers and always-on monitoring—together.",
		description:
			"Most teams need both: fast answers when a leader asks, and quiet monitoring so nothing important slips through before standup. You don't have to pick one.",
		modes: [
			{
				title: "Ask mode",
				description:
					"Skip the late-night pivot tables. Ask a plain-language question and get a governed answer in seconds—sourced from tickets, chats, CRM notes, and call transcripts together.",
				demo: "ask" as const,
			},
			{
				title: "Monitor mode",
				description:
					"Hire AI Specialists to watch your customer data around the clock. They surface churn risk, emerging themes, and coaching opportunities before they become fire drills.",
				demo: "monitor" as const,
			},
		],
	},
	featureBand: {
		eyebrow: "The platform",
		title: "Built for the way leaders actually work.",
		description:
			"Every feature shares one governed answer layer—one security posture, one canonical view of your customers, and clarity designed for humans, not data engineers.",
	},
	features: [
		{
			title: "Ask mode",
			description:
				"Stop opening five tabs to answer one question. Ask in plain language and get a sourced, governed response from every system you've connected.",
			highlights: [
				"Plain-language questions—no SQL or report queues",
				"Answers traceable to your connected sources",
				"Built for ad hoc leadership and ops questions",
			],
			href: "/hire-your-team",
		},
		{
			title: "The Daily Brief",
			description:
				"Your personal AI chief of staff delivers a morning pulse on company health, emerging themes, and what needs attention—read with your coffee or listen on your commute.",
			highlights: [
				"Overnight signals ranked by impact",
				"Three decisions worth your attention before standup",
				"Unique to your role, domain, and connected data",
			],
			href: "/daily-signal",
		},
		{
			title: "AI Specialists",
			description:
				"Hire a scalable AI workforce for churn, feedback, compliance, revenue, and more. Turn them on when you need them, off when you don't—you stay in control.",
			highlights: [
				"Pre-built roles for common CX and ops workflows",
				"Custom specialists for your unique business",
				"24/7 monitoring with human-readable summaries",
			],
			href: "/hire-your-team",
		},
		{
			title: "Perspective lenses",
			description:
				"Ask the same question through the eyes of a CEO, marketer, product leader, or CX strategist—and get the story that actually drives action in that room.",
			highlights: [
				"Role-specific framing without re-asking",
				"Executive-ready narratives, not raw data dumps",
				"Aligned stories across functional partners",
			],
			href: "/hire-your-team",
		},
		{
			title: "Conversation audit",
			description:
				"AI-powered insights and subtext analysis across every omnichannel interaction—alerts, anomalies, and trends surfaced automatically, not after a quarterly review.",
			highlights: [
				"Cross-channel theme detection",
				"Anomaly alerts when patterns shift",
				"Subtext and sentiment beyond surface keywords",
			],
		},
		{
			title: "Virtual coach",
			description:
				"Agent feedback loops and coaching powered by real conversation data—not generic scripts, random ticket samples, or slide decks from last quarter.",
			highlights: [
				"Coaching tied to actual customer interactions",
				"Trend-based guidance, not one-off critiques",
				"Supports QA and enablement teams at scale",
			],
		},
	] satisfies FeatureItem[],
	unifiedLayer: {
		eyebrow: "One answer layer",
		title: "Every feature draws from the same governed customer picture.",
		description:
			"Connect your stack once. Ask mode, Daily Briefs, AI Specialists, and lenses all work from the same normalized, policy-aware layer—so you're never reconciling conflicting versions of the truth.",
		steps: [
			{
				title: "Connect your sources",
				description:
					"Plug in CRM, support, CCaaS, and conversation tools through pre-built connectors. Our team handles mapping and governance.",
			},
			{
				title: "Normalize once, use everywhere",
				description:
					"Sync Engine harmonizes tickets, chats, calls, and CRM data into one layer your features can trust—without you building a data team.",
			},
			{
				title: "Choose how you work",
				description:
					"Ask on demand, subscribe to briefs, hire specialists, or combine all three. Every surface stays in sync as your data updates.",
			},
		],
	},
	audiences: {
		eyebrow: "Who it's for",
		title: "Built for leaders who are tired of being the human API.",
		description:
			"If you're the person stitching together exports before every exec meeting, The Answer Layer was designed for your week—not a data engineer's roadmap.",
		personas: [
			{
				title: "CX & support leaders",
				description:
					"Walk into standup knowing what changed overnight—churn signals, escalation themes, and coaching gaps—without another manual report.",
			},
			{
				title: "Revenue & success teams",
				description:
					"Spot expansion intent and renewal risk in conversation data before it shows up in a spreadsheet or surprises you on a QBR call.",
			},
			{
				title: "Product & insights teams",
				description:
					"Turn scattered feedback into prioritized themes engineering can act on—sourced from every channel, not just the loudest one.",
			},
			{
				title: "Operations & enablement",
				description:
					"Coach with real interaction patterns, audit quality at scale, and give agents guidance grounded in what customers actually said.",
			},
		],
	},
	reassurance: {
		eyebrow: "You're in control",
		title: "AI does the grunt work. You handle the judgement.",
		description:
			"The Answer Layer is built for skeptical teams who've been burned by black-box AI before. Every feature keeps humans in the loop.",
		points: [
			{
				title: "Specialists you can turn on and off",
				description:
					"Hire AI Specialists when you need coverage. Pause or remove them when you don't. No rogue agents, no surprise customer outreach.",
			},
			{
				title: "Governed answers, not mystery boxes",
				description:
					"Every insight traces back to your connected data and policies—so you can validate before presenting upstream.",
			},
			{
				title: "Your data never trains our models",
				description:
					"What your team learns from stays in your environment. We do not use your customer data to train language models.",
			},
		],
	},
	faq: {
		eyebrow: "FAQ",
		title: "Questions teams ask before they adopt.",
	},
	cta: {
		title: "See the features on data that looks like yours.",
		description:
			"Book a 30-minute walkthrough. We'll connect a sample of your stack, show Ask mode and a Daily Brief, and scope which AI Specialists fit your team first.",
		primaryCta: "Book a demo",
		secondaryCta: "Hire your AI team",
		secondaryHref: "/hire-your-team",
		caption: "30-minute walkthrough · No commitment",
	},
} as const;

export const featuresFaqItems: FaqItem[] = [
	{
		question: "How is this different from another chatbot?",
		answer:
			"Not a chatbot at all. The Answer Layer connects to your operational customer data and gives you governed intelligence—briefs, alerts, and on-demand answers sourced from systems you already trust. AI Specialists monitor and synthesize; they don't talk to your customers unless you explicitly build that workflow.",
	},
	{
		question: "Can I use Ask mode and monitoring at the same time?",
		answer:
			"Yes—and most teams do. Ask ad hoc questions when a leader needs a fast answer, and keep AI Specialists running 24/7 to surface what changed before anyone has to go looking for it.",
	},
	{
		question: "What is the Daily Brief?",
		answer:
			"A personalized morning pulse delivered to your inbox or read aloud on your commute. It ranks overnight signals, emerging themes, and decisions worth your attention—built from your connected data, not a generic industry newsletter.",
	},
	{
		question: "What are AI Specialists?",
		answer:
			"Specialized AI roles you hire for specific jobs—churn risk, product feedback, compliance monitoring, revenue scouting, and more. Each one watches the sources you connect and produces summaries your team can act on. You choose who's on and when.",
	},
	{
		question: "What are perspective lenses?",
		answer:
			"A way to ask the same question through different leadership frames. The CEO needs a different story than product or CX—and lenses give you both without rebuilding the analysis from scratch.",
	},
	{
		question: "Do I need to be technical to use it?",
		answer:
			"No. Ask mode is plain language. Daily Briefs arrive ready to read. AI Specialists produce human-readable summaries. Your admins help with connector permissions; our onboarding team handles the rest.",
	},
	{
		question: "Will this replace my team?",
		answer:
			"No. The goal is to remove the repetitive work that burns people out—late-night reporting, manual sampling, and endless status hunts. Your team focuses on judgement, relationships, and decisions only humans should make.",
	},
	{
		question: "How fast will we see value?",
		answer:
			"Most teams connect their first sources in days and start with one question they already ask every week. Compare the answer to what it takes today—then expand briefs, specialists, and lenses as trust builds.",
	},
];
