import type { PageSeoContent } from "#/content/types.ts";

export const hireYourTeamPageContent = {
	seo: {
		title: "Hire your AI team",
		description:
			"Hire AI Specialists to handle tedious CX reporting and monitoring—so your team can focus on revenue, retention, and strategy.",
		path: "/hire-your-team",
	} satisfies PageSeoContent,
} as const;

export type AiAssistant = {
	id: string;
	title: string;
	role: string;
	summary: string;
	gruntWork: string;
};

export const heroRotatingOutcomes = [
	"where revenue is hiding",
	"who might churn next",
	"what customers want built",
	"which accounts need attention",
	"compliance risks before they escalate",
] as const;

export const syncEngine = {
	eyebrow: "Messy Data. Easy Button.",
	title: "Our Sync Engine connects to the systems you already use.",
	description:
		"Your data lives in a dozen places. Our Sync Engine pulls it together quickly and securely, so your AI Specialists start working without a six-month integration project.",
	features: [
		{
			title: "Connect in minutes, not months",
			description:
				"Pre-built connectors for CRM, support platforms, surveys, and conversation tools. Most teams are live in under 15 minutes per source.",
		},
		{
			title: "Messy data, normalized for AI",
			description:
				"Tickets, chats, emails, and spreadsheets arrive in different shapes. Sync Engine harmonizes them into one governed layer your AI Specialists can trust.",
		},
		{
			title: "Always fresh, always yours",
			description:
				"Data syncs on your schedule. You choose what connects, what stays out, and when to pause. No black boxes, no surprise exports.",
		},
	],
	connectors: [
		"Salesforce",
		"Zendesk",
		"Genesys",
		"Intercom",
		"Dynamics",
		"Freshworks",
	],
} as const;

export const workModes = [
	{
		title: "Answers in seconds, not hours or days",
		description:
			"Skip the late-night pivot tables. Ask a plain-language question and get a governed answer in seconds, sourced from the systems you already use.",
	},
	{
		title: "Hire the team to watch 24/7",
		description:
			"Your AI Specialists monitor conversations, tickets, surveys, and operational data around the clock, then surface what matters before it becomes a fire drill.",
	},
] as const;

export type WorkModeIssue = {
	title: string;
	instances: number;
	detail: string;
};

export const askModeDemo = {
	question: "Which enterprise accounts mentioned billing friction this quarter?",
	answerLead:
		"4 enterprise accounts flagged billing friction in Q3 conversation and ticket data:",
	accounts: [
		{ name: "Meridian Health", mentions: 5 },
		{ name: "Acme Corp", mentions: 3 },
		{ name: "Nordtek AS", mentions: 2 },
		{ name: "Valterra Group", mentions: 1 },
	],
	themes: ["invoice timing", "pro-rated charges", "portal access delays"],
	sources: ["Zendesk", "Salesforce", "Q3 conversation sync"],
} as const;

export const monitorModeDemo = {
	alert: "Churn risk rising in EMEA onboarding since yesterday.",
	summaryCta: "Summary ready for your standup.",
	issues: [
		{
			title: "Provisioning delays in EMEA onboarding",
			instances: 47,
			detail: "Average time-to-first-value exceeded SLA by 2.3 days across new logos.",
		},
		{
			title: "Missing welcome sequence in local language",
			instances: 31,
			detail: "German and French accounts flagged incomplete localized onboarding content.",
		},
		{
			title: "CSAT drop during first-week check-in",
			instances: 22,
			detail: "Post-onboarding survey scores fell 14 points week-over-week in EMEA.",
		},
	],
} as const satisfies { issues: readonly WorkModeIssue[] };

export const assistants: AiAssistant[] = [
	{
		id: "revenue",
		title: "Revenue Opportunity Scout",
		role: "Growth & expansion",
		summary:
			"Finds upsell, cross-sell, and renewal intent buried in conversations and usage, without you mining five dashboards.",
		gruntWork:
			"Searching CRM notes, stitching usage exports, and building one-off renewal decks.",
	},
	{
		id: "churn",
		title: "Churn Risk Analyst",
		role: "Retention",
		summary:
			"Spots frustration patterns and relationship cooling before they show up on a renewal call.",
		gruntWork:
			"Manually tagging at-risk accounts and reconciling NPS with support volume.",
	},
	{
		id: "feedback",
		title: "Product Feedback Compiler",
		role: "Voice of customer",
		summary:
			"Clusters feedback from every channel into clear themes product and engineering can prioritize.",
		gruntWork:
			"Copy-pasting quotes into slides and arguing over which spreadsheet is “the source of truth.”",
	},
	{
		id: "accounts",
		title: "Key Account Watch",
		role: "Strategic accounts",
		summary:
			"Keeps a steady pulse on your largest customers: escalations, sentiment shifts, and executive-ready summaries.",
		gruntWork:
			"Weekly account reviews built from inbox searches and ad hoc leadership requests.",
	},
	{
		id: "compliance",
		title: "Compliance & Policy Monitor",
		role: "Risk & governance",
		summary:
			"Detects policy language drift, disclosure gaps, and emerging compliance themes across channels.",
		gruntWork:
			"Sampling transcripts and hoping nothing important slipped through QA.",
	},
	{
		id: "cx",
		title: "CX Quality Reviewer",
		role: "Experience quality",
		summary:
			"Highlights experience breakdowns and coaching opportunities from real interactions, not random ticket pulls.",
		gruntWork:
			"Listening to call samples and building subjective QA scorecards by hand.",
	},
	{
		id: "bot",
		title: "Bot Performance Coach",
		role: "Automation quality",
		summary:
			"Shows when bots deflect well, and when they create new work for humans or customers.",
		gruntWork:
			"Exporting bot logs and guessing which intents need retraining.",
	},
	{
		id: "coach",
		title: "Support Team Coach",
		role: "Agent enablement",
		summary:
			"Surfaces coaching moments from live work so leaders spend time developing people, not hunting examples.",
		gruntWork:
			"Shadowing agents and digging through tickets to find one teachable interaction.",
	},
];

export const tediousWorkItems = [
	"Searching reporting systems for the same metrics every Monday",
	"Stitching spreadsheets together after everyone else has gone home",
	"Building pivot tables to answer one executive question",
	"Rebuilding slide decks when the data finally updates",
	"Chasing answers across chat, email, CRM, and survey tools",
] as const;

export const strategicShiftItems = [
	{
		title: "Protect revenue",
		description:
			"Spend time on accounts and motions that move ARR, not on reconciling who said what in which system.",
	},
	{
		title: "Reduce churn",
		description:
			"Intervene while relationships are repairable, with evidence your leadership team will trust.",
	},
	{
		title: "Build better products",
		description:
			"Bring product teams a ranked, sourced view of customer pain, not a folder of screenshots.",
	},
	{
		title: "Coach with confidence",
		description:
			"Lead humans with clear examples and trends, so AI feels like backup, not a replacement.",
	},
] as const;

export const privacySecurityPoints = [
	{
		title: "ISO 27001 certified",
		description:
			"Independent, audited security controls your InfoSec and procurement teams already look for in vendor reviews.",
		icon: "award" as const,
	},
	{
		title: "GDPR compliant",
		description:
			"Privacy practices built for European operations and global customers who expect more than a policy page.",
		icon: "shield" as const,
	},
	{
		title: "AES-256 encryption",
		description:
			"Your data is encrypted in transit and at rest to AES-256 or higher, the bar enterprise buyers set before they connect a single system.",
		icon: "lock" as const,
	},
	{
		title: "Your data never trains our models",
		description:
			"What your AI Specialists learn from stays in your environment. We do not use your data to train language models.",
		icon: "ban" as const,
	},
] as const;

export const reassurancePoints = [
	{
		title: "AI does the grunt work. You handle the judgement.",
		body: "Your AI Specialists handle search, synthesis, and monitoring. You decide what to do with the insight, and who needs to hear it. No more surprises, no more delegating menial work to your humans.",
	},
	{
		title: "Scale the team up and down. You're always in control.",
		body: "Turn AI Specialists on when you need them, off when you don't. Your AI Agents are here to please you, not to run rogue. Every insight stays harnessed in our system.",
	},
	{
		title: "Governed answers, not mystery boxes.",
		body: "Every insight can be traced to your data and policies, so teams can validate before they present upstream.",
	},
] as const;

export const faqItems = [
	{
		question: "Will this replace my team?",
		answer:
			"No. The goal is to remove the repetitive work that burns people out: late-night reporting, manual sampling, and endless status hunts. Your team can focus on decisions only humans should make: prioritization, relationships, and strategy.",
	},
	{
		question: "We’re skeptical of AI. Where do we start?",
		answer:
			"Start with one AI Specialist and one question you already ask every week. Compare the answer to what it takes today. Most teams begin with churn, revenue, or product feedback, then expand when they trust the sourcing.",
	},
	{
		question: "How is this different from another chatbot?",
		answer:
			"Not a chatbot at all. Your AI Specialists are specialized roles connected to your operational data. They monitor your data continuously, produce leadership-ready summaries, and stay focused on outcomes. They stay harnessed in our system, and do not communicate with customers. You're always in control.",
	},
	{
		question: "Can I get answers on demand and monitoring at the same time?",
		answer:
			"Yes. Ask ad hoc questions when you need a fast answer, and keep AI Specialists running 24/7 to alert your team when patterns change, before your boss asks why no one saw it coming.",
	},
	{
		question: "Who typically buys this?",
		answer:
			"CX, support, and operations leaders who are tired of being the human API between systems, and who need credible, sourced narratives for executives and cross-functional partners.",
	},
] as const;
