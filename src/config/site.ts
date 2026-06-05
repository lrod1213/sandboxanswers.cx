export const siteConfig = {
	name: "cxconnect.ai",
	legalName: "ChatLingual, Inc. dba cxconnect.ai",
	tagline: "The Answer Layer. Now for CX Leaders",
	description:
		"Real-time AI insights for CX leaders. Unlock the voices of your customers across every channel and language.",
	url: "https://cxconnect.ai",
	ogImage:
		"https://framerusercontent.com/assets/dZMgakQ7KiG0IyISfdhrkTD8f8I.png",
	docsUrl: "https://docs.cxconnect.ai",
	statusUrl: "https://status.cxconnect.ai",
	trustCenterUrl: "https://trust.cxconnect.ai",
} as const;

export type NavLink = {
	label: string;
	href: string;
	external?: boolean;
	disabled?: boolean;
};

export const primaryCta = {
	label: "See it in action",
	href: "/contact",
} as const;

export const solutionsLinks: NavLink[] = [
	{ label: "The Answer Layer", href: "/theanswerlayer" },
	{ label: "Hire your AI team", href: "/hire-your-team" },
	{ label: "Real-time Translations", href: "/translations" },
	{ label: "Languages", href: "/languages" },
];

export const resourcesLinks: NavLink[] = [
	{ label: "Case Studies", href: "/case-studies", disabled: true },
	{ label: "Documentation", href: siteConfig.docsUrl, external: true },
];

export const footerColumns = {
	product: [
		{ label: "The Answer Layer", href: "/theanswerlayer" },
		{ label: "Hire your AI team", href: "/hire-your-team" },
		{ label: "Real-time Translations", href: "/translations" },
		{ label: "Data Connectors", href: "/data-connectors" },
	],
	company: [
		{ label: "About", href: "/about" },
		{ label: "Contact Us", href: "/contact" },
	],
	resources: [
		{ label: "Case Studies", href: "/case-studies", disabled: true },
		{ label: "Documentation", href: siteConfig.docsUrl, external: true },
	],
	legal: [
		{ label: "Terms of service", href: "/legal/terms-of-service" },
		{ label: "Privacy policy", href: "/legal/privacy-policy" },
		{ label: "System Status", href: siteConfig.statusUrl, external: true },
	],
} as const;

export const mvpRoutes = [
	"/",
	"/hire-your-team",
	"/theanswerlayer",
	"/translations",
	"/languages",
	"/data-connectors",
	"/about",
	"/contact",
	"/legal/terms-of-service",
	"/legal/privacy-policy",
] as const;
