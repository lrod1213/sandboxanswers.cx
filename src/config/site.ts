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

export {
	companyLinks,
	contactInterestOptions,
	footerColumns,
	integrationsLinks,
	legalLinks,
	pages,
	primaryCta,
	resourcesLinks,
	sitemapPaths,
	solutionsLinks,
} from "#/config/pages.ts";
