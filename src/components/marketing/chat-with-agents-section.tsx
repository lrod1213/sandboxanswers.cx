import { Link } from "@tanstack/react-router";
import { MessageSquare, Sparkles } from "lucide-react";

import { ChatWithSpecialistsGraphic } from "#/components/marketing/chat-with-specialists-graphic.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { Button } from "#/components/ui/button.tsx";
import type { ChatWithAgentsContent } from "#/content/ai-assistants-team.ts";

type ChatWithAgentsSectionProps = {
	content: ChatWithAgentsContent;
	className?: string;
};

export function ChatWithAgentsSection({
	content,
	className,
}: ChatWithAgentsSectionProps) {
	return (
		<SectionBand className={className}>
			<div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
				<ChatWithSpecialistsGraphic className="order-2 w-full lg:order-1" />
				<div className="order-1 lg:order-2">
					<p className="section-eyebrow mb-4">{content.eyebrow}</p>
					<h2 className="text-display-lg mb-5">{content.title}</h2>
					<p className="text-body-lg mb-7 text-body">{content.lead}</p>
					<div className="space-y-3">
						{content.examples.map((example) => (
							<div
								key={example.question}
								className="rounded-[var(--rounded-md)] border border-hairline bg-canvas p-4 shadow-[var(--shadow-inset)]"
							>
								<span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-link/15 bg-link-bg-soft px-2.5 py-0.5 text-caption text-link">
									<Sparkles className="size-3" aria-hidden />
									{example.role}
								</span>
								<p className="flex items-start gap-2 text-body-md text-ink">
									<MessageSquare
										className="mt-1 size-4 shrink-0 text-mute"
										aria-hidden
									/>
									&ldquo;{example.question}&rdquo;
								</p>
							</div>
						))}
					</div>
					<div className="mt-8">
						<Button asChild size="lg">
							<Link to={content.cta.href}>{content.cta.label}</Link>
						</Button>
					</div>
				</div>
			</div>
		</SectionBand>
	);
}
