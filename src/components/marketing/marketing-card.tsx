import type { ReactNode } from "react";

import { cn } from "#/lib/utils.ts";

type MarketingCardVariant = "marketing" | "large" | "soft";

type MarketingCardProps = {
	variant?: MarketingCardVariant;
	className?: string;
	children: ReactNode;
};

const variantClasses: Record<MarketingCardVariant, string> = {
	marketing:
		"relative overflow-hidden rounded-[var(--rounded-md)] bg-canvas p-6 text-ink elev-3 transition-[box-shadow,transform] duration-200 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-hairline-strong before:to-transparent hover:-translate-y-0.5 hover:elev-4",
	large:
		"relative overflow-hidden rounded-[var(--rounded-lg)] bg-canvas p-8 text-ink elev-4 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-hairline-strong before:to-transparent",
	soft: "relative overflow-hidden rounded-[var(--rounded-md)] bg-canvas-soft p-6 text-ink shadow-[var(--shadow-inset)] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-hairline before:to-transparent",
};

export function MarketingCard({
	variant = "marketing",
	className,
	children,
}: MarketingCardProps) {
	return (
		<div className={cn(variantClasses[variant], className)}>{children}</div>
	);
}
