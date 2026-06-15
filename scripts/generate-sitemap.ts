import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { blogPosts } from "../src/content/blog/posts.ts";
import { sitemapPaths } from "../src/config/pages.ts";
import { siteConfig } from "../src/config/site.ts";

const blogPaths = blogPosts.map((post) => `/blog/${post.slug}`);

const allPaths = [...sitemapPaths, ...blogPaths];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths
	.map((path) => `  <url><loc>${siteConfig.url}${path}</loc></url>`)
	.join("\n")}
</urlset>
`;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
writeFileSync(join(root, "public/sitemap.xml"), xml);
