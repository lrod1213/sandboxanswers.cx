import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteFooter } from "#/components/layout/site-footer.tsx";
import { SiteHeader } from "#/components/layout/site-header.tsx";
import { CtaBand } from "#/components/marketing/cta-band.tsx";

type MarketingLayoutProps = {
	children: ReactNode;
	showCta?: boolean;
};

export function MarketingLayout({
	children,
	showCta = true,
}: MarketingLayoutProps) {
	const pathname = useRouterState({
		select: (state) => state.location.pathname,
	});
	const suppressCta =
		pathname === "/contact" ||
		pathname === "/success" ||
		pathname === "/hire-your-team" ||
		pathname === "/";

	return (
		<div className="flex min-h-screen flex-col">
			<SiteHeader />
			<main className="flex-1">{children}</main>
			{showCta && !suppressCta ? <CtaBand /> : null}
			<SiteFooter />
		</div>
	);
}
