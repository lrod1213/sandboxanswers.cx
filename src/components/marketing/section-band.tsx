import type { ReactNode } from "react";

import { cn } from "#/lib/utils.ts";

type SectionBandVariant = "default" | "soft" | "dark" | "hero";

type SectionBandProps = {
	variant?: SectionBandVariant;
	className?: string;
	containerClassName?: string;
	children: ReactNode;
	id?: string;
};

const variantClasses: Record<SectionBandVariant, string> = {
	default: "bg-canvas text-ink",
	soft: "bg-canvas-soft text-ink",
	dark: "bg-ink text-white",
	hero: "bg-canvas text-ink",
};

export function SectionBand({
	variant = "default",
	className,
	containerClassName,
	children,
	id,
}: SectionBandProps) {
	return (
		<section
			id={id}
			className={cn(
				"py-16 md:py-24 lg:py-[var(--spacing-5xl)]",
				variantClasses[variant],
				className,
			)}
		>
			<div className={cn("marketing-container", containerClassName)}>
				{children}
			</div>
		</section>
	);
}
