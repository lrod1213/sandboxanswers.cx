import type {
	BlogChangelogEntry,
	BlogIndexContent,
	BlogPost,
	BlogPressEntry,
} from "#/content/blog/types.ts";

export const blogIndexContent = {
	seo: {
		title: "Now",
		description:
			"Product updates, customer stories, and practical guidance on building an answer layer for CX leaders—multilingual support, AI Agents, and governed insights.",
		path: "/blog",
	},
	title: "Now",
	lead: "Updates from the cxconnect.ai team on the answer layer, AI Agents, and customer-led growth.",
} satisfies BlogIndexContent;

export const blogChangelogEntries = [
	{
		slug: "sync-engine-connectors-live",
		title: "Sync Engine connectors for Salesforce, Zendesk, and Genesys",
		summary:
			"Pre-built connectors now ship for the systems most CX teams already run—most workspaces connect their first source in under fifteen minutes.",
		publishedAt: "2026-05-28",
	},
	{
		slug: "ai-agent-roster",
		title: "AI Agent roster with on/off controls",
		summary:
			"Hire your team of AI Agents with role-based monitoring, governed summaries, and explicit enable/disable controls for every agent.",
		publishedAt: "2026-05-14",
	},
	{
		slug: "real-time-alerts",
		title: "Real-time alerts for churn and compliance patterns",
		summary:
			"Set standing watches on operational data and get leadership-ready summaries when patterns shift—before they show up in a renewal deck.",
		publishedAt: "2026-04-30",
	},
] as const satisfies readonly BlogChangelogEntry[];

export const blogPressEntries = [
	{
		title: "The answer layer for customer conversations",
		outlet: "CX Today",
		publishedAt: "2026-03-18",
		href: "https://cxconnect.ai",
	},
	{
		title: "Multilingual support without the reporting tax",
		outlet: "Support Driven",
		publishedAt: "2026-02-04",
		href: "https://cxconnect.ai",
	},
] as const satisfies readonly BlogPressEntry[];

export const blogPosts = [
	{
		slug: "the-answer-layer-before-the-dashboard",
		title: "The answer layer before the dashboard",
		dek: "Most CX teams do not need another chart. They need a credible answer—sourced, governed, and ready before the executive meeting starts.",
		category: "insights",
		publishedAt: "2026-06-02",
		authors: [{ name: "Karri N.", role: "Product" }],
		tags: ["answer layer", "CX leadership", "reporting"],
		takeaways: [
			"Dashboards show what happened; an answer layer explains what it means and where it came from.",
			"Credible CX narratives require governed sourcing across tickets, chats, CRM notes, and surveys—not another export.",
			"Leaders move faster when ad hoc questions and 24/7 monitoring share the same data foundation.",
		],
		faqs: [
			{
				question: "What is an answer layer?",
				answer:
					"An answer layer sits above your operational systems and returns governed, sourced responses to business questions—on demand or through continuous monitoring—without manual spreadsheet work.",
			},
			{
				question: "How is that different from a BI dashboard?",
				answer:
					"Dashboards visualize predefined metrics. An answer layer synthesizes cross-system evidence for the exact question a leader asks this week, with traceable sources.",
			},
			{
				question: "Who benefits first?",
				answer:
					"CX, support, and operations leaders who spend nights reconciling exports before executive reviews typically see value in the first pilot week.",
			},
		],
		sections: [
			{
				type: "paragraph",
				text: "Every quarter, the same ritual repeats. Someone asks a sharp question in Slack. A director opens four systems, exports three CSVs, and spends a night building a deck that will be outdated by morning.",
			},
			{
				type: "paragraph",
				text: "The bottleneck is rarely insight. It is access, synthesis, and trust. Teams know the signal lives in conversations—they just cannot get to it fast enough to act.",
			},
			{
				type: "heading",
				text: "From metrics to meaning",
			},
			{
				type: "paragraph",
				text: "Dashboards answer how much. Leaders need to know why, for whom, and what to do next. That requires connecting tickets, chats, CRM context, and survey feedback into one governed layer—not another tab in the browser.",
			},
			{
				type: "list",
				items: [
					"Ad hoc questions answered in seconds with traceable sources",
					"Standing watches that surface pattern shifts before renewals",
					"Multilingual coverage without losing nuance in translation",
				],
			},
			{
				type: "quote",
				text: "The best CX teams do not wait for Monday reporting. They operate with an answer layer that works while they sleep.",
				attribution: "cxconnect.ai customer advisory board",
			},
			{
				type: "callout",
				title: "Practical starting point",
				text: "Pick one question you already chase manually every week—churn risk, product feedback, or billing friction—and compare the time to answer today versus a governed pilot on your data.",
			},
		],
		seo: {
			title: "The answer layer before the dashboard",
			description:
				"Why CX leaders need a governed answer layer—not another dashboard—to turn customer conversations into credible executive narratives.",
			path: "/blog/the-answer-layer-before-the-dashboard",
		},
	},
	{
		slug: "hire-ai-agents-not-another-chatbot",
		title: "Hire AI Agents, not another chatbot",
		dek: "Specialized roles connected to your operational data beat generic chat for CX leaders who need monitoring, synthesis, and control—not customer-facing automation.",
		category: "product",
		publishedAt: "2026-05-22",
		authors: [{ name: "Alexandra L.", role: "Customer Experience" }],
		tags: ["AI Agents", "product", "governance"],
		takeaways: [
			"AI Agents are role-based monitors tied to your systems—not customer-facing bots.",
			"You choose who is on, who is off, and what data each agent can access.",
			"The value is continuous vigilance plus leadership-ready summaries, not open-ended chat.",
		],
		faqs: [
			{
				question: "Do AI Agents replace your team?",
				answer:
					"No. They remove repetitive reporting and sampling work so human teams can focus on judgment, relationships, and strategy.",
			},
			{
				question: "Can I run monitoring and ad hoc questions together?",
				answer:
					"Yes. Ask questions when you need a fast answer, and keep agents running 24/7 to alert your team when patterns change.",
			},
		],
		sections: [
			{
				type: "paragraph",
				text: "Generic chat interfaces feel familiar, but CX leadership work is not a conversation with a blank slate. It is monitoring, synthesis, and escalation—with evidence your board will accept.",
			},
			{
				type: "heading",
				text: "A roster, not a bot",
			},
			{
				type: "paragraph",
				text: "cxconnect.ai lets you hire a team of AI Agents: churn analysts, feedback compilers, compliance monitors, and more. Toggle who is on. Scale coverage up and down. Stay in control.",
			},
			{
				type: "list",
				items: [
					"Revenue Opportunity Scout surfaces expansion signals in conversation data",
					"Churn Risk Analyst flags cooling relationships before renewal calls",
					"Compliance & Policy Monitor detects disclosure drift across channels",
				],
			},
			{
				type: "paragraph",
				text: "Each agent connects to the same governed Sync Engine layer, so answers stay consistent whether you ask in the moment or review a standing watch summary.",
			},
		],
		seo: {
			title: "Hire AI Agents, not another chatbot",
			description:
				"Why specialized AI roles connected to your CX data outperform generic chatbots for monitoring, reporting, and executive-ready insights.",
			path: "/blog/hire-ai-agents-not-another-chatbot",
		},
	},
	{
		slug: "multilingual-cx-breaks-in-the-reporting-layer",
		title: "Multilingual CX breaks in the reporting layer",
		dek: "Support teams often solve language in the conversation—and lose it again when feedback gets exported, tagged, and summarized in English-only dashboards.",
		category: "insights",
		publishedAt: "2026-05-08",
		authors: [{ name: "Tim Q.", role: "Solutions" }],
		tags: ["multilingual", "reporting", "voice of customer"],
		takeaways: [
			"Real-time translation in support does not automatically flow into executive reporting.",
			"Voice-of-customer programs fail when non-English feedback is under-sampled or over-simplified.",
			"A unified answer layer preserves language context through synthesis—not just translation.",
		],
		faqs: [
			{
				question: "Why do multilingual programs stall after the front line?",
				answer:
					"Most reporting stacks were built for English-first exports. Regional nuance gets flattened when feedback is translated once and never linked back to source conversations.",
			},
			{
				question: "What should leaders measure instead?",
				answer:
					"Theme coverage by region, sourced quotes with language lineage, and time-to-answer for cross-market questions—not just ticket volume by locale.",
			},
		],
		sections: [
			{
				type: "paragraph",
				text: "Your agents may handle twelve languages beautifully. Then Monday arrives, and product leadership receives a VOC deck built from English-only tags and a sample of tickets someone had time to read.",
			},
			{
				type: "heading",
				text: "The reporting gap",
			},
			{
				type: "paragraph",
				text: "Multilingual support and monolingual reporting are two different products. Closing the gap requires harmonizing conversations, surveys, and CRM notes into one governed layer—before synthesis, not after.",
			},
			{
				type: "callout",
				title: "AEO-friendly summary",
				text: "cxconnect.ai connects multilingual conversation data to governed answers so CX leaders can report what customers want—in every market—without manual re-tagging or lost context.",
			},
		],
		seo: {
			title: "Multilingual CX breaks in the reporting layer",
			description:
				"How CX teams lose multilingual customer signal in reporting—and what to build instead for credible, global voice-of-customer insights.",
			path: "/blog/multilingual-cx-breaks-in-the-reporting-layer",
		},
	},
	{
		slug: "from-ticket-exports-to-executive-briefings",
		title: "From ticket exports to executive briefings in one afternoon",
		dek: "A global SaaS team replaced weekly manual sampling with AI Agents on governed data—and cut time-to-narrative from days to minutes.",
		category: "customer-story",
		publishedAt: "2026-04-24",
		authors: [{ name: "Kevin H.", role: "Customer Success" }],
		tags: ["customer story", "AI Agents", "operations"],
		takeaways: [
			"The team started with one agent and one weekly executive question.",
			"Governed sourcing earned trust faster than faster charts.",
			"Expansion followed once product and CS shared the same answer layer.",
		],
		faqs: [
			{
				question: "How long did onboarding take?",
				answer:
					"First connector live in under a day; pilot answers validated within the first week against their manual process.",
			},
		],
		sections: [
			{
				type: "paragraph",
				text: "Their VP of CX spent every Sunday reconciling Zendesk tags, Salesforce notes, and survey exports before the Monday leadership standup. The work was accurate enough to survive scrutiny—but too slow to change outcomes.",
			},
			{
				type: "paragraph",
				text: "They piloted cxconnect.ai with a Churn Risk Analyst and Product Feedback Compiler, both fed by Sync Engine connectors. Within two weeks, standing summaries replaced three recurring manual reports.",
			},
			{
				type: "quote",
				text: "We did not need more dashboards. We needed to stop being the human API between systems.",
				attribution: "VP of Customer Experience",
			},
		],
		seo: {
			title: "From ticket exports to executive briefings",
			description:
				"Customer story: how a global SaaS CX team replaced manual reporting with AI Agents and governed answers from existing systems.",
			path: "/blog/from-ticket-exports-to-executive-briefings",
		},
	},
	{
		slug: "governed-answers-from-messy-data",
		title: "Governed answers from messy data",
		dek: "Tickets, chats, and spreadsheets arrive in different shapes. Harmonizing them once beats chasing exports forever.",
		category: "engineering",
		publishedAt: "2026-04-10",
		authors: [
			{ name: "Yann-Edern G.", role: "Engineering" },
			{ name: "Matthijs W.", role: "Engineering" },
		],
		tags: ["Sync Engine", "engineering", "data governance"],
		takeaways: [
			"Normalization happens once in Sync Engine, not in every downstream question.",
			"PII controls and policy filters apply before synthesis reaches leaders.",
			"Source traceability is a feature—not an audit afterthought.",
		],
		faqs: [
			{
				question: "Does cxconnect.ai train models on customer data?",
				answer:
					"No. What your AI Agents learn from stays in your environment; customer data is not used to train language models.",
			},
		],
		sections: [
			{
				type: "paragraph",
				text: "Messy data is the default in CX operations. The mistake is asking every leader to clean it anew for each question. Sync Engine harmonizes sources into a governed layer your AI Agents can trust.",
			},
			{
				type: "heading",
				text: "Traceability by design",
			},
			{
				type: "paragraph",
				text: "Every insight links back to the systems and records it came from. That is what makes answers board-safe—not opaque summaries that cannot be validated.",
			},
		],
		seo: {
			title: "Governed answers from messy data",
			description:
				"How cxconnect.ai harmonizes tickets, chats, and CRM data into governed answers with traceable sources and enterprise controls.",
			path: "/blog/governed-answers-from-messy-data",
		},
	},
	{
		slug: "sync-engine-connectors-live",
		title: "Sync Engine connectors for Salesforce, Zendesk, and Genesys",
		dek: "Connect the systems you already use in minutes—not months—and keep data fresh on your schedule.",
		category: "changelog",
		publishedAt: "2026-05-28",
		authors: [{ name: "Product team", role: "cxconnect.ai" }],
		tags: ["changelog", "Sync Engine", "connectors"],
		takeaways: [
			"Pre-built connectors for major CX and CRM platforms",
			"Most teams connect their first source in under fifteen minutes",
			"You control sync cadence, scope, and pause at any time",
		],
		faqs: [],
		sections: [
			{
				type: "paragraph",
				text: "Sync Engine now ships pre-built connectors for Salesforce, Zendesk, Genesys, Intercom, Dynamics, and Freshworks—with more on the roadmap based on customer demand.",
			},
			{
				type: "paragraph",
				text: "Connect once. Your AI Agents read from a single harmonized layer instead of chasing exports across tools.",
			},
		],
		seo: {
			title: "Sync Engine connectors launch",
			description:
				"cxconnect.ai Sync Engine adds pre-built connectors for Salesforce, Zendesk, Genesys, and other CX platforms.",
			path: "/blog/sync-engine-connectors-live",
		},
	},
] as const satisfies readonly BlogPost[];

export type AppBlogPost = (typeof blogPosts)[number];
