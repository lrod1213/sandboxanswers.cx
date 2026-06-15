import type { BlogPost, BlogPostSection } from "#/content/blog/types.ts";

function BlogSection({ section }: { section: BlogPostSection }) {
	switch (section.type) {
		case "heading":
			return <h2 className="text-display-sm mt-12 mb-4">{section.text}</h2>;
		case "paragraph":
			return <p className="text-body-lg mb-6 text-body">{section.text}</p>;
		case "list":
			return (
				<ul className="mb-6 list-disc space-y-2 pl-5 text-body-lg text-body">
					{section.items.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			);
		case "quote":
			return (
				<blockquote className="my-10 border-l-2 border-primary/40 pl-6">
					<p className="text-display-sm mb-3 text-ink">{section.text}</p>
					{section.attribution ? (
						<cite className="text-body-sm not-italic text-body">
							{section.attribution}
						</cite>
					) : null}
				</blockquote>
			);
		case "callout":
			return (
				<aside className="my-8 rounded-[var(--rounded-md)] border border-hairline bg-canvas-soft p-6">
					{section.title ? (
						<p className="text-body-md-strong mb-2 text-ink">{section.title}</p>
					) : null}
					<p className="text-body-md text-body">{section.text}</p>
				</aside>
			);
		default:
			return null;
	}
}

type BlogPostBodyProps = {
	post: BlogPost;
};

export function BlogPostBody({ post }: BlogPostBodyProps) {
	return (
		<div className="blog-post-body">
			{post.sections.map((section, index) => (
				<BlogSection key={`${section.type}-${index}`} section={section} />
			))}
		</div>
	);
}
