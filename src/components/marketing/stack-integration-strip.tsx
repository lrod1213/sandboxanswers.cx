import { GraduationCap, ImageIcon, Wrench, Zap } from "lucide-react";

import { SectionBand } from "#/components/marketing/section-band.tsx";
import type { StackIntegrationContent } from "#/content/ai-assistants-team.ts";
import { cn } from "#/lib/utils.ts";

type StackIntegrationStripProps = {
	content: StackIntegrationContent;
	className?: string;
};

const stepIcons = [Wrench, Zap, GraduationCap] as const;

export function StackIntegrationStrip({
	content,
	className,
}: StackIntegrationStripProps) {
	return (
		<SectionBand className={className}>
			<div className="mx-auto max-w-3xl text-center">
				<p className="section-eyebrow mb-4">{content.eyebrow}</p>
				<h2 className="text-display-lg">{content.title}</h2>
				<p className="mx-auto mt-5 max-w-2xl text-body-lg text-body">
					{content.description}
				</p>
			</div>

			<div className="mx-auto mt-10 max-w-4xl md:mt-12">
				<ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
					{content.connectors.map((connector) => (
						<li
							key={connector.name}
							className="flex h-20 items-center justify-center gap-2.5 rounded-[var(--rounded-md)] border border-hairline bg-canvas px-4 shadow-[var(--shadow-inset)]"
						>
							{connector.logo ? (
								<img
									src={connector.logo}
									alt={connector.name}
									className="max-h-8 w-auto max-w-[140px] object-contain"
									loading="lazy"
									decoding="async"
								/>
							) : (
								<>
									<span
										className="inline-flex size-8 shrink-0 items-center justify-center rounded-[var(--rounded-sm)] border border-dashed border-hairline-strong/70 text-mute"
										aria-hidden
									>
										<ImageIcon className="size-4" />
									</span>
									<span className="text-body-sm-strong text-body">
										{connector.name}
									</span>
								</>
							)}
						</li>
					))}
				</ul>
				<p className="mt-4 text-center text-caption text-mute">
					{content.connectorNote}
				</p>
			</div>

			<div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:gap-5 md:mt-14 md:grid-cols-3">
				{content.steps.map((step, index) => {
					const Icon = stepIcons[index] ?? Wrench;
					return (
						<div
							key={step.title}
							className={cn(
								"relative overflow-hidden rounded-[var(--rounded-md)] border border-hairline bg-canvas p-6 shadow-[var(--shadow-elev-2)]",
							)}
						>
							<span
								className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-link/40 to-transparent"
								aria-hidden
							/>
							<div className="mb-4 flex items-center gap-3">
								<span className="inline-flex size-10 shrink-0 items-center justify-center rounded-[var(--rounded-md)] border border-link/15 bg-link-bg-soft text-link">
									<Icon className="size-5" aria-hidden />
								</span>
								<span
									className="font-mono-caption text-mute"
									aria-hidden
								>
									{String(index + 1).padStart(2, "0")}
								</span>
							</div>
							<h3 className="text-body-md-strong mb-2 text-ink">{step.title}</h3>
							<p className="text-body-sm leading-relaxed text-body">
								{step.description}
							</p>
						</div>
					);
				})}
			</div>
		</SectionBand>
	);
}
