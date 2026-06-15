import type { PageSeoContent } from "#/content/types.ts";

export type BlogCategory =
	| "product"
	| "engineering"
	| "customer-story"
	| "insights"
	| "changelog"
	| "press";

export type BlogAuthor = {
	name: string;
	role?: string;
};

export type BlogFaq = {
	question: string;
	answer: string;
};

export type BlogPostSection =
	| { type: "paragraph"; text: string }
	| { type: "heading"; text: string }
	| { type: "list"; items: string[] }
	| { type: "quote"; text: string; attribution?: string }
	| {
			type: "callout";
			title?: string;
			text: string;
	  };

export type BlogPost = {
	slug: string;
	title: string;
	dek: string;
	category: BlogCategory;
	publishedAt: string;
	updatedAt?: string;
	authors: BlogAuthor[];
	tags: string[];
	heroImage?: string;
	sections: BlogPostSection[];
	faqs: BlogFaq[];
	takeaways: string[];
	seo: PageSeoContent;
};

export type BlogIndexContent = {
	seo: PageSeoContent;
	title: string;
	lead: string;
};

export type BlogChangelogEntry = {
	slug: string;
	title: string;
	summary: string;
	publishedAt: string;
};

export type BlogPressEntry = {
	title: string;
	outlet: string;
	publishedAt: string;
	href: string;
};
