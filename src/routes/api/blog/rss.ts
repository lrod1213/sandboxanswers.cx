import { createFileRoute } from "@tanstack/react-router";

import { blogPosts } from "#/content/blog/posts.ts";
import { getBlogPostsSorted } from "#/lib/blog.ts";
import { siteConfig } from "#/config/site.ts";

function escapeXml(value: string) {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&apos;");
}

export const Route = createFileRoute("/api/blog/rss")({
	server: {
		handlers: {
			GET: () => {
				const posts = getBlogPostsSorted(blogPosts).slice(0, 20);
				const items = posts
					.map((post) => {
						const url = `${siteConfig.url}/blog/${post.slug}`;
						return `<item>
  <title>${escapeXml(post.title)}</title>
  <link>${url}</link>
  <guid>${url}</guid>
  <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
  <description>${escapeXml(post.dek)}</description>
</item>`;
					})
					.join("\n");

				const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Now — ${escapeXml(siteConfig.name)}</title>
    <link>${siteConfig.url}/blog</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en-us</language>
    ${items}
  </channel>
</rss>`;

				return new Response(xml, {
					headers: {
						"Content-Type": "application/rss+xml; charset=utf-8",
						"Cache-Control": "public, max-age=3600",
					},
				});
			},
		},
	},
});
