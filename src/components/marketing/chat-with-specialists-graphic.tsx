import { MessageSquare, Sparkles } from "lucide-react";

import { MarketingGraphicFrame } from "#/components/marketing/marketing-graphic-frame.tsx";
import { cn } from "#/lib/utils.ts";

type ChatWithSpecialistsGraphicProps = {
	className?: string;
};

const chatMock = {
	header: "Ask an Agent",
	activeSpecialist: "Churn Risk Analyst",
	question: "Which enterprise accounts are cooling off this month?",
	answerLead:
		"4 enterprise accounts show cooling signals in October conversation data:",
	accounts: [
		{ name: "Meridian Health", detail: "5 escalation mentions" },
		{ name: "Acme Corp", detail: "Repeated billing friction" },
		{ name: "Nordtek AS", detail: "NPS drop + support spike" },
	],
	themes: "onboarding delays, invoice timing",
	sources: ["Zendesk", "Salesforce", "Q3 sync"],
	responseTime: "2.4s",
} as const;

export function ChatWithSpecialistsGraphic({
	className,
}: ChatWithSpecialistsGraphicProps) {
	return (
		<div className={cn("relative w-full", className)}>
			<MarketingGraphicFrame
				ariaLabel="Chat interface showing a question answered by the Churn Risk Analyst agent"
			>
			<div className="flex min-h-0 flex-1 flex-col gap-2.5 p-3 sm:gap-3 sm:p-4">
				<div className="flex items-start justify-between gap-2">
					<div>
						<p className="text-[14px] font-semibold tracking-[-0.02em] text-white sm:text-[15px]">
							{chatMock.header}
						</p>
						<p className="mt-0.5 font-mono text-[9px] text-white/55 sm:text-[10px]">
							Role-specific answers · sourced from your data
						</p>
					</div>
					<span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-link/35 bg-link/15 px-2 py-1 text-[9px] font-medium text-link sm:text-[10px]">
						<Sparkles className="size-3" aria-hidden />
						{chatMock.activeSpecialist}
					</span>
				</div>

				<div className="rounded-[var(--rounded-sm)] border border-white/10 bg-black/25 px-2.5 py-2 sm:px-3 sm:py-2.5">
					<p className="font-mono text-[9px] text-white/45 sm:text-[10px]">You</p>
					<p className="mt-1 flex items-start gap-1.5 text-[10px] leading-snug text-white/90 sm:text-[11px]">
						<MessageSquare
							className="mt-0.5 size-3 shrink-0 text-cyan"
							aria-hidden
						/>
						&ldquo;{chatMock.question}&rdquo;
					</p>
				</div>

				<div className="min-h-0 flex-1 overflow-hidden rounded-[var(--rounded-sm)] border border-cyan/30 bg-cyan/5 px-2.5 py-2 shadow-[inset_3px_0_0_0_var(--cyan)] sm:px-3 sm:py-2.5">
					<div className="mb-1.5 flex items-center justify-between gap-2">
						<p className="text-[10px] font-semibold text-cyan sm:text-[11px]">
							{chatMock.activeSpecialist}
						</p>
						<p className="font-mono text-[9px] text-cyan/80">
							Answer · {chatMock.responseTime}
						</p>
					</div>
					<p className="text-[9px] leading-snug text-white/82 sm:text-[10px]">
						{chatMock.answerLead}
					</p>
					<ul className="mt-2 space-y-1">
						{chatMock.accounts.map((account) => (
							<li
								key={account.name}
								className="flex items-start justify-between gap-2 text-[9px] sm:text-[10px]"
							>
								<span className="text-white/88">{account.name}</span>
								<span className="shrink-0 font-mono text-[8px] text-white/55 sm:text-[9px]">
									{account.detail}
								</span>
							</li>
						))}
					</ul>
					<p className="mt-2 text-[8px] leading-relaxed text-white/55 sm:text-[9px]">
						Themes: {chatMock.themes}. Source: {chatMock.sources.join(" · ")}.
					</p>
				</div>

				<div className="flex flex-wrap gap-1.5">
					{["Revenue Scout", "Feedback Compiler", "Custom"].map((role, index) => (
						<span
							key={role}
							className={cn(
								"rounded-full border px-2 py-0.5 font-mono text-[8px] sm:text-[9px]",
								index === 0
									? "border-white/10 bg-white/5 text-white/45"
									: "border-white/10 bg-white/5 text-white/45",
							)}
						>
							{role}
						</span>
					))}
				</div>
			</div>
		</MarketingGraphicFrame>
		</div>
	);
}
