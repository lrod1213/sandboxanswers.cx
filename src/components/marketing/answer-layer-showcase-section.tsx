import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
	ArrowRight,
	Ban,
	Check,
	Headphones,
	Mail,
	MousePointerClick,
	Play,
	Users,
} from "lucide-react";

import { AnswerLayerComparisonGraphic } from "#/components/marketing/answer-layer-comparison-graphic.tsx";
import { BoardroomLeadersInfographic } from "#/components/marketing/boardroom-leaders-infographic.tsx";
import { CompanyPulseHeroGraphic } from "#/components/marketing/company-pulse-hero-graphic.tsx";
import { DailyBriefHeroGraphic } from "#/components/marketing/daily-brief-hero-graphic.tsx";
import { HireYourTeamHeroGraphic } from "#/components/marketing/hire-your-team-hero-graphic.tsx";
import { ProductVideoPlaceholder } from "#/components/marketing/product-video-placeholder.tsx";
import { Button } from "#/components/ui/button.tsx";
import { cn } from "#/lib/utils.ts";

type ShowcaseFeature = {
	id: string;
	pillLabel: string;
	badge?: string;
	title: string;
	description: string;
	image?: {
		src: string;
		alt: string;
		width: number;
		height: number;
		caption?: string;
	};
	videoPlaceholder?: {
		label?: string;
		caption?: string;
	};
	highlights?: string[];
	bulletSection?: {
		intro: string;
		items: readonly {
			name: string;
			description: string;
		}[];
		afterParagraph?: number;
	};
	cta?: {
		label: string;
		href: string;
		secondary?: {
			label: string;
			href: string;
		};
	};
	span?: "full" | "wide" | "narrow";
	plainBodyParagraphs?: number;
	hideTitle?: boolean;
	hideFromGrid?: boolean;
};

const showcaseFeatures: ShowcaseFeature[] = [
	{
		id: "comparison",
		pillLabel: "Close the Gap",
		badge: "Core insight",
		title: "Close the gap",
		description:
			"Most teams don't need more data.\n\nThey need a faster way to understand what their data is already telling them.\n\nToday, customer insights are scattered across dashboards, CRMs, tickets, surveys, calls, reviews, spreadsheets, and reporting systems. Finding the answer often means searching across platforms, rebuilding reports, creating pivot tables, waiting on analysts, and translating raw metrics into a story leadership can act on.\n\nThe Answer Layer removes the hunt.",
		image: {
			src: "/images/hire-your-team-data-to-decisions.png",
			alt: "The old way takes weeks across many handoffs — The Answer Layer way delivers decisions in minutes from one layer.",
			width: 1024,
			height: 518,
			caption: "Weeks of handoffs become minutes to a confident decision.",
		},
		span: "full",
		hideTitle: true,
		hideFromGrid: true,
	},
	{
		id: "ask",
		pillLabel: "Meet The Answer Layer",
		badge: "NEW",
		title: "Meet The Answer Layer",
		description:
			"Your customer data should not wait for someone to ask the right question.\n\nThe signals are already there—in your support tickets, surveys, reviews, CRM notes, call transcripts, dashboards, and reports. But today, finding the answer still means hunting across platforms, rebuilding the same reports, stitching spreadsheets together, translating metrics, and turning raw data into a story leadership can act on.\n\nThe Answer Layer sits on top of your customer data and turns scattered signals into business intelligence built around what matters most to your company.\n\nNo more searching dashboards.\n\nNo more waiting on reports.\n\nNo more starting from scratch.\n\nJust customer intelligence delivered before you ask—and instant answers when you do.",
		videoPlaceholder: {
			label: "Chat demo",
			caption: "Watch questions turn into actionable answers",
		},
		cta: {
			label: "Book a demo",
			href: "/contact",
			secondary: {
				label: "See how it works",
				href: "/daily-signal",
			},
		},
		span: "wide",
		hideTitle: true,
		hideFromGrid: true,
	},
	{
		id: "daily-brief",
		pillLabel: "The Daily Brief",
		badge: "Daily",
		title: "The Daily Brief",
		description:
			"Your personal unique-to-you AI Chief of Staff will deliver your morning pulse on company health, domain trends, and what needs attention today.",
		image: {
			src: "/images/hire-your-team-daily-brief.jpg",
			alt: "The Daily Brief — summary, critical churn risks, operational oddities, and recommended next actions.",
			width: 1024,
			height: 577,
		},
		highlights: [
			"Overnight churn signals ranked by revenue impact",
			"Emerging themes from support, sales, and product feedback",
			"Three decisions worth your attention before standup",
		],
		cta: {
			label: "Book a demo",
			href: "/contact",
			secondary: {
				label: "Play Daily Brief",
				href: "/daily-signal",
			},
		},
		span: "wide",
		hideFromGrid: true,
	},
	{
		id: "lenses",
		pillLabel: "Hire your AI team",
		badge: "Your AI team",
		title: "An agent for every signal—switch on only what you need.",
		description:
			"Each AI Agent watches your customer data around the clock and takes over the manual work your team does today—monitoring conversations, surfacing risk and revenue, and turning signals into answers.",
		highlights: [
			"Full roster for churn, revenue, product feedback, accounts, compliance, and coaching",
			"Enable or disable any agent—no seat limits, no surprise customer outreach",
			"Build custom agents trained on your products, segments, and policies",
		],
		cta: {
			label: "Book a demo",
			href: "/contact",
			secondary: {
				label: "Hire your AI team",
				href: "/hire-your-team",
			},
		},
		span: "wide",
		hideFromGrid: true,
	},
	{
		id: "company-pulse",
		pillLabel: "The Company Pulse",
		badge: "Live",
		title: "The Company Pulse",
		description:
			"Your customer data never stops talking. The Company Pulse turns it into a single executive view of business health—so you know what is rising, what is cooling, and what needs a decision before it hits the board deck.",
		highlights: [
			"Churn risk, revenue motion, and product themes ranked by business impact",
			"Continuous read across every connected source—no manual reconciliation",
			"A shared pulse for CX, product, and revenue leaders",
		],
		cta: {
			label: "Book a demo",
			href: "/contact",
			secondary: {
				label: "Explore The Company Pulse",
				href: "/company-pulse",
			},
		},
		span: "wide",
		hideFromGrid: true,
	},
	{
		id: "languages",
		pillLabel: "Insights in Any Language",
		badge: "150+ languages",
		title: "Insights in any language.",
		description:
			"Your customers reach out in their own words, across every market you serve. The Answer Layer understands them all—analyzing conversations, tickets, surveys, and reviews in their original language so nothing is lost in translation.\n\nYour insights are available in over 150 languages, delivered in the language your team works in.",
		highlights: [
			"Analyze conversations in their original language—no pre-translation required",
			"Surface accurate themes and sentiment across every market",
			"Read your Daily Brief and answers in the language your team works in",
		],
		cta: {
			label: "Book a demo",
			href: "/contact",
			secondary: {
				label: "See how it works",
				href: "/daily-signal",
			},
		},
		span: "wide",
		hideFromGrid: true,
	},
];

const spanClasses: Record<NonNullable<ShowcaseFeature["span"]>, string> = {
	full: "md:col-span-12",
	wide: "md:col-span-7",
	narrow: "md:col-span-5",
};

type AnswerLayerShowcaseSectionProps = {
	className?: string;
	eyebrow?: string;
	title?: string;
	description?: string;
	tabPrompt?: string;
	featureIds?: readonly string[];
	defaultFeatureId?: string;
};

function ShowcaseCard({
	feature,
	active,
	onSelect,
}: {
	feature: ShowcaseFeature;
	active: boolean;
	onSelect: () => void;
}) {
	const span = feature.span ?? "wide";

	return (
		<article
			className={cn(
				"group relative flex flex-col overflow-hidden rounded-[var(--rounded-lg)] border bg-canvas/90 p-5 shadow-[var(--shadow-elev-2)] backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[var(--shadow-elev-4)] sm:p-6",
				spanClasses[span],
				active
					? "border-primary/35 ring-1 ring-primary/15"
					: "border-hairline hover:border-hairline-strong",
			)}
		>
			<div
				className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				aria-hidden
			>
				<div className="absolute -top-16 -right-16 size-40 rounded-full bg-link/10 blur-3xl" />
				<div className="absolute -bottom-20 -left-10 size-36 rounded-full bg-cyan/10 blur-3xl" />
			</div>

			<button
				type="button"
				onClick={onSelect}
				className="relative flex flex-1 flex-col text-left outline-none focus-visible:ring-[3px] focus-visible:ring-ring/30"
			>
				<div className="mb-4 flex flex-wrap items-center gap-2">
					{feature.badge ? (
						<span
							className={cn(
								"rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-[0.04em] uppercase",
								feature.badge === "NEW"
									? "bg-link text-white"
									: "border border-hairline bg-canvas-soft text-body",
							)}
						>
							{feature.badge}
						</span>
					) : null}
					<span className="inline-flex items-center gap-1 text-caption text-body opacity-0 transition-opacity duration-300 group-hover:opacity-100">
						Explore
						<ArrowRight className="size-3" aria-hidden />
					</span>
				</div>

				<h3 className="text-display-sm mb-3 max-w-xl text-ink">{feature.title}</h3>
				<p className="mb-5 max-w-xl text-body-md text-body">{feature.description}</p>

				{feature.image ? (
					<div className="relative mt-auto overflow-hidden rounded-[var(--rounded-md)] border border-hairline bg-ink shadow-[var(--shadow-inset)]">
						<div
							className="absolute inset-0 z-10 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							aria-hidden
						/>
						<img
							src={feature.image.src}
							alt={feature.image.alt}
							width={feature.image.width}
							height={feature.image.height}
							className="w-full transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
							loading="lazy"
							decoding="async"
						/>
					</div>
				) : (
					<ul className="mt-auto space-y-3 border-t border-hairline pt-5">
						{[
							"Surveys, tickets, and call transcripts in one place",
							"No manual pivot tables or report queues",
							"Answers tailored to the decision you need to make",
						].map((item) => (
							<li
								key={item}
								className="flex items-start gap-3 text-body-sm text-body"
							>
								<span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-link" />
								{item}
							</li>
						))}
					</ul>
				)}
			</button>
		</article>
	);
}

function SpotlightDescription({
	description,
	bulletSection,
	plainBodyParagraphs = 0,
	emphasizeOpening = false,
}: {
	description: string;
	bulletSection?: ShowcaseFeature["bulletSection"];
	plainBodyParagraphs?: number;
	emphasizeOpening?: boolean;
}) {
	const paragraphs = description.split("\n\n");
	const isNarrative = paragraphs.length > 2;

	type Kind = "plain" | "opening" | "lead" | "callout" | "dense" | "body";

	const classify = (paragraph: string, index: number): Kind => {
		if (plainBodyParagraphs > 0 && index < plainBodyParagraphs) return "plain";
		if (!isNarrative) return "body";
		if (index === 0) return "opening";
		if (index === 1) return "lead";
		if (paragraph.length < 72 && index > 1) return "callout";
		if (paragraph.length > 180) return "dense";
		return "body";
	};

	type Block =
		| { type: Exclude<Kind, "callout">; text: string; lastIndex: number }
		| {
				type: "callout-group";
				items: { text: string; index: number }[];
				lastIndex: number;
		  };

	const blocks: Block[] = [];
	for (let i = 0; i < paragraphs.length; ) {
		const kind = classify(paragraphs[i], i);
		if (kind === "callout") {
			const items: { text: string; index: number }[] = [];
			let j = i;
			while (j < paragraphs.length && classify(paragraphs[j], j) === "callout") {
				items.push({ text: paragraphs[j], index: j });
				j += 1;
			}
			blocks.push({ type: "callout-group", items, lastIndex: j - 1 });
			i = j;
		} else {
			blocks.push({ type: kind, text: paragraphs[i], lastIndex: i });
			i += 1;
		}
	}

	const renderBlock = (block: Block, key: number) => {
		if (block.type === "callout-group") {
			if (block.items.length === 1) {
				return (
					<p
						key={key}
						className="max-w-lg rounded-r-[var(--rounded-sm)] border-l-2 border-link bg-link-bg-soft/50 py-2 pr-3 pl-4 text-body-md-strong text-ink"
					>
						{block.items[0].text}
					</p>
				);
			}
			return (
				<ul
					key={key}
					className="max-w-lg space-y-2.5 rounded-[var(--rounded-md)] border border-link/15 bg-link-bg-soft/45 p-4 shadow-[var(--shadow-inset)] backdrop-blur-sm"
				>
					{block.items.map((item) => (
						<li
							key={item.text}
							className="flex items-center gap-3 text-body-md-strong text-ink"
						>
							<span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-link/25 bg-link/10 text-link">
								<Ban className="size-3.5" aria-hidden />
							</span>
							{item.text}
						</li>
					))}
				</ul>
			);
		}

		if (block.type === "plain") {
			return (
				<p key={key} className="max-w-lg text-body-md leading-relaxed text-body">
					{block.text}
				</p>
			);
		}

		if (block.type === "opening") {
			return (
				<p
					key={key}
					className={cn(
						"max-w-lg font-semibold tracking-[-0.03em] text-ink",
						emphasizeOpening ? "text-display-md" : "text-display-sm",
					)}
				>
					{block.text}
				</p>
			);
		}

		if (block.type === "dense") {
			return (
				<p
					key={key}
					className="max-w-lg border-l border-hairline-strong/70 pl-4 text-body-md leading-relaxed text-body"
				>
					{block.text}
				</p>
			);
		}

		// "lead" and "body"
		return (
			<p key={key} className="max-w-lg text-body-lg text-body">
				{block.text}
			</p>
		);
	};

	const bulletAfter = bulletSection?.afterParagraph ?? 1;

	return (
		<div className="space-y-5">
			{blocks.map((block, blockIndex) => (
				<div key={blockIndex} className="space-y-5">
					{renderBlock(block, blockIndex)}
					{bulletSection && block.lastIndex === bulletAfter ? (
						<div className="relative overflow-hidden rounded-[var(--rounded-md)] border border-hairline/80 bg-canvas/55 p-5 shadow-[var(--shadow-inset)] backdrop-blur-sm">
							<span
								className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-link/40 to-transparent"
								aria-hidden
							/>
							<div className="mb-4 flex items-center gap-3">
								<span className="inline-flex size-8 shrink-0 items-center justify-center rounded-[var(--rounded-sm)] border border-link/20 bg-link-bg-soft text-link">
									<Users className="size-4" aria-hidden />
								</span>
								<p className="text-body-md-strong text-ink">
									{bulletSection.intro}
								</p>
							</div>
							<ul className="grid gap-x-5 gap-y-3 sm:grid-cols-2">
								{bulletSection.items.map((item, itemIndex) => (
									<li
										key={item.name}
										className="flex items-start gap-3 rounded-[var(--rounded-sm)] border border-transparent p-2 transition-colors duration-200 hover:border-hairline/80 hover:bg-canvas/60"
									>
										<span
											className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-link/20 bg-link-bg-soft font-mono text-[10px] font-medium text-link"
											aria-hidden
										>
											{String(itemIndex + 1).padStart(2, "0")}
										</span>
										<span className="text-body-sm leading-relaxed text-body">
											<span className="text-body-sm-strong text-ink">
												{item.name}
											</span>{" "}
											{item.description}
										</span>
									</li>
								))}
							</ul>
						</div>
					) : null}
				</div>
			))}
		</div>
	);
}

function ShowcaseSpotlightHighlights({
	highlights,
	accent = "link",
}: {
	highlights: readonly string[];
	accent?: "link" | "cyan";
}) {
	return (
		<ul
			className={cn(
				"mt-6 max-w-lg space-y-2.5 rounded-[var(--rounded-md)] border p-4 shadow-[var(--shadow-inset)] backdrop-blur-sm",
				accent === "cyan"
					? "border-cyan/15 bg-cyan/[0.06]"
					: "border-link/15 bg-link-bg-soft/45",
			)}
		>
			{highlights.map((item) => (
				<li
					key={item}
					className="flex items-center gap-3 text-body-sm-strong text-ink"
				>
					<span
						className={cn(
							"inline-flex size-5 shrink-0 items-center justify-center rounded-full border",
							accent === "cyan"
								? "border-cyan/25 bg-cyan/10 text-cyan"
								: "border-link/25 bg-link/10 text-link",
						)}
					>
						<Check className="size-3" aria-hidden />
					</span>
					{item}
				</li>
			))}
		</ul>
	);
}

const languageGreetings = [
	"Hello",
	"Hola",
	"Bonjour",
	"こんにちは",
	"你好",
	"Olá",
	"Hallo",
	"नमस्ते",
	"안녕하세요",
	"Ciao",
	"مرحبا",
	"Привет",
	"Merhaba",
	"Xin chào",
	"สวัสดี",
	"Sawubona",
] as const;

function LanguagesVisual() {
	return (
		<div className="relative flex aspect-video w-full flex-col items-center justify-center gap-5 overflow-hidden bg-ink px-6 py-8 text-center">
			<div
				className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_50%_42%,color-mix(in_srgb,var(--link)_26%,transparent),transparent_60%)]"
				aria-hidden
			/>
			<div className="signal-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />
			<div className="relative">
				<p className="bg-[linear-gradient(120deg,var(--link),var(--cyan))] bg-clip-text text-[3.5rem] font-semibold leading-none tracking-[-0.04em] text-transparent">
					150+
				</p>
				<p className="mt-2 font-mono text-[11px] tracking-[0.16em] text-white/55 uppercase">
					Languages supported
				</p>
			</div>
			<div className="relative flex max-w-md flex-wrap items-center justify-center gap-2">
				{languageGreetings.map((greeting) => (
					<span
						key={greeting}
						className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-body-sm text-white/75 backdrop-blur-sm"
					>
						{greeting}
					</span>
				))}
			</div>
		</div>
	);
}

function ShowcaseSpotlightMedia({
	feature,
}: {
	feature: ShowcaseFeature;
}) {
	const media = feature.id === "comparison" ? (
		<AnswerLayerComparisonGraphic />
	) : feature.id === "daily-brief" ? (
		<DailyBriefHeroGraphic belowCaption="" />
	) : feature.id === "lenses" ? (
		<HireYourTeamHeroGraphic className="w-full" />
	) : feature.id === "languages" ? (
		<LanguagesVisual />
	) : feature.id === "company-pulse" ? (
		<CompanyPulseHeroGraphic className="w-full" />
	) : feature.videoPlaceholder ? (
		<ProductVideoPlaceholder
			label={feature.videoPlaceholder.label ?? "Chat demo"}
			caption={
				feature.videoPlaceholder.caption ??
				"Watch The Answer Layer in conversation"
			}
		/>
	) : feature.image ? (
		<img
			src={feature.image.src}
			alt={feature.image.alt}
			width={feature.image.width}
			height={feature.image.height}
			className="w-full"
			loading="lazy"
			decoding="async"
		/>
	) : (
		<BoardroomLeadersInfographic />
	);

	return (
		<div
			className={cn(
				"relative",
				feature.id === "comparison" && "lg:self-center",
			)}
		>
			<div
				className={cn(
					"pointer-events-none absolute -inset-3 rounded-[var(--rounded-lg)] opacity-80 blur-2xl",
					feature.id === "daily-brief"
						? "bg-[radial-gradient(circle_at_50%_50%,color-mix(in_srgb,var(--cyan)_20%,transparent),transparent_68%)]"
						: "bg-[radial-gradient(circle_at_50%_50%,color-mix(in_srgb,var(--link)_22%,transparent),transparent_68%)]",
				)}
				aria-hidden
			/>
			<div
				className={cn(
					"pointer-events-none absolute -right-6 -bottom-6 size-32 rounded-full blur-3xl",
					feature.id === "daily-brief" ? "bg-cyan/15" : "bg-cyan/15",
				)}
				aria-hidden
			/>
			<div
				className={cn(
					"showcase-spotlight-media relative",
					feature.id !== "daily-brief" &&
						feature.id !== "comparison" &&
						feature.id !== "company-pulse" &&
						feature.id !== "lenses" &&
						"overflow-hidden rounded-[var(--rounded-md)] border border-white/10 bg-ink shadow-[var(--shadow-elev-5)] ring-1 ring-link/15",
				)}
			>
				{media}
			</div>
			{feature.image?.caption ? (
				<p className="mt-3 px-1 text-center text-caption leading-relaxed text-body">
					{feature.image.caption}
				</p>
			) : null}
		</div>
	);
}

export function AnswerLayerShowcaseSection({
	className,
	eyebrow = "Inside the Answer Layer",
	title = "The insight your team needs is already there. The Answer Layer surfaces it.",
	description = "Daily signals before you ask. Instant answers when you do. The Answer Layer turns the customer data you already own into intelligence your team can act on.",
	tabPrompt = "Select a topic to explore",
	featureIds,
	defaultFeatureId,
}: AnswerLayerShowcaseSectionProps) {
	const visibleFeatures = featureIds?.length
		? showcaseFeatures.filter((feature) => featureIds.includes(feature.id))
		: showcaseFeatures;
	const initialFeature =
		visibleFeatures.find((feature) => feature.id === defaultFeatureId) ??
		visibleFeatures.find((feature) => feature.id === "daily-brief") ??
		visibleFeatures[0];
	const [activeId, setActiveId] = useState(initialFeature.id);
	const activeFeature =
		visibleFeatures.find((feature) => feature.id === activeId) ??
		initialFeature;

	return (
		<section
			className={cn(
				"relative overflow-hidden rounded-[var(--rounded-xl)] bg-[var(--surface-inverse)] px-4 py-10 text-[var(--on-inverse)] shadow-[0_40px_90px_-60px_rgba(0,0,0,0.6)] sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16",
				className,
			)}
		>
			<div
				className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_12%_15%,rgba(147,51,234,0.18),transparent_36%),radial-gradient(circle_at_88%_88%,rgba(94,234,212,0.1),transparent_32%)]"
				aria-hidden
			/>
			<div
				className="signal-grid pointer-events-none absolute inset-0 opacity-[0.08]"
				aria-hidden
			/>
			<span
				className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-link/45 to-transparent"
				aria-hidden
			/>

			<div className="relative mx-auto mb-10 max-w-4xl text-center md:mb-14">
				<p className="section-eyebrow mb-4">{eyebrow}</p>
				<h2 className="text-display-lg mx-auto max-w-4xl text-white">{title}</h2>
				<p className="mx-auto mt-6 max-w-3xl text-body-lg text-white/65">
					{description}
				</p>
			</div>

			<div className="relative mb-8 flex flex-col items-center md:mb-10">
				<p className="mb-3 inline-flex items-center gap-1.5 text-caption text-white/55">
					<MousePointerClick className="size-3.5 text-link" aria-hidden />
					{tabPrompt}
				</p>
				<div
					role="tablist"
					aria-label="Platform capabilities"
					className="inline-flex max-w-full flex-wrap justify-center gap-1.5 rounded-[var(--rounded-lg)] border border-white/10 bg-white/[0.05] p-1.5 shadow-[var(--shadow-inset)] backdrop-blur-sm"
				>
					{visibleFeatures.map((feature) => {
						const active = activeId === feature.id;
						return (
							<button
								key={feature.id}
								type="button"
								role="tab"
								aria-selected={active}
								onClick={() => setActiveId(feature.id)}
								className={cn(
									"group inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-[var(--rounded-md)] px-3 py-2.5 text-[13px] outline-none transition-[background-color,color,box-shadow,transform] duration-200 focus-visible:ring-2 focus-visible:ring-link/40 sm:px-4 sm:py-2 sm:text-body-sm",
									active
										? "bg-white text-[#171717] shadow-[var(--shadow-elev-2)]"
										: "text-white/60 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white",
								)}
							>
								<span
									className={cn(
										"size-1.5 rounded-full transition-colors duration-200",
										active ? "bg-link" : "bg-white/30 group-hover:bg-link",
									)}
									aria-hidden
								/>
								{feature.pillLabel}
							</button>
						);
					})}
				</div>
			</div>

			<div className="showcase-spotlight relative overflow-hidden rounded-[var(--rounded-lg)] border border-primary/25 bg-[linear-gradient(145deg,color-mix(in_srgb,var(--link-bg-soft)_92%,var(--canvas)),color-mix(in_srgb,var(--canvas-soft)_88%,var(--canvas)))] p-4 shadow-[var(--shadow-elev-5)] sm:p-8 lg:p-10">
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.07] [background:radial-gradient(circle_at_12%_18%,var(--link),transparent_34%),radial-gradient(circle_at_88%_82%,var(--cyan),transparent_30%)]"
					aria-hidden
				/>
				<div
					className="signal-grid pointer-events-none absolute inset-0 opacity-[0.09]"
					aria-hidden
				/>
				<div
					className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-link/35 to-transparent"
					aria-hidden
				/>
				<div
					className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent"
					aria-hidden
				/>

				<div
					key={activeId}
					className={cn(
						"showcase-spotlight-content relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10",
						activeFeature.id === "daily-brief" ||
							activeFeature.id === "lenses"
							? "lg:items-center"
							: "lg:items-start",
					)}
				>
					<div className="relative flex flex-col">
						{activeFeature.badge ? (
							<span
								className={cn(
									"mb-4 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium tracking-[0.08em] uppercase shadow-[var(--shadow-inset)]",
									activeFeature.id === "daily-brief"
										? "border-cyan/25 bg-cyan/10 text-cyan"
										: "border-link/20 bg-link-bg-soft/80 text-link",
								)}
							>
								<span
									className={cn(
										"size-1.5 rounded-full",
										activeFeature.id === "daily-brief" ? "bg-cyan" : "bg-link",
									)}
									aria-hidden
								/>
								{activeFeature.badge}
							</span>
						) : null}
						{activeFeature.hideTitle ? null : (
							<h3
								className={cn(
									"text-display-md max-w-lg text-ink",
									activeFeature.highlights?.length ? "mb-4" : "mb-6",
								)}
							>
								{activeFeature.title.split("\n").map((line, index) => (
									<span key={line}>
										{index > 0 ? <br /> : null}
										{line}
									</span>
								))}
							</h3>
						)}
						<SpotlightDescription
							description={activeFeature.description}
							bulletSection={activeFeature.bulletSection}
							plainBodyParagraphs={activeFeature.plainBodyParagraphs}
							emphasizeOpening={activeFeature.hideTitle}
						/>
						{activeFeature.highlights?.length ? (
							<ShowcaseSpotlightHighlights
								highlights={activeFeature.highlights}
								accent={activeFeature.id === "daily-brief" ? "cyan" : "link"}
							/>
						) : null}
						{activeFeature.id === "daily-brief" ? (
							<div className="mt-5 flex flex-wrap gap-2">
								<span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas/70 px-3 py-1.5 text-body-sm text-body shadow-[var(--shadow-inset)]">
									<Mail className="size-3.5 text-link" aria-hidden />
									In your inbox
								</span>
								<span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas/70 px-3 py-1.5 text-body-sm text-body shadow-[var(--shadow-inset)]">
									<Headphones className="size-3.5 text-cyan" aria-hidden />
									Audio on the go
								</span>
							</div>
						) : null}
						{activeFeature.cta ? (
							<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
								<Button asChild size="lg" className="w-full sm:w-auto">
									<Link to={activeFeature.cta.href}>{activeFeature.cta.label}</Link>
								</Button>
								{activeFeature.cta.secondary ? (
									<Button
										asChild
										variant="outline"
										size="lg"
										className="w-full sm:w-auto"
									>
										<Link to={activeFeature.cta.secondary.href}>
											{activeFeature.id === "daily-brief" ? (
												<Play className="size-4 fill-current" aria-hidden />
											) : null}
											{activeFeature.cta.secondary.label}
										</Link>
									</Button>
								) : null}
							</div>
						) : null}
					</div>
					<ShowcaseSpotlightMedia feature={activeFeature} />
				</div>
			</div>

			{visibleFeatures.some((feature) => !feature.hideFromGrid) ? (
				<div className="grid gap-4 md:grid-cols-12 md:gap-5 lg:gap-6">
					{visibleFeatures
						.filter((feature) => !feature.hideFromGrid)
						.map((feature) => (
							<ShowcaseCard
								key={feature.id}
								feature={feature}
								active={activeId === feature.id}
								onSelect={() => setActiveId(feature.id)}
							/>
						))}
				</div>
			) : null}
		</section>
	);
}
