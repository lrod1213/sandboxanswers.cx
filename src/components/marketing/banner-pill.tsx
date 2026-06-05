import type { ReactNode } from "react";

import { cn } from "#/lib/utils.ts";

type BannerPillProps = {
	children: ReactNode;
	className?: string;
};

export function BannerPill({ children, className }: BannerPillProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center rounded-full bg-canvas-soft px-3 py-1 text-body-sm text-body",
				className,
			)}
		>
			{children}
		</span>
	);
}
