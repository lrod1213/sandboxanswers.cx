import { siteConfig } from "#/config/site.ts";
import type { BlogPost } from "#/content/blog/types.ts";
import {
	blogAuthorLine,
	blogPostPlainText,
	blogPostPath,
	getBlogPostReadingTime,
} from "#/lib/blog.ts";

export function ArticleJsonLd({ post }: { post: BlogPost }) {
	const url = `${siteConfig.url}${blogPostPath(post.slug)}`;
	const wordCount = blogPostPlainText(post).trim().split(/\s+/).length;

	const articleJsonLd = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		description: post.dek,
		datePublished: post.publishedAt,
		dateModified: post.updatedAt ?? post.publishedAt,
		wordCount,
		timeRequired: `PT${getBlogPostReadingTime(post)}M`,
		inLanguage: "en-US",
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": url,
		},
		author: post.authors.map((author) => ({
			"@type": "Person",
			name: author.name,
			...(author.role ? { jobTitle: author.role } : {}),
		})),
		publisher: {
			"@type": "Organization",
			name: siteConfig.name,
			url: siteConfig.url,
		},
		keywords: post.tags.join(", "),
		articleSection: post.category,
	};

	const faqJsonLd =
		post.faqs.length > 0
			? {
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: post.faqs.map((faq) => ({
						"@type": "Question",
						name: faq.question,
						acceptedAnswer: {
							"@type": "Answer",
							text: faq.answer,
						},
					})),
				}
			: null;

	const payload = faqJsonLd ? [articleJsonLd, faqJsonLd] : articleJsonLd;

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD
			dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
		/>
	);
}

export function BlogIndexJsonLd() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Blog",
		name: "Now — cxconnect.ai",
		description:
			"Product updates, customer stories, and guidance on the answer layer for CX leaders.",
		url: `${siteConfig.url}/blog`,
		publisher: {
			"@type": "Organization",
			name: siteConfig.name,
			url: siteConfig.url,
		},
	};

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}
