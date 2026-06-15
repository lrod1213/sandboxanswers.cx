import { Link } from "@tanstack/react-router";

import { BlogPostBody } from "#/components/blog/blog-post-body.tsx";
import { BlogPostCard } from "#/components/blog/blog-post-card.tsx";
import { FaqAccordion } from "#/components/marketing/faq-accordion.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { Button } from "#/components/ui/button.tsx";
import type { BlogPost } from "#/content/blog/types.ts";
import {
	blogAuthorLine,
	blogCategoryEyebrow,
	formatBlogDateLong,
	getBlogPostReadingTime,
	getRelatedBlogPosts,
} from "#/lib/blog.ts";
import { blogPosts } from "#/content/blog/posts.ts";

type BlogPostPageProps = {
	post: BlogPost;
};

export function BlogPostPage({ post }: BlogPostPageProps) {
	const readingTime = getBlogPostReadingTime(post);
	const relatedPosts = getRelatedBlogPosts(blogPosts, post.slug);

	return (
		<>
			<SectionBand variant="hero" className="border-b border-hairline">
				<div className="mx-auto max-w-3xl">
					<Link
						to="/blog"
						className="mb-8 inline-flex text-body-sm text-body transition-colors hover:text-ink"
					>
						← Now
					</Link>
					<p className="section-eyebrow mb-4">
						{blogCategoryEyebrow(post.category)}
					</p>
					<h1 className="text-display-xl mb-6 max-w-4xl text-[2.25rem] leading-[1.02] tracking-[-0.05em] sm:text-[2.75rem] md:text-[3.25rem]">
						{post.title}
					</h1>
					<p className="text-body-lg mb-8 max-w-2xl text-body">{post.dek}</p>
					<p className="font-mono text-caption text-body">
						{blogAuthorLine(post)}
						{post.authors[0]?.role ? ` · ${post.authors[0].role}` : ""} ·{" "}
						{formatBlogDateLong(post.publishedAt)} · {readingTime} min read
					</p>
				</div>
			</SectionBand>

			<SectionBand>
				<article className="mx-auto max-w-3xl">
					{post.takeaways.length > 0 ? (
						<aside
							className="mb-12 rounded-[var(--rounded-lg)] border border-hairline bg-canvas-soft p-6 md:p-8"
							aria-labelledby="key-takeaways"
						>
							<h2
								id="key-takeaways"
								className="text-body-md-strong mb-4 text-ink"
							>
								Key takeaways
							</h2>
							<ul className="space-y-3">
								{post.takeaways.map((takeaway) => (
									<li
										key={takeaway}
										className="flex gap-3 text-body-md text-body"
									>
										<span
											className="mt-2 size-1.5 shrink-0 rounded-full bg-link"
											aria-hidden
										/>
										{takeaway}
									</li>
								))}
							</ul>
						</aside>
					) : null}

					<BlogPostBody post={post} />

					{post.tags.length > 0 ? (
						<div className="mt-12 flex flex-wrap gap-2 border-t border-hairline pt-8">
							{post.tags.map((tag) => (
								<span
									key={tag}
									className="rounded-full bg-canvas-soft px-3 py-1 font-mono text-caption text-body"
								>
									{tag}
								</span>
							))}
						</div>
					) : null}
				</article>
			</SectionBand>

			{post.faqs.length > 0 ? (
				<SectionBand variant="soft">
					<div className="mx-auto max-w-3xl">
						<p className="section-eyebrow mb-4">FAQ</p>
						<h2 className="text-display-lg mb-6">Common questions</h2>
						<FaqAccordion items={post.faqs} />
					</div>
				</SectionBand>
			) : null}

			{relatedPosts.length > 0 ? (
				<SectionBand>
					<div className="mx-auto max-w-5xl">
						<p className="section-eyebrow mb-6">Keep reading</p>
						<div className="grid gap-5 md:grid-cols-3">
							{relatedPosts.map((related) => (
								<BlogPostCard
									key={related.slug}
									post={related}
									variant="compact"
								/>
							))}
						</div>
					</div>
				</SectionBand>
			) : null}

			<SectionBand variant="soft">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-display-lg mb-4">
						See the answer layer on your data
					</h2>
					<p className="text-body-lg mb-8 text-body">
						Start with one question you already report manually—and compare the
						time side by side.
					</p>
					<Button asChild size="lg">
						<Link to="/contact">Talk to our team</Link>
					</Button>
				</div>
			</SectionBand>
		</>
	);
}
