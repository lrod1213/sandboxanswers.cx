export type Connector = {
	slug: string;
	name: string;
	description: string;
	category: "api" | "app";
};

export const apiConnectors: Connector[] = [
	{
		slug: "freshworks",
		name: "Freshworks",
		description:
			"Customer service, IT, and sales, aiming to be simple and user-friendly.",
		category: "api",
	},
	{
		slug: "genesys",
		name: "Genesys",
		description: "Customer experience and contact center management",
		category: "api",
	},
	{
		slug: "gorgias",
		name: "Gorgias",
		description:
			"Customer support helpdesk specifically for e-commerce businesses",
		category: "api",
	},
	{
		slug: "intercom",
		name: "Intercom",
		description: "Customer service platform for support and sales teams",
		category: "api",
	},
	{
		slug: "microsoftdynamics",
		name: "Dynamics",
		description:
			"Customer relationship management with a focus on sales, marketing, and service",
		category: "api",
	},
	{
		slug: "salesforce",
		name: "Salesforce",
		description:
			"Service Cloud for customer support via phone, email, live chat, and social media",
		category: "api",
	},
	{
		slug: "zendesk",
		name: "Zendesk",
		description: "Customer support platform for growing teams",
		category: "api",
	},
];

export const appConnectors: Connector[] = [
	{
		slug: "genesys",
		name: "App for Genesys",
		description:
			"We take the challenges out of managing multilingual customer support. Native-language service in 150+ languages—easy, cost-effective, and quick to scale.",
		category: "app",
	},
	{
		slug: "salesforce",
		name: "App for Salesforce",
		description:
			"72.4% of consumers said they would be more likely to buy a product with information in their own language.",
		category: "app",
	},
	{
		slug: "zendesk",
		name: "App for Zendesk",
		description:
			"72.4% of consumers said they would be more likely to buy a product with information in their own language.",
		category: "app",
	},
];
