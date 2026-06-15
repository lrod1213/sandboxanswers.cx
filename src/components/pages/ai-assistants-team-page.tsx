import { Link } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import {
	Award,
	Ban,
	Lock,
	PlugZap,
	Shield,
	type LucideIcon,
} from "lucide-react";

import { BannerPill } from "#/components/marketing/banner-pill.tsx";
import { FaqAccordion } from "#/components/marketing/faq-accordion.tsx";
import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { MeshGradient } from "#/components/marketing/mesh-gradient.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import {
	AskModeDemo,
	MonitorModeDemo,
} from "#/components/marketing/work-mode-demos.tsx";
import { Button } from "#/components/ui/button.tsx";
import {
	assistants,
	faqItems,
	heroRotatingOutcomes,
	privacySecurityPoints,
	reassurancePoints,
	strategicShiftItems,
	syncEngine,
	tediousWorkItems,
	workModes,
	type AiAssistant,
} from "#/content/ai-assistants-team.ts";
import { siteConfig } from "#/config/site.ts";
import { cn, scrollToElement } from "#/lib/utils.ts";

const assistantAvatarGradients: Record<AiAssistant["id"], string> = {
	revenue: "bg-gradient-to-br from-pink-400 via-fuchsia-500 to-violet-700",
	churn: "bg-gradient-to-br from-sky-300 via-teal-400 to-green-600",
	feedback: "bg-gradient-to-br from-orange-400 via-amber-300 to-yellow-500",
	accounts: "bg-gradient-to-br from-rose-500 via-fuchsia-600 to-purple-800",
	compliance: "bg-gradient-to-br from-indigo-400 via-violet-500 to-purple-700",
	cx: "bg-gradient-to-br from-pink-500 via-rose-400 to-orange-400",
	bot: "bg-gradient-to-br from-fuchsia-400 via-purple-500 to-violet-700",
	coach: "bg-gradient-to-br from-amber-400 via-orange-400 to-rose-500",
};

const privacySecurityIcons = {
	award: Award,
	shield: Shield,
	lock: Lock,
	ban: Ban,
} as const satisfies Record<
	(typeof privacySecurityPoints)[number]["icon"],
	LucideIcon
>;

const proofStats = [
	["Seconds", "typical time to a sourced answer"],
	["24/7", "monitoring when you hire the team"],
	["On/off", "scale your team anytime"],
	["You stay", "in control, always"],
] as const;

function randomTwoDisabled(): Record<string, boolean> {
	const ids = assistants.map((a) => a.id);
	const shuffled = [...ids];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	const off = new Set(shuffled.slice(0, 2));
	return Object.fromEntries(ids.map((id) => [id, !off.has(id)]));
}

function AssistantAvatar({
	id,
	className,
}: {
	id: AiAssistant["id"];
	className?: string;
}) {
	return (
		<span
			className={cn(
				"assistant-avatar inline-block size-10 shrink-0 rounded-full",
				assistantAvatarGradients[id],
				className,
			)}
			aria-hidden
		/>
	);
}

function AssistantEnableButton({
	enabled,
	onToggle,
	label,
	className,
}: {
	enabled: boolean;
	onToggle: () => void;
	label: string;
	className?: string;
}) {
	return (
		<button
			type="button"
			className={cn(
				"assistant-enable-btn",
				enabled
					? "assistant-enable-btn--enabled"
					: "assistant-enable-btn--disabled",
				className,
			)}
			onClick={onToggle}
			aria-pressed={enabled}
			aria-label={`${enabled ? "Disable" : "Enable"} ${label}`}
		>
			{enabled ? "Enabled" : "Disabled"}
		</button>
	);
}

function AssistantStatusBadge({ active }: { active: boolean }) {
	if (active) {
		return (
			<span className="status-pill status-pill--monitoring">
				Monitoring
				<span className="monitoring-dots" aria-hidden />
			</span>
		);
	}

	return <span className="status-pill status-pill--standby">Standby</span>;
}

function TeamRosterPreview({
	className,
	enabled,
	onToggle,
}: {
	className?: string;
	enabled: Record<string, boolean>;
	onToggle: (id: string, checked: boolean) => void;
}) {
	const scrollRef = useRef<HTMLUListElement>(null);
	const activeCount = assistants.filter((a) => enabled[a.id]).length;

	useEffect(() => {
		const node = scrollRef.current;
		if (!node) return;

		const handleWheel = (event: WheelEvent) => {
			if (event.deltaY === 0) return;

			const maxScroll = node.scrollHeight - node.clientHeight;
			if (maxScroll <= 0) return;

			const atTop = node.scrollTop <= 0;
			const atBottom = node.scrollTop >= maxScroll - 1;

			if ((event.deltaY < 0 && atTop) || (event.deltaY > 0 && atBottom)) {
				window.scrollBy({ top: event.deltaY, behavior: "auto" });
			}
		};

		node.addEventListener("wheel", handleWheel, { passive: true });
		return () => node.removeEventListener("wheel", handleWheel);
	}, []);

	return (
		<MarketingCard variant="large" className={cn("overflow-hidden p-0", className)}>
			<div className="border-b border-hairline bg-canvas-soft px-5 py-4">
				<p className="section-eyebrow">Your team · on duty</p>
				<p className="text-display-sm mt-1">
					{activeCount} of {assistants.length} AI Specialists active
				</p>
				<p className="mt-2 text-caption text-body">
					Scroll to browse all {assistants.length} AI Specialists
				</p>
			</div>
			<div className="team-roster-scroll-mask relative">
				<ul
					ref={scrollRef}
					className="team-roster-scroll divide-y divide-hairline"
					aria-label="AI Specialists roster"
				>
					{assistants.map((agent) => {
					const active = enabled[agent.id];
					return (
						<li
							key={agent.id}
							className={cn(
								"flex items-center gap-4 px-5 py-4 transition-colors",
								active ? "bg-link-bg-soft/40" : "opacity-60",
							)}
						>
							<AssistantAvatar id={agent.id} />
							<div className="min-w-0 flex-1">
								<div className="flex flex-wrap items-center gap-2">
									<p className="text-body-md-strong text-ink">{agent.title}</p>
									<AssistantStatusBadge active={active} />
								</div>
								<p className="mt-1 text-body-sm text-body">{agent.summary}</p>
							</div>
							<AssistantEnableButton
								enabled={active}
								label={agent.title}
								onToggle={() => onToggle(agent.id, !active)}
							/>
						</li>
					);
					})}
				</ul>
			</div>
			<div className="border-t border-hairline bg-canvas-soft px-5 py-3">
				<p className="font-mono text-[11px] text-body">
					You control who is enabled and who is on standby.
				</p>
			</div>
		</MarketingCard>
	);
}

function AssistantRosterCard({
	agent,
	enabled,
	onToggle,
}: {
	agent: AiAssistant;
	enabled: boolean;
	onToggle: (checked: boolean) => void;
}) {
	return (
		<MarketingCard
			variant="marketing"
			className={cn(
				"assistant-roster-card relative flex h-full flex-col border transition-all duration-300",
				enabled
					? "assistant-card-active border-primary/35 bg-gradient-to-br from-link-bg-soft/90 via-canvas to-canvas"
					: "border-transparent bg-canvas-soft/70 saturate-[0.88]",
			)}
		>
			<div className="mb-4 flex items-start justify-between gap-3">
				<div className="flex min-w-0 items-start gap-3">
					<AssistantAvatar id={agent.id} />
					<div className="min-w-0">
						<h3 className="text-body-md-strong text-ink">{agent.title}</h3>
						<p className="assistant-card-role text-caption">{agent.role}</p>
					</div>
				</div>
				<AssistantEnableButton
					enabled={enabled}
					label={agent.title}
					onToggle={() => onToggle(!enabled)}
					className="shrink-0"
				/>
			</div>
			<p className="assistant-card-summary text-body-sm mb-4 flex-1">{agent.summary}</p>
			<p className="border-t border-hairline pt-4 text-caption assistant-card-meta">
				<span className="text-body-sm-strong text-ink">Replaces: </span>
				{agent.gruntWork}
			</p>
		</MarketingCard>
	);
}

function HeroAccentPhrase({ children }: { children: ReactNode }) {
	return (
		<span className="hero-accent-phrase relative inline whitespace-nowrap">
			{children}
			<span className="hero-accent-phrase__mark" aria-hidden />
		</span>
	);
}

function HeroRotatingOutcome({ activeIndex }: { activeIndex: number }) {
	return (
		<span className="relative grid text-link" aria-live="polite">
			{heroRotatingOutcomes.map((outcome, index) => (
				<span
					key={outcome}
					className={cn(
						"relative col-start-1 row-start-1 transition-opacity duration-300",
						index === activeIndex ? "opacity-100" : "opacity-0",
					)}
					aria-hidden={index !== activeIndex}
				>
					{outcome}.
					{index === activeIndex ? (
						<span className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-full bg-link-bg-soft" />
					) : null}
				</span>
			))}
		</span>
	);
}

export function AiAssistantsTeamPage() {
	const [outcomeIndex, setOutcomeIndex] = useState(0);
	const [enabled, setEnabled] = useState<Record<string, boolean>>(() =>
		Object.fromEntries(assistants.map((a) => [a.id, true])),
	);

	useLayoutEffect(() => {
		setEnabled(randomTwoDisabled());
	}, []);

	useEffect(() => {
		const id = setInterval(() => {
			setOutcomeIndex((i) => (i + 1) % heroRotatingOutcomes.length);
		}, 3200);
		return () => clearInterval(id);
	}, []);

	const activeCount = assistants.filter((a) => enabled[a.id]).length;

	return (
		<>
			<section className="marketing-hero">
				<MeshGradient />
				<div
					className="signal-grid marketing-hero-atmosphere opacity-70"
					aria-hidden
				/>
				<div className="marketing-container relative z-10">
					<div className="rise-in">
						<BannerPill className="mb-6 max-w-full sm:mb-8">
							Experiment · Hire your AI team
						</BannerPill>
						<div className="grid gap-8 md:gap-14 lg:grid-cols-[0.95fr_1.05fr]">
							<h1 className="max-w-4xl text-[2.5rem] font-semibold leading-[0.95] tracking-[-0.06em] text-ink sm:text-[3rem] sm:leading-[0.92] sm:tracking-[-0.08em] md:text-[56px] md:tracking-[-3.4px] lg:col-start-1 lg:row-start-1 lg:self-center lg:text-[72px] lg:tracking-[-4px]">
								Stay strategic.
								<br />
								Your{" "}
								<HeroAccentPhrase>AI Specialists</HeroAccentPhrase> monitor the
								details for you 24/7:
								<br />
								<HeroRotatingOutcome activeIndex={outcomeIndex} />
							</h1>
							<div className="flex flex-col gap-8 lg:col-start-1 lg:row-start-2 lg:max-w-xl">
								<p className="text-body-lg text-body">
									Get your own answers in seconds, while your AI Specialists
									monitor the details 24/7, briefing other human teams and
									building presentations for leadership. No more surprises.
									You&apos;re always in control.
								</p>
								<div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
									<Button asChild size="lg" className="w-full sm:w-auto">
										<Link to="/contact">See it in action</Link>
									</Button>
									<Button
										variant="outline"
										size="lg"
										className="w-full sm:w-auto"
										onClick={() =>
											scrollToElement("#team", { offset: 88, duration: 1100 })
										}
									>
										Meet your team
									</Button>
								</div>
								<div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--rounded-lg)] bg-hairline elev-4 sm:grid-cols-4">
									{proofStats.map(([value, label]) => (
										<div
											key={value}
											className="bg-canvas/90 p-3 backdrop-blur sm:p-4"
										>
											<p className="text-display-sm text-[1.125rem] sm:text-[1.25rem]">
												{value}
											</p>
											<p className="mt-1.5 text-caption text-body sm:mt-2">
												{label}
											</p>
										</div>
									))}
								</div>
							</div>
							<TeamRosterPreview
								className="lg:col-start-2 lg:row-start-1 lg:self-center"
								enabled={enabled}
								onToggle={(id, checked) =>
									setEnabled((prev) => ({ ...prev, [id]: checked }))
								}
							/>
						</div>
					</div>
				</div>
			</section>

			<SectionBand variant="soft">
				<div className="mb-12 max-w-3xl">
					<p className="section-eyebrow mb-4">Two ways to work</p>
					<h2 className="text-display-lg mb-4">
						Fast answers when you ask.
						<br />
						Steady vigilance when you don&apos;t.
					</h2>
					<p className="text-body-lg text-body">
						Skeptical of AI? Start with a single question you already chase
						manually. Scale AI Specialists up when you trust the sourcing, scale
						down anytime. You&apos;re always in control.
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-2 md:items-stretch">
					{workModes.map((mode, index) => (
						<MarketingCard
							key={mode.title}
							variant="marketing"
							className="flex h-full flex-col"
						>
							<p className="section-eyebrow mb-4">
								0{index + 1} · Mode
							</p>
							<h3 className="text-display-sm mb-3">{mode.title}</h3>
							<p className="text-body-md mb-6 flex-1 text-body">
								{mode.description}
							</p>
							{index === 0 ? <AskModeDemo /> : <MonitorModeDemo />}
						</MarketingCard>
					))}
				</div>
			</SectionBand>

			<SectionBand id="sync-engine">
				<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
					<div>
						<p className="section-eyebrow mb-4">
							{syncEngine.eyebrow}
						</p>
						<h2 className="text-display-lg mb-4">{syncEngine.title}</h2>
						<p className="text-body-lg mb-8 text-body">
							{syncEngine.description}
						</p>
						<div className="space-y-6">
							{syncEngine.features.map((feature) => (
								<div key={feature.title}>
									<h3 className="text-body-md-strong mb-1 text-ink">
										{feature.title}
									</h3>
									<p className="text-body-md text-body">{feature.description}</p>
								</div>
							))}
						</div>
						<Button asChild className="mt-8" variant="outline">
							<Link to="/data-connectors">See all connectors</Link>
						</Button>
					</div>
					<MarketingCard variant="large" className="overflow-hidden p-0">
						<div className="border-b border-hairline bg-gradient-to-r from-link-bg-soft to-canvas px-6 py-5">
							<div className="flex items-center gap-3">
								<span className="inline-flex size-11 items-center justify-center rounded-[var(--rounded-md)] bg-primary text-primary-foreground">
									<PlugZap className="size-5" aria-hidden />
								</span>
								<div>
									<p className="section-eyebrow">Sync Engine</p>
									<p className="text-display-sm">Messy in. Governed out.</p>
								</div>
							</div>
						</div>
						<div className="space-y-4 p-6">
							<p className="text-body-sm text-body">
								Connect your stack once. Your AI Specialists read from a single,
								governed layer.
							</p>
							<div className="flex flex-wrap gap-2">
								{syncEngine.connectors.map((name) => (
									<span
										key={name}
										className="rounded-full border border-hairline bg-canvas-soft px-3 py-1 text-caption text-ink"
									>
										{name}
									</span>
								))}
							</div>
							<div className="sync-engine-callout rounded-[var(--rounded-sm)] border border-primary/20 bg-link-bg-soft/50 px-4 py-3">
								<p className="font-mono text-[11px]">
									Typical setup · ~15 min per connector · AES-256 in transit
									and at rest
								</p>
							</div>
						</div>
					</MarketingCard>
				</div>
			</SectionBand>

			<SectionBand id="team" variant="soft">
				<div className="mb-12 max-w-3xl">
					<p className="section-eyebrow mb-4">Your AI Specialists</p>
					<h2 className="text-display-lg mb-4">
						Manage your scalable AI workforce. Toggle who is on, and when.
						You&apos;re always in control.
					</h2>
					<p className="text-body-lg text-body">
						Scale your AI team up and down as needed. Turn AI Specialists on when
						you want coverage, off when you want quiet. No more telling your
						human team to do menial grunt work.{" "}
						<span className="text-body-md-strong text-ink">
							{activeCount} of {assistants.length} active
						</span>
					</p>
				</div>
				<div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
					{assistants.map((agent) => (
						<AssistantRosterCard
							key={agent.id}
							agent={agent}
							enabled={enabled[agent.id]}
							onToggle={(checked) =>
								setEnabled((prev) => ({ ...prev, [agent.id]: checked }))
							}
						/>
					))}
				</div>
			</SectionBand>

			<SectionBand variant="dark">
				<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
					<div>
						<p className="section-eyebrow mb-4">
							Ready to upskill?
						</p>
						<h2 className="text-display-lg mb-6 text-white">
							AI isn&apos;t here to take your job. It&apos;s here to take the
							parts you never wanted anyway.
						</h2>
						<ul className="space-y-3">
							{tediousWorkItems.map((item) => (
								<li
									key={item}
									className="flex gap-3 text-body-md text-white/85"
								>
									<span
										className="mt-2 size-1.5 shrink-0 rounded-full bg-warning"
										aria-hidden
									/>
									{item}
								</li>
							))}
						</ul>
					</div>
					<div className="grid gap-4 sm:grid-cols-2">
						{strategicShiftItems.map((item) => (
							<div
								key={item.title}
								className="rounded-[var(--rounded-md)] border border-white/10 bg-white/5 p-5 backdrop-blur"
							>
								<h3 className="text-body-md-strong mb-2 text-white">
									{item.title}
								</h3>
								<p className="text-body-sm text-white/75">{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</SectionBand>

			<SectionBand variant="soft">
				<div className="mb-10 max-w-2xl">
					<p className="section-eyebrow mb-4">How we think about it</p>
					<h2 className="text-display-lg">
						Your AI Specialists handle the late-night data wrangling.
						<br />
						You remain the strategist.
					</h2>
				</div>
				<div className="grid gap-6 md:grid-cols-3">
					{reassurancePoints.map((point) => (
						<MarketingCard key={point.title} variant="soft">
							<h3 className="text-display-sm mb-3">{point.title}</h3>
							<p className="text-body-md text-body">{point.body}</p>
						</MarketingCard>
					))}
				</div>
			</SectionBand>

			<SectionBand variant="dark">
				<div className="mb-12 max-w-3xl">
					<p className="section-eyebrow mb-4">Privacy &amp; security</p>
					<h2 className="text-display-lg mb-4 text-white">
						Safe to bring to your board. Safe to connect your data.
					</h2>
					<p className="text-body-lg text-white/80">
						Your AI Specialists only work with data you connect, under controls your
						security and legal teams can stand behind.
					</p>
				</div>
				<div className="mb-10 grid gap-px overflow-hidden rounded-[var(--rounded-lg)] bg-white/10 sm:grid-cols-2">
					{privacySecurityPoints.map((item) => {
						const Icon = privacySecurityIcons[item.icon];
						return (
							<div
								key={item.title}
								className="flex gap-4 bg-white/[0.04] p-6"
							>
								<span className="inline-flex size-11 shrink-0 items-center justify-center rounded-[var(--rounded-md)] bg-white/10 text-white">
									<Icon className="size-5" aria-hidden />
								</span>
								<div>
									<h3 className="text-body-md-strong mb-2 text-white">
										{item.title}
									</h3>
									<p className="text-body-sm text-white/70">
										{item.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
				<div className="text-center">
					<Button asChild variant="outline" size="lg">
						<a
							href={siteConfig.trustCenterUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							View our Trust Center
						</a>
					</Button>
				</div>
			</SectionBand>

			<SectionBand>
				<div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
					<div className="lg:sticky lg:top-28">
						<p className="section-eyebrow mb-4">FAQ</p>
						<h2 className="text-display-lg mb-4">
							Questions skeptical teams ask first.
						</h2>
						<p className="text-body-lg text-body mb-6">
							If you&apos;re worried about job displacement, start with one
							AI Specialist and one metric you already report manually. Compare the
							time and credibility side by side.
						</p>
						<Button asChild size="lg">
							<Link to="/contact">Talk through your use case</Link>
						</Button>
					</div>
					<MarketingCard variant="large" className="p-6 md:p-8">
						<FaqAccordion items={[...faqItems]} />
					</MarketingCard>
				</div>
			</SectionBand>
		</>
	);
}
