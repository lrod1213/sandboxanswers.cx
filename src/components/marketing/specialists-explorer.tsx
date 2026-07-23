import { useState } from "react";
import {
	Bot,
	Building2,
	Check,
	Clock,
	GraduationCap,
	type LucideIcon,
	MessageSquare,
	ShieldCheck,
	Sparkles,
	TrendingDown,
	TrendingUp,
} from "lucide-react";

import type { AiAssistant } from "#/content/ai-assistants-team.ts";
import { cn } from "#/lib/utils.ts";

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

type SpecialistsExplorerContent = {
	eyebrow: string;
	title: string;
	lead: string;
	footnote: string;
};

type SpecialistsExplorerProps = {
	specialists: AiAssistant[];
	content: SpecialistsExplorerContent;
	className?: string;
};

function ToggleSwitch({
	on,
	onClick,
	label,
}: {
	on: boolean;
	onClick: () => void;
	label: string;
}) {
	return (
		<button
			type="button"
			role="switch"
			aria-checked={on}
			aria-label={label}
			onClick={onClick}
			className={cn(
				"relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-link/40",
				on ? "border-cyan/40 bg-cyan/30" : "border-white/15 bg-white/10",
			)}
		>
			<span
				className={cn(
					"inline-block size-3.5 rounded-full bg-white shadow transition-transform duration-200",
					on ? "translate-x-[22px]" : "translate-x-[3px]",
				)}
				aria-hidden
			/>
		</button>
	);
}

export function SpecialistsExplorer({
	specialists,
	content,
	className,
}: SpecialistsExplorerProps) {
	const [activeId, setActiveId] = useState(specialists[0]?.id);
	const [enabled, setEnabled] = useState<Record<string, boolean>>(() =>
		Object.fromEntries(specialists.map((specialist) => [specialist.id, true])),
	);

	const active =
		specialists.find((specialist) => specialist.id === activeId) ??
		specialists[0];
	const ActiveIcon = specialistIcons[active.id] ?? Sparkles;
	const enabledCount = specialists.filter(
		(specialist) => enabled[specialist.id],
	).length;

	const toggle = (id: string) =>
		setEnabled((prev) => ({ ...prev, [id]: !prev[id] }));

	return (
		<section
			className={cn(
				"relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden bg-[var(--surface-inverse)] px-4 py-12 text-[var(--on-inverse)] sm:px-[var(--spacing-lg)] md:py-20",
				className,
			)}
		>
			<div
				className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_12%_12%,rgba(147,51,234,0.16),transparent_34%),radial-gradient(circle_at_88%_88%,rgba(94,234,212,0.09),transparent_30%)]"
				aria-hidden
			/>
			<div
				className="signal-grid pointer-events-none absolute inset-0 opacity-[0.08]"
				aria-hidden
			/>
			<span
				className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-link/45 to-transparent"
				aria-hidden
			/>

			<div className="relative mx-auto w-full max-w-6xl">
				<div className="mx-auto max-w-3xl text-center">
					<p className="section-eyebrow mb-4">{content.eyebrow}</p>
					<h2 className="text-display-lg text-white">{content.title}</h2>
					<p className="mx-auto mt-5 max-w-2xl text-body-lg text-white/65">
						{content.lead}
					</p>
				</div>

				<div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
					<div>
						<div className="mb-3 flex items-center justify-between px-1">
							<p className="font-mono text-[11px] tracking-[0.14em] text-white/45 uppercase">
								Your roster
							</p>
							<p className="font-mono text-[11px] tracking-[0.14em] text-cyan uppercase">
								{enabledCount} of {specialists.length} enabled
							</p>
						</div>
						<ul className="space-y-2">
							{specialists.map((specialist) => {
								const Icon = specialistIcons[specialist.id] ?? Sparkles;
								const isActive = specialist.id === active.id;
								const isOn = enabled[specialist.id];
								return (
									<li key={specialist.id}>
										<div
											className={cn(
												"group flex min-h-11 items-center gap-3 rounded-[var(--rounded-md)] border p-3 transition-colors duration-200",
												isActive
													? "border-link/40 bg-white/[0.07]"
													: "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]",
											)}
										>
											<button
												type="button"
												onClick={() => setActiveId(specialist.id)}
												className="flex min-h-11 min-w-0 flex-1 items-center gap-3 text-left outline-none"
												aria-pressed={isActive}
											>
												<span
													className={cn(
														"inline-flex size-9 shrink-0 items-center justify-center rounded-[var(--rounded-sm)] border transition-colors",
														isOn
															? "border-link/30 bg-link/15 text-link"
															: "border-white/10 bg-white/[0.04] text-white/35",
													)}
												>
													<Icon className="size-4" aria-hidden />
												</span>
												<span className="min-w-0">
													<span
														className={cn(
															"block truncate text-body-sm-strong",
															isOn ? "text-white" : "text-white/45",
														)}
													>
														{specialist.title}
													</span>
													<span className="block truncate text-caption text-white/45">
														{specialist.role}
													</span>
												</span>
											</button>
											<ToggleSwitch
												on={isOn}
												onClick={() => toggle(specialist.id)}
												label={`${isOn ? "Disable" : "Enable"} ${specialist.title}`}
											/>
										</div>
									</li>
								);
							})}
						</ul>
						<p className="mt-4 px-1 text-caption text-white/45">
							{content.footnote}
						</p>
					</div>

					<div className="relative overflow-hidden rounded-[var(--rounded-lg)] border border-white/10 bg-white/[0.04] p-6 shadow-[var(--shadow-elev-5)] backdrop-blur-sm sm:p-8">
						<span
							className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-link/40 to-transparent"
							aria-hidden
						/>
						<div key={active.id} className="rise-in">
							<div className="flex items-start justify-between gap-4">
								<div className="flex items-center gap-4">
									<span className="inline-flex size-14 shrink-0 items-center justify-center rounded-[var(--rounded-md)] border border-link/25 bg-link/15 text-link">
										<ActiveIcon className="size-7" aria-hidden />
									</span>
									<div>
										<span className="inline-flex items-center gap-1.5 rounded-full border border-link/25 bg-link/10 px-2.5 py-0.5 text-[11px] font-medium tracking-[0.06em] text-link uppercase">
											{active.role}
										</span>
										<h3 className="text-display-sm mt-2 text-white">
											{active.title}
										</h3>
									</div>
								</div>
								<span
									className={cn(
										"hidden shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase sm:inline-flex",
										enabled[active.id]
											? "border-cyan/30 bg-cyan/10 text-cyan"
											: "border-white/15 bg-white/5 text-white/40",
									)}
								>
									<span
										className={cn(
											"size-1.5 rounded-full",
											enabled[active.id] ? "bg-cyan" : "bg-white/40",
										)}
										aria-hidden
									/>
									{enabled[active.id] ? "Enabled" : "Off"}
								</span>
							</div>

							<div className="mt-6 space-y-5">
								<div>
									<p className="mb-2 font-mono text-[11px] tracking-[0.14em] text-white/45 uppercase">
										What it does
									</p>
									<p className="text-body-lg text-white/85">{active.summary}</p>
								</div>
								<div className="rounded-[var(--rounded-md)] border border-white/10 bg-black/20 p-4">
									<div className="mb-2 flex items-center gap-2">
										<Clock className="size-3.5 text-cyan" aria-hidden />
										<p className="font-mono text-[11px] tracking-[0.14em] text-white/45 uppercase">
											Manual work it replaces
										</p>
									</div>
									<p className="text-body-sm leading-relaxed text-white/55 line-through decoration-white/25">
										{active.gruntWork}
									</p>
									<div className="mt-3 flex items-center gap-2 text-body-sm-strong text-cyan">
										<Check className="size-4 shrink-0" aria-hidden />
										Now handled automatically—hours back every week.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
