import { Link } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useState } from "react";
import {
	Award,
	Ban,
	Bot,
	Building2,
	GraduationCap,
	HeartHandshake,
	Lock,
	MessagesSquare,
	PlugZap,
	Shield,
	ShieldCheck,
	TrendingUp,
	UserMinus,
	type LucideIcon,
} from "lucide-react";

import { BannerPill } from "#/components/marketing/banner-pill.tsx";
import { FaqAccordion } from "#/components/marketing/faq-accordion.tsx";
import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { MeshGradient } from "#/components/marketing/mesh-gradient.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { Button } from "#/components/ui/button.tsx";
import { Switch } from "#/components/ui/switch.tsx";
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

const assistantIcons: Record<AiAssistant["icon"], LucideIcon> = {
	"trending-up": TrendingUp,
	"user-minus": UserMinus,
	"messages-square": MessagesSquare,
	"building-2": Building2,
	"shield-check": ShieldCheck,
	"heart-handshake": HeartHandshake,
	bot: Bot,
	"graduation-cap": GraduationCap,
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

function AssistantIcon({
	icon,
	active,
}: {
	icon: AiAssistant["icon"];
	active: boolean;
}) {
	const Icon = assistantIcons[icon];
	return (
		<span
			className={cn(
				"inline-flex size-10 items-center justify-center rounded-[var(--rounded-md)] transition-colors duration-300",
				active
					? "bg-primary text-primary-foreground"
					: "bg-canvas-soft-2 text-mute",
			)}
		>
			<Icon className="size-5" aria-hidden />
		</span>
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
	enabled,
	onToggle,
}: {
	enabled: Record<string, boolean>;
	onToggle: (id: string, checked: boolean) => void;
}) {
	const featured = assistants.slice(0, 4);
	const activeCount = assistants.filter((a) => enabled[a.id]).length;

	return (
		<MarketingCard variant="large" className="overflow-hidden p-0">
			<div className="border-b border-hairline bg-canvas-soft px-5 py-4">
				<p className="section-eyebrow">Your team · on duty</p>
				<p className="text-display-sm mt-1">
					{activeCount} of {assistants.length} assistants active
				</p>
			</div>
			<ul className="divide-y divide-hairline">
				{featured.map((agent) => {
					const active = enabled[agent.id];
					return (
						<li
							key={agent.id}
							className={cn(
								"flex items-center gap-4 px-5 py-4 transition-colors",
								active ? "bg-link-bg-soft/40" : "opacity-60",
							)}
						>
							<AssistantIcon icon={agent.icon} active={active} />
							<div className="min-w-0 flex-1">
								<div className="flex flex-wrap items-center gap-2">
									<p className="text-body-md-strong text-ink">{agent.title}</p>
									<AssistantStatusBadge active={active} />
								</div>
								<p className="mt-1 text-body-sm text-body">{agent.summary}</p>
							</div>
							<Switch
								size="sm"
								checked={active}
								onCheckedChange={(checked) => onToggle(agent.id, checked)}
								aria-label={`${active ? "Disable" : "Enable"} ${agent.title}`}
							/>
						</li>
					);
				})}
			</ul>
			<div className="border-t border-hairline bg-canvas-soft px-5 py-3">
				<p className="font-mono text-[11px] text-body">
					No more surprises. You control who is on and who is off.
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
				"relative flex h-full flex-col border transition-all duration-300",
				enabled
					? "assistant-card-active border-primary/35 bg-gradient-to-br from-link-bg-soft/90 via-canvas to-canvas -translate-y-0.5"
					: "border-transparent opacity-70 saturate-[0.85]",
			)}
		>
			<div className="absolute top-4 right-4 flex items-center gap-2">
				<span className="sr-only">
					{enabled ? "Disable" : "Enable"} {agent.title}
				</span>
				<span
					className={cn(
						"hidden text-caption sm:inline",
						enabled ? "text-primary" : "text-mute",
					)}
					aria-hidden
				>
					{enabled ? "On" : "Off"}
				</span>
				<Switch
					checked={enabled}
					onCheckedChange={onToggle}
					aria-label={`${enabled ? "Disable" : "Enable"} ${agent.title}`}
				/>
			</div>
			<div className="mb-4 flex items-start gap-3 pr-16">
				<AssistantIcon icon={agent.icon} active={enabled} />
				<span className="text-caption text-mute">{agent.role}</span>
			</div>
			<h3 className="text-body-md-strong mb-2 text-ink">{agent.title}</h3>
			<p className="text-body-sm mb-4 flex-1 text-body">{agent.summary}</p>
			<p className="border-t border-hairline pt-4 text-caption text-mute">
				<span className="text-body-sm-strong text-ink">Replaces: </span>
				{agent.gruntWork}
			</p>
		</MarketingCard>
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
					<div className="grid items-center gap-8 rise-in md:gap-14 lg:grid-cols-[0.95fr_1.05fr]">
						<div>
							<BannerPill className="mb-6 max-w-full sm:mb-8">
								Experiment · Hire your AI team
							</BannerPill>
							<h1 className="mb-6 max-w-4xl text-[2.5rem] font-semibold leading-[0.95] tracking-[-0.06em] text-ink sm:text-[3rem] sm:leading-[0.92] sm:tracking-[-0.08em] md:text-[56px] md:tracking-[-3.4px] lg:text-[72px] lg:tracking-[-4px]">
								You stay strategic.
								<br />
								Your AI Assistants monitor the details to uncover{" "}
								<span
									className="relative inline-block text-link"
									key={outcomeIndex}
								>
									{heroRotatingOutcomes[outcomeIndex]}.
									<span className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-full bg-link-bg-soft" />
								</span>
							</h1>
							<p className="text-body-lg mb-8 max-w-xl text-body">
								Get your own answers in seconds, while your assistants monitor
								the details 24/7, briefing other human teams and building
								presentations for leadership. No more surprises. No more
								delegating menial grunt work. Your AI Agents are here to please
								you. You&apos;re always in control.
							</p>
							<div className="mb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
							<div className="grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-[var(--rounded-lg)] bg-hairline elev-4 sm:grid-cols-4">
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
							enabled={enabled}
							onToggle={(id, checked) =>
								setEnabled((prev) => ({ ...prev, [id]: checked }))
							}
						/>
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
						manually. Scale assistants up when you trust the sourcing, scale
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
							<p className="mt-auto rounded-[var(--rounded-sm)] border border-hairline bg-canvas-soft px-4 py-3 font-mono text-[12px] leading-relaxed text-ink">
								{mode.example}
							</p>
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
								Connect your stack once. Your assistants read from a single,
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
							<div className="rounded-[var(--rounded-sm)] border border-primary/20 bg-link-bg-soft/50 px-4 py-3">
								<p className="font-mono text-[11px] text-primary">
									Typical setup · ~15 min per connector · AES-256 in transit
								</p>
							</div>
						</div>
					</MarketingCard>
				</div>
			</SectionBand>

			<SectionBand id="team" variant="soft">
				<div className="mb-12 max-w-3xl">
					<p className="section-eyebrow mb-4">Your roster</p>
					<h2 className="text-display-lg mb-4">
						Eight specialists. Toggle who is on. You&apos;re always in
						control.
					</h2>
					<p className="text-body-lg text-body">
						Scale your AI team up and down as needed. Turn assistants on when
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
							No more surprises. No more menial grunt work for your team. AI
							isn&apos;t here to take your job. It&apos;s here to take the parts
							you never wanted anyway.
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
						Your AI Assistants handle the late-night data wrangling.
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
						Your assistants only work with data you connect, under controls your
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
							assistant and one metric you already report manually. Compare the
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
