import { Link } from "@tanstack/react-router";

import type { BlogPost } from "#/content/blog/types.ts";
import {
	blogAuthorLine,
	blogCategoryEyebrow,
	blogPostPath,
	formatBlogDate,
	getBlogPostReadingTime,
} from "#/lib/blog.ts";
import { cn } from "#/lib/utils.ts";

type BlogPostCardProps = {
	post: BlogPost;
	variant?: "featured" | "compact" | "archive";
	className?: string;
};

export function BlogPostCard({
	post,
	variant = "featured",
	className,
}: BlogPostCardProps) {
	const readingTime = getBlogPostReadingTime(post);

	if (variant === "archive") {
		return (
			<Link
				to={blogPostPath(post.slug)}
				className={cn(
					"group flex flex-col gap-1 border-b border-hairline py-4 transition-colors hover:text-link sm:flex-row sm:items-baseline sm:justify-between",
					className,
				)}
			>
				<span className="text-body-md-strong text-ink group-hover:text-link">
					{post.title}
				</span>
				<span className="shrink-0 font-mono text-caption text-body">
					{blogAuthorLine(post)} · {formatBlogDate(post.publishedAt)}
				</span>
			</Link>
		);
	}

	if (variant === "compact") {
		return (
			<Link
				to={blogPostPath(post.slug)}
				className={cn(
					"group block rounded-[var(--rounded-md)] border border-hairline bg-canvas p-5 transition-all hover:-translate-y-0.5 hover:elev-3",
					className,
				)}
			>
				<p className="section-eyebrow mb-3">{blogCategoryEyebrow(post.category)}</p>
				<h3 className="text-display-sm mb-2 text-ink group-hover:text-link">
					{post.title}
				</h3>
				<p className="text-body-sm mb-4 line-clamp-2 text-body">{post.dek}</p>
				<p className="font-mono text-caption text-body">
					{blogAuthorLine(post)} · {formatBlogDate(post.publishedAt)} ·{" "}
					{readingTime} min read
				</p>
			</Link>
		);
	}

	return (
		<Link
			to={blogPostPath(post.slug)}
			className={cn(
				"group block border-b border-hairline py-8 first:pt-0 last:border-b-0 md:py-10",
				className,
			)}
		>
			<h2 className="text-display-lg mb-3 text-ink transition-colors group-hover:text-link md:text-[2.25rem] md:leading-[1.05] md:tracking-[-0.04em]">
				{post.title}
			</h2>
			<p className="mb-4 max-w-3xl text-body-lg text-body">{post.dek}</p>
			<p className="font-mono text-caption text-body">
				{blogAuthorLine(post)} · {formatBlogDate(post.publishedAt)} ·{" "}
				{readingTime} min read <span aria-hidden>→</span>
			</p>
		</Link>
	);
}
