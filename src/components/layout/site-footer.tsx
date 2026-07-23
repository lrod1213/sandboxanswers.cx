import { ClientOnly, Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

import {
	FooterSystemStatus,
	SystemStatusIndicator,
} from "#/components/layout/footer-system-status.tsx";
import { SiteLogo } from "#/components/layout/site-logo.tsx";
import { Button } from "#/components/ui/button.tsx";
import { footerColumns, primaryCta, type NavLink } from "#/config/pages.ts";
import { siteConfig } from "#/config/site.ts";
import { cn } from "#/lib/utils.ts";

function FooterNavLink({
	href,
	label,
	external,
	disabled,
	active,
	className,
}: NavLink & {
	active?: boolean;
	className?: string;
}) {
	const linkClassName = cn(
		"flex min-h-11 w-full items-center rounded-[var(--rounded-sm)] px-3 py-2.5 text-left text-body-md-strong transition-[color,background-color,transform] duration-200",
		active
			? "bg-link/15 text-link"
			: "text-white/75 hover:translate-x-0.5 hover:bg-white/[0.06] hover:text-white",
		disabled &&
			"cursor-not-allowed text-white/30 hover:translate-x-0 hover:bg-transparent hover:text-white/30",
		className,
	);

	if (disabled) {
		return <span className={linkClassName}>{label}</span>;
	}

	if (external) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={linkClassName}
			>
				{label}
			</a>
		);
	}

	return (
		<Link to={href} className={linkClassName}>
			{label}
		</Link>
	);
}

function FooterNavSection({
	label,
	children,
}: {
	label: string;
	children: ReactNode;
}) {
	return (
		<div>
			<p className="section-eyebrow mb-3">{label}</p>
			<div className="overflow-hidden rounded-[var(--rounded-md)] border border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
				{children}
			</div>
		</div>
	);
}

function FooterNavLinkList({ links }: { links: readonly NavLink[] }) {
	const pathname = useRouterState({ select: (state) => state.location.pathname });

	return (
		<ul className="divide-y divide-white/10">
			{links.map((link) => {
				const active =
					!link.external &&
					!link.disabled &&
					(pathname === link.href ||
						(link.href !== "/" && pathname.startsWith(`${link.href}/`)));

				return (
					<li key={link.href ?? link.label}>
						<FooterNavLink
							{...link}
							active={active}
							className="rounded-none"
						/>
					</li>
				);
			})}
		</ul>
	);
}

const footerSections = [
	{ label: "Product", links: footerColumns.product },
	{ label: "Company", links: footerColumns.company },
	{ label: "Resources", links: footerColumns.resources },
	{ label: "Legal", links: footerColumns.legal },
] as const;

export function SiteFooter() {
	return (
		<footer className="relative overflow-hidden bg-[var(--surface-inverse)] py-12 text-[var(--on-inverse)] md:py-[var(--spacing-5xl)]">
			<div
				className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-link/50 to-transparent"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_8%_0%,rgba(147,51,234,0.16),transparent_32%),radial-gradient(circle_at_92%_120%,rgba(94,234,212,0.1),transparent_30%)]"
				aria-hidden
			/>
			<div
				className="signal-grid pointer-events-none absolute inset-0 opacity-[0.07]"
				aria-hidden
			/>

			<div className="marketing-container relative">
				<div className="mb-10 flex flex-col gap-6 border-b border-white/10 pb-10 md:mb-14 md:flex-row md:items-end md:justify-between md:pb-12">
					<div className="max-w-md">
						<SiteLogo />
						<p className="mt-3 text-body-md leading-relaxed text-white/65">
							{siteConfig.tagline}
						</p>
					</div>
					<Button asChild size="lg" className="w-full sm:w-auto">
						<Link to={primaryCta.href}>{primaryCta.label}</Link>
					</Button>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
					{footerSections.map((section) => (
						<FooterNavSection key={section.label} label={section.label}>
							<FooterNavLinkList links={section.links} />
						</FooterNavSection>
					))}
				</div>

				<div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 md:mt-14 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-body-sm text-white/60">
						© {new Date().getFullYear()} {siteConfig.legalName}
					</p>
					<ClientOnly
						fallback={
							<a
								href={siteConfig.statusUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="footer-system-status inline-flex items-center gap-2.5 text-caption text-white/60 transition-colors hover:text-white"
							>
								<SystemStatusIndicator />
								System Status
							</a>
						}
					>
						<FooterSystemStatus />
					</ClientOnly>
				</div>
			</div>
		</footer>
	);
}
