import { Link } from "@tanstack/react-router";
import { Check, Infinity as InfinityIcon } from "lucide-react";

import { CustomSpecialistBuilderGraphic } from "#/components/marketing/custom-specialist-builder-graphic.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { Button } from "#/components/ui/button.tsx";
import type { CustomAgentsContent } from "#/content/ai-assistants-team.ts";

type CustomAgentsSectionProps = {
	content: CustomAgentsContent;
	className?: string;
};

export function CustomAgentsSection({
	content,
	className,
}: CustomAgentsSectionProps) {
	return (
		<SectionBand variant="soft" className={className}>
			<div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
				<div>
					<p className="section-eyebrow mb-4">{content.eyebrow}</p>
					<h2 className="text-display-lg mb-5">{content.title}</h2>
					<p className="text-body-lg mb-8 text-body">{content.lead}</p>
					<ul className="mb-8 space-y-4">
						{content.points.map((point, index) => (
							<li key={point.title} className="flex gap-3.5">
								<span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-[var(--rounded-sm)] border border-link/15 bg-link-bg-soft text-link">
									{index === 0 ? (
										<InfinityIcon className="size-4" aria-hidden />
									) : (
										<Check className="size-4" aria-hidden />
									)}
								</span>
								<div>
									<p className="text-body-md-strong text-ink">{point.title}</p>
									<p className="mt-1 text-body-sm leading-relaxed text-body">
										{point.description}
									</p>
								</div>
							</li>
						))}
					</ul>
					<Button asChild size="lg">
						<Link to={content.cta.href}>{content.cta.label}</Link>
					</Button>
				</div>
				<CustomSpecialistBuilderGraphic className="w-full" />
			</div>
		</SectionBand>
	);
}
