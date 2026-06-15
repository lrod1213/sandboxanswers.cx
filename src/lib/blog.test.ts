import { describe, expect, it } from "vitest";

import { getSiteCtaBandCopy, siteCtaBandExperiment } from "#/config/experiments.ts";
import { blogPosts } from "#/content/blog/posts.ts";
import {
	getBlogPostBySlug,
	getBlogPostReadingTime,
	getBlogPostsSorted,
	getRelatedBlogPosts,
} from "#/lib/blog.ts";

describe("experiments config", () => {
	it("returns control copy for unknown variants", () => {
		expect(getSiteCtaBandCopy(undefined)).toEqual(
			siteCtaBandExperiment.variants.control,
		);
	});

	it("returns pilot-first copy when variant matches", () => {
		expect(getSiteCtaBandCopy("pilot-first")).toEqual(
			siteCtaBandExperiment.variants["pilot-first"],
		);
	});
});

describe("blog helpers", () => {
	it("sorts posts newest first", () => {
		const sorted = getBlogPostsSorted(blogPosts);
		expect(sorted[0]?.slug).toBe("the-answer-layer-before-the-dashboard");
	});

	it("finds posts by slug", () => {
		const post = getBlogPostBySlug(
			blogPosts,
			"hire-ai-specialists-not-another-chatbot",
		);
		expect(post?.title).toContain("AI Specialists");
	});

	it("estimates reading time", () => {
		const post = getBlogPostBySlug(
			blogPosts,
			"the-answer-layer-before-the-dashboard",
		);
		expect(post).toBeDefined();
		if (!post) return;
		expect(getBlogPostReadingTime(post)).toBeGreaterThan(0);
	});

	it("returns related posts in the same category or tags", () => {
		const related = getRelatedBlogPosts(
			blogPosts,
			"the-answer-layer-before-the-dashboard",
		);
		expect(related.length).toBeGreaterThan(0);
		expect(related.every((post) => post.slug !== "the-answer-layer-before-the-dashboard")).toBe(
			true,
		);
	});
});
