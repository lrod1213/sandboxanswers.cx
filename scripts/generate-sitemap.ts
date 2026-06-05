import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { sitemapPaths } from "../src/config/pages.ts";
import { siteConfig } from "../src/config/site.ts";

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPaths
	.map((path) => `  <url><loc>${siteConfig.url}${path}</loc></url>`)
	.join("\n")}
</urlset>
`;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
writeFileSync(join(root, "public/sitemap.xml"), xml);
