import { Check, Infinity as InfinityIcon, Sparkles } from "lucide-react";

import { MarketingGraphicFrame } from "#/components/marketing/marketing-graphic-frame.tsx";
import { cn } from "#/lib/utils.ts";

type CustomSpecialistBuilderGraphicProps = {
	className?: string;
};

const builderMock = {
	header: "Build an Agent",
	subtitle: "Unique to your company · unlimited roles",
	roleName: "Enterprise Onboarding Watch",
	roleType: "Custom · Retention",
	knowledgeTags: ["Product catalog", "EMEA segments", "Onboarding policies"],
	questions: [
		"Which new logos are stalling in week one?",
		"Where is onboarding friction spiking?",
	],
	status: "Active",
	footnote: "Describe the role. Your agent starts working right away.",
} as const;

export function CustomSpecialistBuilderGraphic({
	className,
}: CustomSpecialistBuilderGraphicProps) {
	return (
		<div className={cn("relative w-full", className)}>
			<MarketingGraphicFrame
				ariaLabel="Custom AI Agent builder showing a company-specific onboarding watch role"
			>
			<div className="flex min-h-0 flex-1 flex-col gap-2.5 p-3 sm:gap-3 sm:p-4">
				<div className="flex items-start justify-between gap-2">
					<div>
						<p className="text-[14px] font-semibold tracking-[-0.02em] text-white sm:text-[15px]">
							{builderMock.header}
						</p>
						<p className="mt-0.5 font-mono text-[9px] text-white/55 sm:text-[10px]">
							{builderMock.subtitle}
						</p>
					</div>
					<span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-cyan/35 bg-cyan/15 px-2 py-1 text-[9px] font-medium text-cyan sm:text-[10px]">
						<span
							className="size-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--cyan)]"
							aria-hidden
						/>
						{builderMock.status}
					</span>
				</div>

				<div className="rounded-[var(--rounded-sm)] border border-link/35 bg-black/25 px-2.5 py-2 sm:px-3 sm:py-2.5">
					<p className="font-mono text-[8px] tracking-[0.12em] text-white/45 uppercase sm:text-[9px]">
						Role name
					</p>
					<p className="mt-1 text-[11px] font-semibold text-white sm:text-[12px]">
						{builderMock.roleName}
					</p>
					<p className="mt-1 inline-flex items-center gap-1 text-[9px] text-link sm:text-[10px]">
						<Sparkles className="size-3" aria-hidden />
						{builderMock.roleType}
					</p>
				</div>

				<div className="rounded-[var(--rounded-sm)] border border-white/10 bg-black/20 px-2.5 py-2 sm:px-3 sm:py-2.5">
					<p className="font-mono text-[8px] tracking-[0.12em] text-white/45 uppercase sm:text-[9px]">
						Trained on your world
					</p>
					<div className="mt-2 flex flex-wrap gap-1.5">
						{builderMock.knowledgeTags.map((tag) => (
							<span
								key={tag}
								className="rounded-full border border-violet/35 bg-violet/10 px-2 py-0.5 text-[8px] text-violet sm:text-[9px]"
							>
								{tag}
							</span>
						))}
					</div>
				</div>

				<div className="min-h-0 flex-1 overflow-hidden rounded-[var(--rounded-sm)] border border-warning/35 bg-black/20 px-2.5 py-2 shadow-[inset_3px_0_0_0_var(--warning)] sm:px-3 sm:py-2.5">
					<p className="font-mono text-[8px] tracking-[0.12em] text-white/45 uppercase sm:text-[9px]">
						Questions it owns
					</p>
					<ul className="mt-2 space-y-1.5">
						{builderMock.questions.map((question) => (
							<li
								key={question}
								className="flex items-start gap-1.5 text-[9px] leading-snug text-white/82 sm:text-[10px]"
							>
								<span className="text-warning" aria-hidden>
									›
								</span>
								{question}
							</li>
						))}
					</ul>
				</div>

				<div className="flex flex-wrap items-center gap-2">
					<span className="inline-flex items-center gap-1 rounded-full border border-link/30 bg-link/10 px-2 py-0.5 font-mono text-[8px] text-link sm:text-[9px]">
						<InfinityIcon className="size-3" aria-hidden />
						Unlimited agents
					</span>
					<span className="inline-flex items-center gap-1 rounded-full border border-green-500/30 bg-green-900/40 px-2 py-0.5 font-mono text-[8px] text-green-200 sm:text-[9px]">
						<Check className="size-3" aria-hidden />
						Live in minutes
					</span>
				</div>
			</div>
		</MarketingGraphicFrame>
		</div>
	);
}
