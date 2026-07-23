import type { ReactNode } from "react";

import { MeshGradient } from "#/components/marketing/mesh-gradient.tsx";
import { cn } from "#/lib/utils.ts";

type MarketingHeroProps = {
	variant?: "centered" | "split";
	titleSize?: "default" | "home" | "product";
	eyebrow?: ReactNode;
	banner?: ReactNode;
	caption?: ReactNode;
	title: ReactNode;
	lead?: ReactNode;
	actions?: ReactNode;
	visual?: ReactNode;
	atmosphere?: boolean;
	className?: string;
};

const titleClasses = {
	default:
		"mx-auto mb-6 max-w-3xl text-[2rem] font-semibold leading-[1.05] tracking-[-0.05em] text-ink sm:text-display-xl md:text-[56px] md:leading-[56px] md:tracking-[-3px]",
	home: "mb-6 max-w-4xl text-[2rem] font-semibold leading-[0.95] tracking-[-0.06em] text-ink sm:text-[2.5rem] sm:leading-[0.92] sm:tracking-[-0.08em] md:text-[56px] md:tracking-[-3.4px] lg:text-[84px] lg:tracking-[-5.6px]",
	product:
		"mb-6 max-w-3xl text-[2.375rem] font-semibold leading-[0.95] tracking-[-0.06em] text-ink sm:text-[2.75rem] md:text-[52px] md:leading-[0.94] md:tracking-[-3px] lg:text-[72px] lg:tracking-[-4.8px]",
} as const;

export function MarketingHero({
	variant = "centered",
	titleSize = "default",
	eyebrow,
	banner,
	caption,
	title,
	lead,
	actions,
	visual,
	atmosphere = false,
	className,
}: MarketingHeroProps) {
	const content = (
		<>
			{banner}
			{caption ? (
				<p className="font-mono-caption mb-4 text-body">{caption}</p>
			) : null}
			{eyebrow ? <p className="section-eyebrow mb-4">{eyebrow}</p> : null}
			<h1 className={titleClasses[titleSize]}>{title}</h1>
			{lead ? (
				<p
					className={cn(
						"text-body-lg text-body",
						variant === "centered"
							? "mx-auto mb-8 max-w-[600px]"
							: "mb-8 max-w-xl",
					)}
				>
					{lead}
				</p>
			) : null}
			{actions}
		</>
	);

	return (
		<section className={cn("marketing-hero", className)}>
			<MeshGradient />
			{atmosphere ? (
				<div
					className="signal-grid marketing-hero-atmosphere opacity-70"
					aria-hidden
				/>
			) : null}
			<div className="marketing-container relative z-10">
				{variant === "centered" ? (
					<div className="mx-auto max-w-4xl text-center">{content}</div>
				) : (
					<div className="grid items-center gap-8 rise-in md:gap-14 lg:grid-cols-[0.95fr_1.05fr]">
						<div>{content}</div>
						{visual}
					</div>
				)}
			</div>
		</section>
	);
}
