import { ClientOnly, Link } from "@tanstack/react-router";

import { FooterSystemStatus, SystemStatusIndicator } from "#/components/layout/footer-system-status.tsx";
import { footerColumns } from "#/config/pages.ts";
import { siteConfig } from "#/config/site.ts";

function FooterLink({
	href,
	label,
	external,
	disabled,
}: {
	href: string;
	label: string;
	external?: boolean;
	disabled?: boolean;
}) {
	if (disabled) {
		return <span className="text-body-sm text-white/35">{label}</span>;
	}

	const className =
		"inline-flex w-fit text-body-sm text-white/60 transition-[color,transform] duration-200 hover:translate-x-0.5 hover:text-white";

	if (external) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={className}
			>
				{label}
			</a>
		);
	}

	return (
		<Link to={href} className={className}>
			{label}
		</Link>
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
		<footer className="relative overflow-hidden bg-[var(--surface-inverse)] py-[var(--spacing-5xl)] text-[var(--on-inverse)]">
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
				<div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
					{footerSections.map((section) => (
						<div key={section.label}>
							<p className="section-eyebrow mb-4">{section.label}</p>
							<ul className="flex flex-col gap-3">
								{section.links.map((link) => (
									<li key={link.href ?? link.label}>
										<FooterLink {...link} />
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-caption text-white/60">
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
