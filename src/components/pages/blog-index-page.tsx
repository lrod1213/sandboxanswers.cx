import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { BlogPostCard } from "#/components/blog/blog-post-card.tsx";
import { MarketingHero } from "#/components/marketing/marketing-hero.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import {
	blogChangelogEntries,
	blogIndexContent,
	blogPosts,
	blogPressEntries,
} from "#/content/blog/posts.ts";
import {
	blogPostPath,
	formatBlogDate,
	getBlogPostsSorted,
} from "#/lib/blog.ts";

const INITIAL_ARCHIVE_COUNT = 8;

export function BlogIndexPage() {
	const [query, setQuery] = useState("");
	const [visibleArchiveCount, setVisibleArchiveCount] =
		useState(INITIAL_ARCHIVE_COUNT);

	const sortedPosts = useMemo(() => getBlogPostsSorted(blogPosts), []);

	const filteredPosts = useMemo(() => {
		const normalized = query.trim().toLowerCase();
		if (!normalized) return sortedPosts;

		return sortedPosts.filter((post) => {
			const haystack = [
				post.title,
				post.dek,
				post.tags.join(" "),
				post.authors.map((author) => author.name).join(" "),
			]
				.join(" ")
				.toLowerCase();

			return haystack.includes(normalized);
		});
	}, [query, sortedPosts]);

	const featuredPosts = filteredPosts.filter(
		(post) => post.category !== "changelog" && post.category !== "press",
	);
	const archivePosts = filteredPosts.filter(
		(post) => post.category !== "changelog",
	);
	const visibleArchive = archivePosts.slice(0, visibleArchiveCount);

	return (
		<>
			<MarketingHero
				variant="centered"
				eyebrow="Now"
				title={blogIndexContent.title}
				lead={blogIndexContent.lead}
				actions={
					<label className="relative mx-auto mt-8 block max-w-md">
						<span className="sr-only">Search posts</span>
						<Search
							className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-body"
							aria-hidden
						/>
						<input
							type="search"
							value={query}
							onChange={(event) => {
								setQuery(event.target.value);
								setVisibleArchiveCount(INITIAL_ARCHIVE_COUNT);
							}}
							placeholder="Search…"
							className="w-full rounded-[var(--rounded-md)] border border-hairline bg-canvas py-3 pr-4 pl-11 text-body-md text-ink shadow-[var(--shadow-inset)] outline-none transition-colors placeholder:text-mute focus:border-primary/35 focus:ring-[3px] focus:ring-ring/30"
						/>
					</label>
				}
			/>

			<SectionBand>
				<div className="mx-auto max-w-3xl">
					{featuredPosts.length > 0 ? (
						featuredPosts.slice(0, 6).map((post) => (
							<BlogPostCard key={post.slug} post={post} variant="featured" />
						))
					) : (
						<p className="text-body-lg text-body">
							No posts match your search. Try a different keyword.
						</p>
					)}
				</div>
			</SectionBand>

			<SectionBand variant="soft">
				<div className="mx-auto max-w-3xl">
					<p className="section-eyebrow mb-6">Changelog</p>
					<ul className="divide-y divide-hairline rounded-[var(--rounded-lg)] border border-hairline bg-canvas">
						{blogChangelogEntries.map((entry) => (
							<li key={entry.slug}>
								<Link
									to={blogPostPath(entry.slug)}
									className="block px-6 py-5 transition-colors hover:bg-canvas-soft"
								>
									<h3 className="text-body-md-strong mb-2 text-ink">
										{entry.title}
									</h3>
									<p className="text-body-sm mb-3 text-body">{entry.summary}</p>
									<p className="font-mono text-caption text-body">
										{formatBlogDate(entry.publishedAt)}
									</p>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</SectionBand>

			<SectionBand>
				<div className="mx-auto max-w-3xl">
					<p className="section-eyebrow mb-6">Press</p>
					<ul className="space-y-4">
						{blogPressEntries.map((entry) => (
							<li key={entry.title}>
								<a
									href={entry.href}
									target="_blank"
									rel="noopener noreferrer"
									className="group flex flex-col gap-1 border-b border-hairline py-4 sm:flex-row sm:items-baseline sm:justify-between"
								>
									<span className="text-body-md-strong text-ink group-hover:text-link">
										{entry.title}
									</span>
									<span className="font-mono text-caption text-body">
										{entry.outlet} · {formatBlogDate(entry.publishedAt)} ↗
									</span>
								</a>
							</li>
						))}
					</ul>
				</div>
			</SectionBand>

			<SectionBand variant="soft">
				<div className="mx-auto max-w-3xl">
					<p className="section-eyebrow mb-6">Archive</p>
					<div>
						{visibleArchive.map((post) => (
							<BlogPostCard
								key={post.slug}
								post={post}
								variant="archive"
							/>
						))}
					</div>
					{visibleArchiveCount < archivePosts.length ? (
						<div className="mt-8 text-center">
							<button
								type="button"
								onClick={() =>
									setVisibleArchiveCount((count) => count + INITIAL_ARCHIVE_COUNT)
								}
								className="text-body-md-strong text-link transition-colors hover:text-link-deep"
							>
								Load more
							</button>
						</div>
					) : null}
				</div>
			</SectionBand>
		</>
	);
}
