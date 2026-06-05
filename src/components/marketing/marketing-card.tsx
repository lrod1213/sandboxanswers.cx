import type { ReactNode } from "react";

import { cn } from "#/lib/utils.ts";

type MarketingCardVariant = "marketing" | "large" | "soft";

type MarketingCardProps = {
	variant?: MarketingCardVariant;
	className?: string;
	children: ReactNode;
};

const variantClasses: Record<MarketingCardVariant, string> = {
	marketing: "bg-canvas p-6 rounded-[var(--rounded-md)] elev-3",
	large: "bg-canvas p-8 rounded-[var(--rounded-lg)] elev-4",
	soft: "bg-canvas-soft p-6 rounded-[var(--rounded-md)] border border-hairline",
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
