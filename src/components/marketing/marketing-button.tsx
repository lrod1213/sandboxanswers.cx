import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "#/lib/utils.ts";

const marketingButtonVariants = cva(
	"inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/20 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				primary: "bg-ink text-white hover:bg-ink/90",
				secondary:
					"border border-hairline bg-canvas text-ink hover:bg-canvas-soft",
				ghost: "text-body hover:bg-canvas-soft hover:text-ink",
			},
			size: {
				lg: "h-12 px-6 text-base rounded-[100px]",
				md: "h-9 px-4 text-sm rounded-[100px]",
				sm: "h-7 px-3 text-sm rounded-[6px]",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "lg",
		},
	},
);

type MarketingButtonProps = VariantProps<typeof marketingButtonVariants> & {
	to?: string;
	href?: string;
	external?: boolean;
	className?: string;
	children: React.ReactNode;
} & Omit<ComponentProps<"button">, "children" | "type"> & {
		type?: ComponentProps<"button">["type"];
	};

export function MarketingButton({
	variant,
	size,
	to,
	href,
	external,
	className,
	children,
	type = "button",
	...props
}: MarketingButtonProps) {
	const classes = cn(marketingButtonVariants({ variant, size }), className);

	if (to) {
		return (
			<Link to={to} className={classes}>
				{children}
			</Link>
		);
	}

	if (href) {
		return (
			<a
				href={href}
				className={classes}
				{...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
			>
				{children}
			</a>
		);
	}

	return (
		<button type={type} className={classes} {...props}>
			{children}
		</button>
	);
}
