import { Link } from "@tanstack/react-router";

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
		return <span className="text-body-sm text-body/70">{label}</span>;
	}

	if (external) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="text-body-sm text-body transition-colors hover:text-ink"
			>
				{label}
			</a>
		);
	}

	return (
		<Link
			to={href}
			className="text-body-sm text-body transition-colors hover:text-ink"
		>
			{label}
		</Link>
	);
}

export function SiteFooter() {
	return (
		<footer className="border-t border-hairline bg-canvas py-[var(--spacing-5xl)]">
			<div className="marketing-container">
				<div className="mb-12 flex flex-col justify-between gap-6 border-b border-hairline pb-12 lg:flex-row lg:items-end">
					<div>
						<p className="section-eyebrow mb-3">cxconnect.ai</p>
						<p className="max-w-md text-body-lg text-body">
							The answer layer for customer conversations, data connectors, and
							real-time multilingual support.
						</p>
					</div>
					<p className="text-caption text-body">
						© {new Date().getFullYear()} {siteConfig.legalName}
					</p>
				</div>
				<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
					<div>
						<p className="section-eyebrow mb-4">Product</p>
						<ul className="flex flex-col gap-3">
							{footerColumns.product.map((link) => (
								<li key={link.href}>
									<FooterLink {...link} />
								</li>
							))}
						</ul>
					</div>
					<div>
						<p className="section-eyebrow mb-4">Company</p>
						<ul className="flex flex-col gap-3">
							{footerColumns.company.map((link) => (
								<li key={link.href}>
									<FooterLink {...link} />
								</li>
							))}
						</ul>
					</div>
					<div>
						<p className="section-eyebrow mb-4">Resources</p>
						<ul className="flex flex-col gap-3">
							{footerColumns.resources.map((link) => (
								<li key={link.label}>
									<FooterLink {...link} />
								</li>
							))}
						</ul>
					</div>
					<div>
						<p className="section-eyebrow mb-4">Legal</p>
						<ul className="flex flex-col gap-3">
							{footerColumns.legal.map((link) => (
								<li key={link.label}>
									<FooterLink {...link} />
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
