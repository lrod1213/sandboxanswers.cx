import { createFileRoute } from "@tanstack/react-router";

import { BlogIndexPage } from "#/components/pages/blog-index-page.tsx";
import { BlogIndexJsonLd } from "#/components/seo/article-json-ld.tsx";
import { blogIndexContent } from "#/content/blog/posts.ts";
import { createPageHeadFromContent } from "#/lib/seo.ts";

export const Route = createFileRoute("/blog/")({
	head: () => ({
		...createPageHeadFromContent(blogIndexContent.seo),
		links: [
			...createPageHeadFromContent(blogIndexContent.seo).links,
			{
				rel: "alternate",
				type: "application/rss+xml",
				title: "cxconnect.ai Now",
				href: "/api/blog/rss",
			},
		],
	}),
	component: BlogIndexRoute,
});

function BlogIndexRoute() {
	return (
		<>
			<BlogIndexJsonLd />
			<BlogIndexPage />
		</>
	);
}
