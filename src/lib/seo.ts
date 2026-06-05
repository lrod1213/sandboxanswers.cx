import { siteConfig } from "#/config/site.ts";
import type { PageSeoContent } from "#/content/types.ts";

export type PageSeo = {
	title?: string;
	description?: string;
	path?: string;
	image?: string;
	noIndex?: boolean;
};

export function pageTitle(title?: string) {
	if (!title) return siteConfig.tagline;
	return `${title} | ${siteConfig.name}`;
}

export function createPageMeta({
	title,
	description,
	path = "",
	image,
	noIndex = false,
}: PageSeo) {
	const fullTitle = pageTitle(title);
	const desc = description ?? siteConfig.description;
	const url = `${siteConfig.url}${path}`;
	const ogImage = image ?? siteConfig.ogImage;

	const meta = [
		{ title: fullTitle },
		{ name: "description", content: desc },
		{ property: "og:title", content: fullTitle },
		{ property: "og:description", content: desc },
		{ property: "og:url", content: url },
		{ property: "og:type", content: "website" },
		{ property: "og:image", content: ogImage },
		{ property: "og:site_name", content: siteConfig.name },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: fullTitle },
		{ name: "twitter:description", content: desc },
		{ name: "twitter:image", content: ogImage },
	];

	if (noIndex) {
		meta.push({ name: "robots", content: "noindex, nofollow" });
	}

	return meta;
}

export function createPageHead(options: PageSeo) {
	const path = options.path ?? "";
	const url = `${siteConfig.url}${path}`;

	return {
		meta: createPageMeta(options),
		links: [{ rel: "canonical", href: url }],
	};
}

export function createPageHeadFromContent(seo: PageSeoContent) {
	return createPageHead({
		title: seo.title,
		description: seo.description,
		path: seo.path,
		noIndex: seo.noIndex,
	});
}
