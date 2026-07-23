import { Quote } from "lucide-react";

import { SectionBand } from "#/components/marketing/section-band.tsx";
import type { SocialProofContent } from "#/content/ai-assistants-team.ts";
import { cn } from "#/lib/utils.ts";

type SocialProofSectionProps = {
	content: SocialProofContent;
	className?: string;
};

function getInitials(name: string) {
	const parts = name.trim().split(/\s+/).filter(Boolean);
	if (parts.length === 0) return "—";
	const letters = parts.slice(0, 2).map((part) => part[0]?.toUpperCase() ?? "");
	return letters.join("") || "—";
}

export function SocialProofSection({
	content,
	className,
}: SocialProofSectionProps) {
	const { quote } = content;

	return (
		<SectionBand variant="soft" className={className}>
			<div className="mx-auto max-w-3xl text-center">
				<p className="section-eyebrow mb-4">{content.eyebrow}</p>
				<h2 className="text-display-lg">{content.title}</h2>
			</div>

			<dl className="mx-auto mt-8 grid max-w-5xl gap-x-6 gap-y-8 sm:mt-12 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-hairline">
				{content.stats.map((stat) => (
					<div key={stat.label} className="text-center lg:px-6">
						<dd className="bg-[linear-gradient(120deg,var(--cyan),var(--cyan-deep))] bg-clip-text text-[2.5rem] font-semibold leading-none tracking-[-0.04em] text-transparent sm:text-[2.75rem]">
							{stat.value}
						</dd>
						<dt className="mx-auto mt-3 max-w-[12rem] text-body-sm text-body">
							{stat.label}
						</dt>
					</div>
				))}
			</dl>

			<figure className="mx-auto mt-10 max-w-3xl rounded-[var(--rounded-lg)] border border-hairline bg-canvas p-6 text-center shadow-[var(--shadow-elev-3)] sm:mt-14 sm:p-8 md:p-10">
				<Quote
					className="mx-auto mb-5 size-8 text-link/55"
					aria-hidden
				/>
				<blockquote className="text-display-sm font-medium text-balance text-ink">
					&ldquo;{quote.text}&rdquo;
				</blockquote>
				<figcaption className="mt-7 flex items-center justify-center gap-3">
					<span
						className={cn(
							"inline-flex size-11 shrink-0 items-center justify-center rounded-full",
							"bg-gradient-to-br from-link via-fuchsia-500 to-cyan-deep text-body-sm-strong text-white",
						)}
						aria-hidden
					>
						{getInitials(quote.name)}
					</span>
					<span className="text-left">
						<span className="block text-body-sm-strong text-ink">
							{quote.name}
						</span>
						<span className="block text-caption text-body">
							{quote.role}, {quote.company}
						</span>
					</span>
				</figcaption>
			</figure>
		</SectionBand>
	);
}
