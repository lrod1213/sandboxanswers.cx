import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type * as React from "react";

import { cn } from "#/lib/utils.ts";

const buttonMotion =
	"select-none transition-[color,background-color,border-color,box-shadow,transform,filter] duration-150 ease-out motion-safe:active:scale-[0.97] motion-reduce:active:scale-100";

const buttonVariants = cva(
	cn(
		"inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap text-sm font-medium outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
		buttonMotion,
	),
	{
		variants: {
			variant: {
				default: cn(
					"bg-cta text-cta-foreground shadow-[var(--shadow-elev-2)]",
					"hover:bg-cta/92 hover:shadow-[var(--shadow-elev-3)]",
					"active:bg-cta/84 active:shadow-[var(--shadow-inset)] active:brightness-[0.98]",
					"focus-visible:ring-cta/30",
				),
				destructive: cn(
					"bg-destructive text-destructive-foreground shadow-[var(--shadow-elev-2)]",
					"hover:bg-destructive/92 hover:shadow-[var(--shadow-elev-3)]",
					"active:bg-destructive/84 active:shadow-[var(--shadow-inset)] active:brightness-[0.98]",
					"focus-visible:ring-destructive/20",
				),
				outline: cn(
					"border border-input bg-card text-foreground shadow-[var(--shadow-inset)]",
					"hover:border-hairline-strong hover:bg-canvas-soft hover:text-ink hover:shadow-[var(--shadow-elev-2)]",
					"active:border-hairline-strong active:bg-canvas-soft-2 active:text-ink active:shadow-[var(--shadow-inset)] active:brightness-[0.99]",
				),
				secondary: cn(
					"bg-secondary text-secondary-foreground shadow-[var(--shadow-inset)]",
					"hover:bg-secondary/88 hover:shadow-[var(--shadow-elev-2)]",
					"active:bg-secondary/76 active:shadow-[var(--shadow-inset)] active:brightness-[0.98]",
				),
				ghost: cn(
					"text-body",
					"hover:bg-accent hover:text-accent-foreground",
					"active:bg-canvas-soft-2 active:text-ink",
				),
				link: cn(
					"text-link underline-offset-4 motion-safe:active:scale-100",
					"hover:text-link-deep hover:underline",
					"active:text-link-deep active:brightness-[0.95]",
				),
			},
			size: {
				default: "h-11 rounded-[var(--rounded-sm)] px-4 py-2 text-base has-[>svg]:px-3 sm:h-10 sm:text-sm",
				xs: "h-7 gap-1 rounded-[var(--rounded-sm)] px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
				sm: "h-8 gap-1.5 rounded-[var(--rounded-sm)] px-3 has-[>svg]:px-2.5",
				lg: "h-12 rounded-[var(--rounded-sm)] px-6 text-[1.0625rem] has-[>svg]:px-4 sm:text-base",
				icon: "size-10 rounded-[var(--rounded-sm)]",
				"icon-xs":
					"size-7 rounded-[var(--rounded-sm)] [&_svg:not([class*='size-'])]:size-3",
				"icon-sm": "size-8 rounded-[var(--rounded-sm)]",
				"icon-lg": "size-12 rounded-[var(--rounded-sm)]",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Button({
	className,
	variant = "default",
	size = "default",
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot.Root : "button";

	return (
		<Comp
			data-slot="button"
			data-variant={variant}
			data-size={size}
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
