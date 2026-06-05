import type { ComparisonRow } from "#/components/marketing/comparison-table.tsx";
import type { FaqItem } from "#/components/marketing/faq-accordion.tsx";

export const heroRotatingLines = [
	"why they are churning",
	"what they want to buy",
	"about the product friction",
	"where your gaps are",
];

export const insightFeatures = [
	{
		title: "Deeper insights",
		description:
			"Move beyond surface-level KPIs to understand what your customers are really saying about your products and services.",
	},
	{
		title: "Your competitive edge is hiding in your conversations.",
		description: "We unlock it.",
		highlight: true,
	},
	{
		title: "Data insights",
		description:
			"Make smarter, more informed decisions with powerful and actionable data insights, designed to empower your business with the tools needed to drive growth, efficiency, and success.",
	},
];

export type PersonaTab = {
	id: string;
	label: string;
	salutation: string;
	body: string;
};

export const personaTabs: PersonaTab[] = [
	{
		id: "customer-service",
		label: "Customer Service",
		salutation: "Dear Customer Service teams,",
		body: "You have more, better data about the lifeblood of your business than anyone in the organization. Now, we are making it easier and faster to get to the details that matter more. Deliver the insights your leaders need without becoming a human pivot table.",
	},
	{
		id: "product",
		label: "Product",
		salutation: "Dear Product teams,",
		body: "Find out exactly what customers are saying about your products, service, competitors, policies, and support. One truth, easily accessible company-wide.",
	},
	{
		id: "revenue",
		label: "Revenue",
		salutation: "Dear Revenue teams,",
		body: "Understand what really matters in your business. Move from reactive reporting to proactive answers that help you win and retain customers.",
	},
	{
		id: "compliance",
		label: "Compliance",
		salutation: "Dear Compliance teams,",
		body: "Get clarity across channels and languages with enterprise-grade privacy and security. Your data stays yours.",
	},
];

export const securityFeatures = [
	{
		title: "Your data is secured",
		description: "AES 256 bit encryption in transit and at rest.",
	},
	{
		title: "Privacy",
		description: "Enterprise-grade data privacy controls.",
	},
	{
		title: "Data Compliance",
		description: "Built for regulated industries and global teams.",
	},
];

export const comparisonRows: ComparisonRow[] = [
	{
		category: "Overview",
		answerLayer: "Overview",
		builtIn: "",
		traditional: "",
	},
	{
		category: "Purpose",
		answerLayer:
			"Built for words—the unstructured voices of your customers—and numbers",
		builtIn: "Built for numbers (e.g. call volume)",
		traditional: "Built for numbers (e.g. AHT by region)",
	},
	{
		category: "Ease of Use",
		answerLayer: "Designed for anyone who can talk or type",
		builtIn: "Weeks of training",
		traditional: "Months of training",
	},
	{
		category: "Getting Basic Answers",
		answerLayer: "Answers come to you in real-time",
		builtIn: "Hours of searching",
		traditional: "Days of back-and-forth emails",
	},
	{
		category: "Deep Analysis",
		answerLayer: "Insights in seconds",
		builtIn: "Not available",
		traditional: "Not available",
	},
	{
		category: "Examples",
		answerLayer: "Examples",
		builtIn: "",
		traditional: "",
	},
	{
		category: "Example question",
		answerLayer:
			'"What product issues are leading to the highest risk of churn today?"',
		builtIn: '"How many tickets did we have last month?"',
		traditional: '"How many tickets did we have last quarter in APAC?"',
	},
	{
		category: "Setup & Configuration",
		answerLayer: "Setup & Configuration",
		builtIn: "",
		traditional: "",
	},
	{
		category: "IT Setup Time",
		answerLayer: "15 Minutes",
		builtIn: "3-6 Months",
		traditional: "9-15 Months",
	},
	{
		category: "System Configuration",
		answerLayer: "2 hours gets you to 90%",
		builtIn: "3+ Months",
		traditional: "6+ Months",
	},
	{
		category: "Total Cost of Ownership",
		answerLayer: "Total Cost of Ownership",
		builtIn: "",
		traditional: "",
	},
	{
		category: "Price",
		answerLayer: "$",
		builtIn: "$$",
		traditional: "$$$$",
	},
	{
		category: "Ongoing Maintenance",
		answerLayer: "< 4 hours per month",
		builtIn: "1 full-time person",
		traditional: "Full-time staff (3+ people)",
	},
];

export const faqItems: FaqItem[] = [
	{
		question:
			"How is your approach different from legacy analytics / reporting tools?",
		answer:
			"The Answer Layer is built for the unstructured voices of your customers—not just ticket counts. Anyone who can talk or type can get real-time answers without weeks of training or report requests.",
	},
	{
		question: "Can we try your platform before committing?",
		answer:
			"Yes. Schedule a product tour and we will walk you through use cases with your team. Contact us to get started.",
	},
	{
		question: "Is my data safe with your platform?",
		answer:
			"Yes. We use AES-256 encryption in transit and at rest, enterprise-grade privacy controls, and compliance-ready practices. Visit our Trust Center for more detail.",
	},
	{
		question: 'What does "real-time AI Insights for CX" mean?',
		answer:
			"It means insights from customer conversations arrive as conversations happen—across channels and languages—so your team can act now, not after a quarterly report.",
	},
	{
		question: "Which platforms or tools do you integrate with?",
		answer:
			"We connect via APIs and native apps to platforms including Salesforce, Zendesk, Genesys, Freshworks, Intercom, Gorgias, and Microsoft Dynamics.",
	},
	{
		question: "Which channels do you support (e.g. chat, voice, email, etc.)?",
		answer:
			"We support the channels your stack already captures—typically chat, voice, email, and messaging—depending on your connected systems.",
	},
	{
		question: "What languages do you support?",
		answer:
			"Real-time translations and multilingual support cover 150+ languages for customer and agent experiences.",
	},
	{
		question: "What kind of customer support do you offer?",
		answer:
			"Our team partners with you on onboarding, configuration, and ongoing success—with dedicated support for enterprise customers.",
	},
];
