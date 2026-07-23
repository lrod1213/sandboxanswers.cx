import type { ReactNode } from "react";
import { SiteFooter } from "#/components/layout/site-footer.tsx";
import { SiteHeader } from "#/components/layout/site-header.tsx";

type MarketingLayoutProps = {
	children: ReactNode;
};

export function MarketingLayout({ children }: MarketingLayoutProps) {
	return (
		<div className="flex min-h-screen flex-col">
			<SiteHeader />
			<main className="flex-1">{children}</main>
			<SiteFooter />
		</div>
	);
}
