import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
	Bot,
	Building2,
	GraduationCap,
	HeartHandshake,
	MessagesSquare,
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
import {
	assistants,
	faqItems,
	heroRotatingOutcomes,
	reassurancePoints,
	strategicShiftItems,
	tediousWorkItems,
	workModes,
	type AiAssistant,
} from "#/content/ai-assistants-team.ts";
import { cn } from "#/lib/utils.ts";

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

const proofStats = [
	["Seconds", "typical time to a sourced answer"],
	["24/7", "monitoring when you hire the team"],
	["8 roles", "ready to deploy on day one"],
	["You stay", "in the loop on every insight"],
] as const;

function AssistantIcon({ icon }: { icon: AiAssistant["icon"] }) {
	const Icon = assistantIcons[icon];
	return (
		<span className="inline-flex size-10 items-center justify-center rounded-[var(--rounded-md)] bg-link-bg-soft text-primary">
			<Icon className="size-5" aria-hidden />
		</span>
	);
}

function TeamRosterPreview() {
	const featured = assistants.slice(0, 4);

	return (
		<MarketingCard variant="large" className="overflow-hidden p-0">
			<div className="border-b border-hairline bg-canvas-soft px-5 py-4">
				<p className="font-mono-caption text-body">Your team · on duty</p>
				<p className="text-display-sm mt-1">4 of 8 assistants active</p>
			</div>
			<ul className="divide-y divide-hairline">
				{featured.map((agent) => (
					<li
						key={agent.id}
						className="flex items-start gap-4 px-5 py-4 transition-colors hover:bg-canvas-soft/80"
					>
						<AssistantIcon icon={agent.icon} />
						<div className="min-w-0 flex-1">
							<div className="flex flex-wrap items-center gap-2">
								<p className="text-body-md-strong text-ink">{agent.title}</p>
								<span className="rounded-full bg-success-soft px-2 py-0.5 text-caption text-success">
									Monitoring
								</span>
							</div>
							<p className="mt-1 text-body-sm text-body">{agent.summary}</p>
						</div>
					</li>
				))}
			</ul>
			<div className="border-t border-hairline bg-canvas-soft px-5 py-3">
				<p className="font-mono text-[11px] text-body">
					Latest: Churn Risk Analyst flagged 3 accounts · 2h ago
				</p>
			</div>
		</MarketingCard>
	);
}

export function AiAssistantsTeamPage() {
	const [outcomeIndex, setOutcomeIndex] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setOutcomeIndex((i) => (i + 1) % heroRotatingOutcomes.length);
		}, 3200);
		return () => clearInterval(id);
	}, []);

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
								Hire a team of AI assistants to do the work you{" "}
								<span className="text-body">don&apos;t</span>—and find{" "}
								<span
									className="relative inline-block text-link"
									key={outcomeIndex}
								>
									{heroRotatingOutcomes[outcomeIndex]}.
									<span className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-full bg-link-bg-soft" />
								</span>
							</h1>
							<p className="text-body-lg mb-8 max-w-xl text-body">
								Get your own answers in seconds—or put specialists on watch
								24/7 to brief your human teams and build presentations for
								leadership. AI handles the tedious digging. You stay strategic.
							</p>
							<div className="mb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
								<Button asChild size="lg" className="w-full sm:w-auto">
									<Link to="/contact">Meet your team</Link>
								</Button>
								<Button
									asChild
									variant="outline"
									size="lg"
									className="w-full sm:w-auto"
								>
									<Link to="/">Compare product view</Link>
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
						<TeamRosterPreview />
					</div>
				</div>
			</section>

			<SectionBand variant="soft">
				<div className="mb-12 max-w-3xl">
					<p className="font-mono-caption mb-4 text-body">Two ways to work</p>
					<h2 className="text-display-lg mb-4">
						Fast answers when you ask. Steady vigilance when you don&apos;t.
					</h2>
					<p className="text-body-lg text-body">
						Skeptical of AI? Start with a single question you already chase
						manually. When you trust the sourcing, add assistants to watch the
						metrics that keep you up at night.
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-2">
					{workModes.map((mode, index) => (
						<MarketingCard
							key={mode.title}
							variant={index === 0 ? "large" : "marketing"}
							className={cn(index === 0 && "md:-mt-4")}
						>
							<p className="font-mono-caption mb-4 text-body">
								0{index + 1} · Mode
							</p>
							<h3 className="text-display-sm mb-3">{mode.title}</h3>
							<p className="text-body-md mb-6 text-body">{mode.description}</p>
							<p className="rounded-[var(--rounded-sm)] border border-hairline bg-canvas-soft px-4 py-3 font-mono text-[12px] leading-relaxed text-ink">
								{mode.example}
							</p>
						</MarketingCard>
					))}
				</div>
			</SectionBand>

			<SectionBand id="team">
				<div className="mb-12 grid items-end gap-6 lg:grid-cols-[0.85fr_1fr]">
					<div>
						<p className="font-mono-caption mb-4 text-body">Your roster</p>
						<h2 className="text-display-lg">
							Eight specialists. Zero late-night spreadsheet surgery.
						</h2>
					</div>
					<p className="text-body-lg text-body">
						Pick the roles you need—or run the full bench. Each assistant is
						built for a job your team already does manually, just slower and
						more painfully.
					</p>
				</div>
				<div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
					{assistants.map((agent) => (
						<MarketingCard
							key={agent.id}
							variant="marketing"
							className="flex h-full flex-col"
						>
							<div className="mb-4 flex items-start justify-between gap-3">
								<AssistantIcon icon={agent.icon} />
								<span className="text-caption text-mute">{agent.role}</span>
							</div>
							<h3 className="text-body-md-strong mb-2 text-ink">
								{agent.title}
							</h3>
							<p className="text-body-sm mb-4 flex-1 text-body">
								{agent.summary}
							</p>
							<p className="border-t border-hairline pt-4 text-caption text-mute">
								<span className="text-body-sm-strong text-ink">
									Replaces:{" "}
								</span>
								{agent.gruntWork}
							</p>
						</MarketingCard>
					))}
				</div>
			</SectionBand>

			<SectionBand variant="dark">
				<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
					<div>
						<p className="font-mono-caption mb-4 text-white/70">
							For skeptical leaders
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
					<p className="font-mono-caption mb-4 text-body">How we think about it</p>
					<h2 className="text-display-lg">
						You remain the strategist. They remain the tireless analysts.
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

			<SectionBand>
				<div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
					<div className="lg:sticky lg:top-28">
						<p className="font-mono-caption mb-4 text-body">FAQ</p>
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
