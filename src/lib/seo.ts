import { siteConfig } from "#/config/site.ts";

export type PageSeo = {
	title?: string;
	description?: string;
	path?: string;
};

export function pageTitle(title?: string) {
	if (!title) return siteConfig.tagline;
	return `${title} | ${siteConfig.name}`;
}

export function createPageMeta({ title, description, path = "" }: PageSeo) {
	const fullTitle = pageTitle(title);
	const desc = description ?? siteConfig.description;
	const url = `${siteConfig.url}${path}`;

	return [
		{ title: fullTitle },
		{ name: "description", content: desc },
		{ property: "og:title", content: fullTitle },
		{ property: "og:description", content: desc },
		{ property: "og:url", content: url },
		{ property: "og:type", content: "website" },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: fullTitle },
		{ name: "twitter:description", content: desc },
	];
}
