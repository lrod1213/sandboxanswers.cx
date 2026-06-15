import { createFileRoute, notFound } from "@tanstack/react-router";

import { BlogPostPage } from "#/components/pages/blog-post-page.tsx";
import { ArticleJsonLd } from "#/components/seo/article-json-ld.tsx";
import { blogPosts } from "#/content/blog/posts.ts";
import { getBlogPostBySlug } from "#/lib/blog.ts";
import { createArticleHeadFromPost } from "#/lib/seo.ts";

export const Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = getBlogPostBySlug(blogPosts, params.slug);
		if (!post) {
			throw notFound();
		}
		return { post };
	},
	head: ({ loaderData }) => {
		if (!loaderData?.post) {
			return createArticleHeadFromPost({
				title: "Post not found",
				description: "This article could not be found.",
				path: "/blog",
				noIndex: true,
			});
		}

		return createArticleHeadFromPost(loaderData.post.seo);
	},
	component: BlogPostRoute,
});

function BlogPostRoute() {
	const { post } = Route.useLoaderData();

	return (
		<>
			<ArticleJsonLd post={post} />
			<BlogPostPage post={post} />
		</>
	);
}
