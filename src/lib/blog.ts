import type { BlogPost, BlogPostSection } from "#/content/blog/types.ts";

export function formatBlogDate(iso: string) {
	const date = new Date(iso);
	if (Number.isNaN(date.getTime())) return iso;

	return date.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});
}

export function formatBlogDateLong(iso: string) {
	const date = new Date(iso);
	if (Number.isNaN(date.getTime())) return iso;

	return date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}

export function getBlogPostsSorted(posts: readonly BlogPost[]) {
	return [...posts].sort(
		(a, b) =>
			new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
	);
}

export function getBlogPostBySlug(
	posts: readonly BlogPost[],
	slug: string,
): BlogPost | undefined {
	return posts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(
	posts: readonly BlogPost[],
	currentSlug: string,
	limit = 3,
) {
	const current = getBlogPostBySlug(posts, currentSlug);
	if (!current) return [];

	return getBlogPostsSorted(posts)
		.filter((post) => post.slug !== currentSlug)
		.filter(
			(post) =>
				post.category === current.category ||
				post.tags.some((tag) => current.tags.includes(tag)),
		)
		.slice(0, limit);
}

export function blogPostPath(slug: string) {
	return `/blog/${slug}`;
}

export function blogAuthorLine(post: BlogPost) {
	if (post.authors.length === 1) {
		return post.authors[0].name;
	}

	return `${post.authors[0].name} + ${post.authors.length - 1} more`;
}

export function blogSectionToPlainText(section: BlogPostSection) {
	switch (section.type) {
		case "paragraph":
			return section.text;
		case "heading":
			return section.text;
		case "list":
			return section.items.join(" ");
		case "quote":
			return `${section.text} ${section.attribution ?? ""}`.trim();
		case "callout":
			return `${section.title ?? ""} ${section.text}`.trim();
		default:
			return "";
	}
}

export function blogPostPlainText(post: BlogPost) {
	return [
		post.dek,
		...post.sections.map(blogSectionToPlainText),
		...post.faqs.map((faq) => `${faq.question} ${faq.answer}`),
	].join("\n\n");
}

export function estimateReadingTimeMinutes(text: string) {
	const words = text.trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.ceil(words / 220));
}

export function getBlogPostReadingTime(post: BlogPost) {
	return estimateReadingTimeMinutes(blogPostPlainText(post));
}

export function blogCategoryLabel(category: BlogPost["category"]) {
	const labels: Record<BlogPost["category"], string> = {
		product: "Product",
		engineering: "Engineering",
		"customer-story": "Customer story",
		insights: "Insights",
		changelog: "Changelog",
		press: "Press",
	};
	return labels[category];
}

export function blogCategoryEyebrow(category: BlogPost["category"]) {
	if (category === "customer-story") return "Customer story";
	if (category === "changelog") return "Changelog";
	if (category === "press") return "Press";
	return blogCategoryLabel(category);
}
