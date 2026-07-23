import type { PageSeoContent } from "#/content/types.ts";
import type { FaqItem } from "#/components/marketing/faq-accordion.tsx";
import type { StackIntegrationContent } from "#/content/home-team.ts";

export const dataConnectorsPageContent = {
	seo: {
		title: "Connectors",
		description:
			"Connect Salesforce, Zendesk, Genesys, and the rest of your CX stack to The Answer Layer. Live in days—not months—with governed customer intelligence on the data you already own.",
		path: "/data-connectors",
	} satisfies PageSeoContent,
	hero: {
		eyebrow: "Connectors",
		title: "Your stack already has the answers. We connect to it.",
		lead: "Point us at the CRM, support platform, and conversation tools your team runs every day. Our Sync Engine pulls it together—securely, on your terms—so your AI Agents can start working before your next team sync.",
		primaryCta: "Talk through your stack",
		secondaryCta: "See how it works",
		secondaryHref: "/hire-your-team",
	},
	outcomes: {
		eyebrow: "Once you're connected",
		title: "One layer. Every signal your customers are already sending.",
		description:
			"Connectors aren't plumbing for engineers—they're how The Answer Layer turns scattered conversations into the briefs, alerts, and on-demand answers your leaders actually use.",
		items: [
			{
				title: "Ask across every source at once",
				description:
					"Stop opening five tabs to answer one question. Ask in plain language and get a governed answer sourced from tickets, chats, CRM notes, and call transcripts together.",
			},
			{
				title: "Morning briefs built on live data",
				description:
					"Your Daily Brief reflects what changed overnight—churn risk, emerging themes, decisions worth your attention—because connectors keep your customer picture current.",
			},
			{
				title: "AI Agents that never clock out",
				description:
					"Hire agents for churn, product feedback, compliance, and more. They monitor the systems you connect and surface what matters before it becomes a fire drill.",
			},
		],
	},
	dataTypes: {
		eyebrow: "What we connect",
		title: "If your customers said it, we can probably use it.",
		description:
			"Sync Engine harmonizes messy, multi-format data into one governed layer—so you spend less time cleaning and more time deciding.",
		types: [
			"Support tickets & case history",
			"Live chat & messaging threads",
			"Email & async conversations",
			"Call transcripts & CCaaS metadata",
			"CRM accounts, contacts & opportunities",
			"Surveys, CSAT & NPS responses",
			"Product feedback & feature requests",
			"Agent notes & internal escalations",
		],
	},
	governance: {
		eyebrow: "Safe to connect",
		title: "Your data stays yours. Your controls stay in place.",
		description:
			"Procurement and InfoSec teams ask hard questions before anything plugs in. We built connectors to pass those conversations—not dodge them.",
		points: [
			{
				title: "You choose what connects",
				description:
					"Connect only the sources you want, pause syncs anytime, and keep sensitive systems out of scope until you're ready.",
			},
			{
				title: "We do the integration work",
				description:
					"Our team handles mapping, normalization, and governance. You point us at the systems; we get your first sources live in days, not quarters.",
			},
			{
				title: "Governed, auditable answers",
				description:
					"Every insight traces back to your connected data and policies—so teams can validate before they walk into the boardroom.",
			},
			{
				title: "Enterprise-grade security",
				description:
					"ISO 27001 certified, GDPR compliant, AES-256 encryption in transit and at rest. Your data never trains our models.",
			},
		],
	},
	faq: {
		eyebrow: "FAQ",
		title: "Questions teams ask before they connect.",
	},
	cta: {
		title: "Tell us what you run. We'll tell you how fast you can be live.",
		description:
			"Book a 30-minute walkthrough and we'll map your stack, scope a pilot, and show The Answer Layer on data that looks like yours—not a canned demo.",
		primaryCta: "Book a demo",
		caption: "30-minute walkthrough · No commitment",
	},
} as const;

export const connectorsStackIntegration = {
	eyebrow: "How it works in your stack",
	title: "Live on your data before your next team sync.",
	description:
		"Connect the tools you already use and your AI Agents start working—no six-month integration project. No weekends lost to data mapping.",
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
			title: "We do the heavy lifting",
			description:
				"Our team handles the integration and data mapping. You point us at the sources; we connect, normalize, and govern the rest.",
		},
		{
			title: "Live in days, not months",
			description:
				"Most teams connect their first sources and start seeing insights within days—not a multi-quarter rollout.",
		},
		{
			title: "Onboarding included",
			description:
				"Tailored onboarding is built into every plan, so your team is confident and self-sufficient from day one.",
		},
	],
} as const satisfies StackIntegrationContent;

export type Connector = {
	slug: string;
	name: string;
	description: string;
	category: "platform";
	logo?: string;
	dataSources: string;
};

export const supportedConnectors: Connector[] = [
	{
		slug: "salesforce",
		name: "Salesforce",
		logo: "/images/connectors/salesforce.png",
		description:
			"Bring Service Cloud cases, account context, and revenue signals into one answer layer—so support and sales stories stay aligned.",
		category: "platform",
		dataSources: "Cases, accounts, contacts, opportunities, activity history",
	},
	{
		slug: "zendesk",
		name: "Zendesk",
		logo: "/images/connectors/zendesk.png",
		description:
			"Turn ticket volume, CSAT trends, and escalation patterns into leadership-ready summaries—without another export.",
		category: "platform",
		dataSources: "Tickets, chats, macros, satisfaction scores, agent notes",
	},
	{
		slug: "genesys",
		name: "Genesys",
		logo: "/images/connectors/genesys.png",
		description:
			"Connect contact-center conversations and routing data so you can spot friction across voice, digital, and blended journeys.",
		category: "platform",
		dataSources: "Call transcripts, interaction metadata, queues, surveys",
	},
	{
		slug: "intercom",
		name: "Intercom",
		logo: "/images/connectors/intercom.png",
		description:
			"Capture product-led support threads and in-app conversations—the signals product and CX leaders both need to see.",
		category: "platform",
		dataSources: "Conversations, user profiles, tags, product events",
	},
	{
		slug: "microsoftdynamics",
		name: "Dynamics 365",
		logo: "/images/connectors/dynamics-365.png",
		description:
			"Unify CRM service records with the rest of your customer picture so account health isn't locked in a silo.",
		category: "platform",
		dataSources: "Cases, accounts, contacts, activities, custom entities",
	},
	{
		slug: "freshworks",
		name: "Freshworks",
		logo: "/images/connectors/freshworks.png",
		description:
			"Pull Freshdesk and Freshservice conversations into governed intelligence—ideal for teams that want speed without enterprise drag.",
		category: "platform",
		dataSources: "Tickets, chats, knowledge articles, SLA metadata",
	},
	{
		slug: "gladly",
		name: "Gladly",
		logo: "/images/connectors/gladly.png",
		description:
			"Connect people-centric conversation history so your team sees the full customer relationship—not just the latest ticket.",
		category: "platform",
		dataSources: "Conversations, customer profiles, topics, agent notes",
	},
	{
		slug: "talkdesk",
		name: "Talkdesk",
		logo: "/images/connectors/talkdesk.png",
		description:
			"Layer call-center transcripts and quality signals into Ask mode and Daily Briefs for leaders who live in the queue.",
		category: "platform",
		dataSources: "Call recordings, transcripts, disposition codes, QA scores",
	},
	{
		slug: "gorgias",
		name: "Gorgias",
		description:
			"E-commerce support teams get faster paths from order issues to revenue impact—returns, shipping friction, and repeat contacts included.",
		category: "platform",
		dataSources: "Tickets, Shopify order context, macros, satisfaction data",
	},
];

export const connectorsFaqItems: FaqItem[] = [
	{
		question: "How long does it take to connect our first source?",
		answer:
			"Most teams connect their first CRM or support platform in days—not months. Pre-built connectors handle the heavy lifting; our onboarding team maps your fields and governance rules so you're not doing it alone on a weekend.",
	},
	{
		question: "Do we need engineering resources to get started?",
		answer:
			"Usually not for standard connectors. We work with your admins for credentials and permissions, then handle normalization and sync setup. If you have a custom warehouse or internal API, we'll scope that together during onboarding.",
	},
	{
		question: "What if our tool isn't on the list?",
		answer:
			"Tell us what you run. We add connectors based on customer demand and can often stand up a new source faster than teams expect. Send a quick note and we'll come back with a realistic timeline—not a generic 'contact sales.'",
	},
	{
		question: "Is our customer data safe when we connect?",
		answer:
			"Yes. We're ISO 27001 certified, GDPR compliant, and encrypt data in transit and at rest with AES-256 or higher. You control which sources connect, when syncs run, and what stays out of scope. Your data never trains our models.",
	},
	{
		question: "Can we start with one connector and expand later?",
		answer:
			"That's how most teams begin—one CRM or support platform, one AI Agent, one question they already ask every week. Add sources as you trust the answers and want broader coverage across the business.",
	},
	{
		question: "How do connectors affect pricing?",
		answer:
			"Plans scale with conversation volume and the number of integrations you connect—not seats. We'll size the right fit on one call based on your stack and how much customer data you want in scope.",
	},
	{
		question: "What permissions does cxconnect.ai need?",
		answer:
			"Read access to the customer conversation and CRM data you want analyzed—nothing more than what's required to surface governed insights. We'll walk your InfoSec team through scopes, retention, and pause controls before anything goes live.",
	},
	{
		question: "Can we change or remove a connector later?",
		answer:
			"Absolutely. Your stack evolves; your answer layer should keep up. Add sources when you're ready, pause syncs when you need to, and keep context portable if you switch vendors down the road.",
	},
];
