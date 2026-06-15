export type NavLink = {
	label: string;
	href: string;
	external?: boolean;
	disabled?: boolean;
};

export type PageNavGroup =
	| "solutions"
	| "integrations"
	| "resources"
	| "company"
	| "legal"
	| "utility";

export type PageDefinition = {
	path: string;
	label: string;
	navGroup?: PageNavGroup;
	sitemap?: boolean;
	contactInterest?: string;
	noIndex?: boolean;
	external?: boolean;
	disabled?: boolean;
};

const DOCS_URL = "https://docs.cxconnect.ai";

export const pages = [
	{
		path: "/",
		label: "Home",
		sitemap: true,
	},
	{
		path: "/theanswerlayer",
		label: "The Answer Layer",
		navGroup: "solutions",
		sitemap: true,
		contactInterest: "The Answer Layer",
	},
	{
		path: "/hire-your-team",
		label: "Hire your AI team",
		navGroup: "solutions",
		sitemap: true,
	},
	{
		path: "/translations",
		label: "Real-time Translations",
		navGroup: "solutions",
		sitemap: true,
		contactInterest: "Real-time Translations",
	},
	{
		path: "/languages",
		label: "Languages",
		navGroup: "solutions",
		sitemap: true,
	},
	{
		path: "/data-connectors",
		label: "Connectors",
		navGroup: "integrations",
		sitemap: true,
		contactInterest: "Data Connectors",
	},
	{
		path: "/about",
		label: "About Us",
		navGroup: "company",
		sitemap: true,
	},
	{
		path: "/contact",
		label: "Contact Us",
		navGroup: "company",
		sitemap: true,
	},
	{
		path: "/pricing",
		label: "Pricing",
		navGroup: "company",
		sitemap: true,
		contactInterest: "Pricing",
	},
	{
		path: "/success",
		label: "Thank you",
		noIndex: true,
	},
	{
		path: "/legal/terms-of-service",
		label: "Terms of service",
		navGroup: "legal",
		sitemap: true,
	},
	{
		path: "/legal/privacy-policy",
		label: "Privacy policy",
		navGroup: "legal",
		sitemap: true,
	},
	{
		path: "/case-studies",
		label: "Case Studies",
		navGroup: "resources",
		disabled: true,
	},
	{
		path: "/blog",
		label: "Now",
		navGroup: "resources",
		sitemap: true,
	},
	{
		path: DOCS_URL,
		label: "Documentation",
		navGroup: "resources",
		external: true,
	},
] as const satisfies readonly PageDefinition[];

export type AppPage = (typeof pages)[number];

function toNavLink(page: PageDefinition): NavLink {
	return {
		label: page.label,
		href: page.path,
		external: page.external,
		disabled: page.disabled,
	};
}

export const solutionsLinks: NavLink[] = pages
	.filter((page) => page.navGroup === "solutions")
	.map(toNavLink);

export const integrationsLinks: NavLink[] = pages
	.filter((page) => page.navGroup === "integrations")
	.map(toNavLink);

export const resourcesLinks: NavLink[] = pages
	.filter((page) => page.navGroup === "resources")
	.map(toNavLink);

export const companyLinks: NavLink[] = pages
	.filter((page) => page.navGroup === "company")
	.map(toNavLink);

export const legalLinks: NavLink[] = pages
	.filter((page) => page.navGroup === "legal")
	.map(toNavLink);

export const footerColumns = {
	product: pages
		.filter((page) =>
			[
				"/theanswerlayer",
				"/hire-your-team",
				"/translations",
				"/data-connectors",
			].includes(page.path),
		)
		.map(toNavLink),
	company: companyLinks,
	resources: resourcesLinks,
	legal: legalLinks,
} as const;

export const contactInterestOptions = [
	...pages
		.filter((page) => page.contactInterest)
		.map((page) => page.contactInterest as string),
	"General inquiry",
] as const;

export const sitemapPaths = pages
	.filter((page) => page.sitemap)
	.map((page) => page.path);

export const primaryCta = {
	label: "See it in action",
	href: "/contact",
} as const;
