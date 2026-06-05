export type AiAssistant = {
	id: string;
	title: string;
	role: string;
	summary: string;
	gruntWork: string;
	icon: "trending-up" | "user-minus" | "messages-square" | "building-2" | "shield-check" | "heart-handshake" | "bot" | "graduation-cap";
};

export const heroRotatingOutcomes = [
	"where revenue is hiding",
	"who might churn next",
	"what customers want built",
	"which accounts need attention",
] as const;

export const workModes = [
	{
		title: "Ask once, get an answer",
		description:
			"Skip the late-night pivot tables. Ask a plain-language question and get a governed answer in seconds—sourced from the systems you already use.",
		example: "“Which enterprise accounts mentioned billing friction this quarter?”",
	},
	{
		title: "Hire the team to watch 24/7",
		description:
			"Your assistants monitor conversations, tickets, surveys, and operational data around the clock—then surface what matters before it becomes a fire drill.",
		example: "“Churn risk rising in EMEA onboarding—summary ready for your standup.”",
	},
] as const;

export const assistants: AiAssistant[] = [
	{
		id: "revenue",
		title: "Revenue Opportunity Scout",
		role: "Growth & expansion",
		summary:
			"Finds upsell, cross-sell, and renewal intent buried in conversations and usage—without you mining five dashboards.",
		gruntWork:
			"Searching CRM notes, stitching usage exports, and building one-off renewal decks.",
		icon: "trending-up",
	},
	{
		id: "churn",
		title: "Churn Risk Analyst",
		role: "Retention",
		summary:
			"Spots frustration patterns and relationship cooling before they show up on a renewal call.",
		gruntWork:
			"Manually tagging at-risk accounts and reconciling NPS with support volume.",
		icon: "user-minus",
	},
	{
		id: "feedback",
		title: "Product Feedback Compiler",
		role: "Voice of customer",
		summary:
			"Clusters feedback from every channel into clear themes product and engineering can prioritize.",
		gruntWork:
			"Copy-pasting quotes into slides and arguing over which spreadsheet is “the source of truth.”",
		icon: "messages-square",
	},
	{
		id: "accounts",
		title: "Key Account Watch",
		role: "Strategic accounts",
		summary:
			"Keeps a steady pulse on your largest customers—escalations, sentiment shifts, and executive-ready summaries.",
		gruntWork:
			"Weekly account reviews built from inbox searches and ad hoc leadership requests.",
		icon: "building-2",
	},
	{
		id: "compliance",
		title: "Compliance & Policy Monitor",
		role: "Risk & governance",
		summary:
			"Detects policy language drift, disclosure gaps, and emerging compliance themes across channels.",
		gruntWork:
			"Sampling transcripts and hoping nothing important slipped through QA.",
		icon: "shield-check",
	},
	{
		id: "cx",
		title: "CX Quality Reviewer",
		role: "Experience quality",
		summary:
			"Highlights experience breakdowns and coaching opportunities from real interactions—not random ticket pulls.",
		gruntWork:
			"Listening to call samples and building subjective QA scorecards by hand.",
		icon: "heart-handshake",
	},
	{
		id: "bot",
		title: "Bot Performance Coach",
		role: "Automation quality",
		summary:
			"Shows when bots deflect well—and when they create new work for humans or customers.",
		gruntWork:
			"Exporting bot logs and guessing which intents need retraining.",
		icon: "bot",
	},
	{
		id: "coach",
		title: "Support Team Coach",
		role: "Agent enablement",
		summary:
			"Surfaces coaching moments from live work so leaders spend time developing people, not hunting examples.",
		gruntWork:
			"Shadowing agents and digging through tickets to find one teachable interaction.",
		icon: "graduation-cap",
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
			"Spend time on accounts and motions that move ARR—not on reconciling who said what in which system.",
	},
	{
		title: "Reduce churn",
		description:
			"Intervene while relationships are repairable, with evidence your leadership team will trust.",
	},
	{
		title: "Build better products",
		description:
			"Bring product teams a ranked, sourced view of customer pain—not a folder of screenshots.",
	},
	{
		title: "Coach with confidence",
		description:
			"Lead humans with clear examples and trends—so AI feels like backup, not a replacement.",
	},
] as const;

export const reassurancePoints = [
	{
		title: "AI does the grunt work. You do the judgment.",
		body: "Your assistants handle search, synthesis, and monitoring. You decide what to do with the insight—and who needs to hear it.",
	},
	{
		title: "Your job gets more strategic, not smaller.",
		body: "Leaders who adopt this shift spend less time producing artifacts and more time influencing outcomes: retention, revenue, and experience.",
	},
	{
		title: "Governed answers, not mystery boxes.",
		body: "Every insight can be traced to your data and policies—so skeptical teams can validate before they present upstream.",
	},
] as const;

export const faqItems = [
	{
		question: "Will this replace my team?",
		answer:
			"No. The goal is to remove the repetitive work that burns people out—late-night reporting, manual sampling, and endless status hunts—so your team can focus on decisions only humans should make: prioritization, relationships, and strategy.",
	},
	{
		question: "We’re skeptical of AI. Where do we start?",
		answer:
			"Start with one assistant and one question you already ask every week. Compare the answer to what it takes today. Most teams begin with churn, revenue, or product feedback—then expand when they trust the sourcing.",
	},
	{
		question: "How is this different from another chatbot?",
		answer:
			"These assistants are specialized roles connected to your operational data. They monitor continuously, produce leadership-ready summaries, and stay focused on CX outcomes—not generic conversation.",
	},
	{
		question: "Can I get answers on demand and monitoring at the same time?",
		answer:
			"Yes. Ask ad hoc questions when you need a fast answer, and keep assistants running 24/7 to alert your team when patterns change—before your boss asks why no one saw it coming.",
	},
	{
		question: "Who typically buys this?",
		answer:
			"CX, support, and operations leaders who are tired of being the human API between systems—and who need credible, sourced narratives for executives and cross-functional partners.",
	},
] as const;
