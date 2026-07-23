import {
	Bot,
	Building2,
	GraduationCap,
	type LucideIcon,
	MessageSquare,
	ShieldCheck,
	Sparkles,
	TrendingDown,
	TrendingUp,
} from "lucide-react";

import { MarketingGraphicFrame } from "#/components/marketing/marketing-graphic-frame.tsx";
import { cn } from "#/lib/utils.ts";

type HireYourTeamHeroGraphicProps = {
	className?: string;
};

type RosterSpecialist = {
	id: string;
	title: string;
	role: string;
	enabled: boolean;
};

type LiveSignal = {
	specialist: string;
	text: string;
	accent: "cyan" | "pink" | "violet" | "amber";
};

const specialistIcons: Record<string, LucideIcon> = {
	revenue: TrendingUp,
	churn: TrendingDown,
	feedback: MessageSquare,
	accounts: Building2,
	compliance: ShieldCheck,
	cx: Sparkles,
	bot: Bot,
	coach: GraduationCap,
};

const rosterMock = {
	header: "Agent Roster",
	meta: "Your team · enable only what you need",
	enabledCount: 5,
	totalCount: 8,
	specialists: [
		{
			id: "revenue",
			title: "Revenue Opportunity Scout",
			role: "Growth & expansion",
			enabled: true,
		},
		{
			id: "churn",
			title: "Churn Risk Analyst",
			role: "Retention",
			enabled: true,
		},
		{
			id: "feedback",
			title: "Product Feedback Compiler",
			role: "Voice of customer",
			enabled: true,
		},
		{
			id: "accounts",
			title: "Key Account Watch",
			role: "Strategic accounts",
			enabled: true,
		},
		{
			id: "compliance",
			title: "Compliance & Policy Monitor",
			role: "Risk & governance",
			enabled: false,
		},
	] satisfies RosterSpecialist[],
	signals: [
		{
			specialist: "Revenue Scout",
			text: "3 expansion intents surfaced in Q3 conversations",
			accent: "cyan",
		},
		{
			specialist: "Churn Analyst",
			text: "EMEA onboarding risk rising since yesterday",
			accent: "pink",
		},
		{
			specialist: "Feedback Compiler",
			text: "Top theme: portal access delays across EMEA",
			accent: "violet",
		},
	] satisfies LiveSignal[],
} as const;

const signalAccentStyles = {
	cyan: {
		border: "border-cyan/30",
		dot: "bg-cyan shadow-[0_0_6px_var(--cyan)]",
		label: "text-cyan",
	},
	pink: {
		border: "border-highlight-pink/35",
		dot: "bg-highlight-pink shadow-[0_0_6px_var(--highlight-pink)]",
		label: "text-highlight-pink",
	},
	violet: {
		border: "border-link/35",
		dot: "bg-link shadow-[0_0_6px_var(--link)]",
		label: "text-link",
	},
	amber: {
		border: "border-warning/35",
		dot: "bg-warning shadow-[0_0_6px_var(--warning)]",
		label: "text-warning",
	},
} as const;

function ToggleIndicator({ on }: { on: boolean }) {
	return (
		<span
			className={cn(
				"relative inline-flex h-4 w-7 shrink-0 items-center rounded-full border",
				on ? "border-cyan/40 bg-cyan/30" : "border-white/15 bg-white/10",
			)}
			aria-hidden
		>
			<span
				className={cn(
					"inline-block size-2.5 rounded-full bg-white shadow transition-transform",
					on ? "translate-x-[14px]" : "translate-x-[3px]",
				)}
			/>
		</span>
	);
}

export function HireYourTeamHeroGraphic({
	className,
}: HireYourTeamHeroGraphicProps) {
	return (
		<div className={cn("relative w-full", className)}>
			<MarketingGraphicFrame ariaLabel="AI Agent roster dashboard showing enabled agents and live customer signals">
				<div className="flex min-h-0 flex-1 flex-col gap-2 p-3 sm:gap-2.5 sm:p-4">
					<div className="flex items-start justify-between gap-2">
						<div className="min-w-0">
							<p className="text-[14px] font-semibold tracking-[-0.02em] text-white sm:text-[15px]">
								{rosterMock.header}
							</p>
							<p className="mt-0.5 font-mono text-[9px] text-white/55 sm:text-[10px]">
								{rosterMock.meta}
							</p>
						</div>
						<span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-cyan/35 bg-cyan/10 px-2 py-1 font-mono text-[9px] text-cyan sm:text-[10px]">
							<span
								className="size-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--cyan)]"
								aria-hidden
							/>
							{rosterMock.enabledCount} of {rosterMock.totalCount} enabled
						</span>
					</div>

					<div className="grid min-h-0 flex-1 gap-2 sm:grid-cols-[1.05fr_0.95fr] sm:gap-2.5">
						<ul className="flex min-h-0 flex-col gap-1 overflow-hidden">
							{rosterMock.specialists.map((specialist) => {
								const Icon = specialistIcons[specialist.id] ?? Sparkles;
								return (
									<li
										key={specialist.id}
										className={cn(
											"flex items-center gap-2 rounded-[var(--rounded-sm)] border px-2 py-1.5 sm:gap-2.5 sm:px-2.5 sm:py-2",
											specialist.enabled
												? "border-white/12 bg-black/25"
												: "border-white/8 bg-black/15 opacity-70",
										)}
									>
										<span
											className={cn(
												"inline-flex size-6 shrink-0 items-center justify-center rounded-[var(--rounded-sm)] border sm:size-7",
												specialist.enabled
													? "border-link/30 bg-link/15 text-link"
													: "border-white/10 bg-white/[0.04] text-white/35",
											)}
										>
											<Icon className="size-3 sm:size-3.5" aria-hidden />
										</span>
										<div className="min-w-0 flex-1">
											<p
												className={cn(
													"truncate text-[9px] font-semibold sm:text-[10px]",
													specialist.enabled ? "text-white" : "text-white/45",
												)}
											>
												{specialist.title}
											</p>
											<p className="truncate font-mono text-[8px] text-white/45 sm:text-[9px]">
												{specialist.role}
											</p>
										</div>
										<ToggleIndicator on={specialist.enabled} />
									</li>
								);
							})}
						</ul>

						<div className="flex min-h-0 flex-col overflow-hidden rounded-[var(--rounded-sm)] border border-cyan/25 bg-cyan/5 px-2.5 py-2 shadow-[inset_3px_0_0_0_var(--cyan)] sm:px-3 sm:py-2.5">
							<div className="mb-1.5 flex items-center justify-between gap-2">
								<p className="font-mono text-[8px] tracking-[0.12em] text-white/45 uppercase sm:text-[9px]">
									Live signals · 24h
								</p>
								<span className="inline-flex items-center gap-1 font-mono text-[8px] text-cyan sm:text-[9px]">
									<span
										className="size-1.5 animate-pulse rounded-full bg-cyan"
										aria-hidden
									/>
									Monitoring
								</span>
							</div>
							<ul className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-hidden">
								{rosterMock.signals.map((signal) => {
									const styles = signalAccentStyles[signal.accent];
									return (
										<li
											key={signal.text}
											className={cn(
												"rounded-[var(--rounded-sm)] border bg-black/20 px-2 py-1.5 sm:px-2.5 sm:py-2",
												styles.border,
											)}
										>
											<div className="flex items-center gap-1.5">
												<span
													className={cn(
														"size-1.5 shrink-0 rounded-full",
														styles.dot,
													)}
													aria-hidden
												/>
												<p
													className={cn(
														"truncate font-mono text-[8px] sm:text-[9px]",
														styles.label,
													)}
												>
													{signal.specialist}
												</p>
											</div>
											<p className="mt-1 line-clamp-2 text-[8px] leading-snug text-white/78 sm:text-[9px] sm:leading-relaxed">
												{signal.text}
											</p>
										</li>
									);
								})}
							</ul>
						</div>
					</div>

					<div className="flex flex-wrap items-center gap-1.5">
						<span className="inline-flex items-center gap-1 rounded-full border border-link/30 bg-link/10 px-2 py-0.5 font-mono text-[8px] text-link sm:text-[9px]">
							<Sparkles className="size-3" aria-hidden />
							No per-seat fees
						</span>
						<span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[8px] text-white/45 sm:text-[9px]">
							+3 more available
						</span>
					</div>
				</div>
			</MarketingGraphicFrame>
		</div>
	);
}
