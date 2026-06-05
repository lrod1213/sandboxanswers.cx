import { Link } from "@tanstack/react-router";

import { footerColumns, siteConfig } from "#/config/site.ts";

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
		return <span className="text-body-sm text-mute">{label}</span>;
	}

	if (external) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="text-body-sm text-body hover:text-ink"
			>
				{label}
			</a>
		);
	}

	return (
		<Link to={href} className="text-body-sm text-body hover:text-ink">
			{label}
		</Link>
	);
}

export function SiteFooter() {
	return (
		<footer className="border-t border-hairline bg-canvas py-16">
			<div className="marketing-container">
				<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
					<div>
						<p className="font-mono-caption mb-4 text-mute">Product</p>
						<ul className="flex flex-col gap-3">
							{footerColumns.product.map((link) => (
								<li key={link.href}>
									<FooterLink {...link} />
								</li>
							))}
						</ul>
					</div>
					<div>
						<p className="font-mono-caption mb-4 text-mute">Company</p>
						<ul className="flex flex-col gap-3">
							{footerColumns.company.map((link) => (
								<li key={link.href}>
									<FooterLink {...link} />
								</li>
							))}
						</ul>
					</div>
					<div>
						<p className="font-mono-caption mb-4 text-mute">Resources</p>
						<ul className="flex flex-col gap-3">
							{footerColumns.resources.map((link) => (
								<li key={link.label}>
									<FooterLink {...link} />
								</li>
							))}
						</ul>
					</div>
					<div>
						<p className="font-mono-caption mb-4 text-mute">Legal</p>
						<ul className="flex flex-col gap-3">
							{footerColumns.legal.map((link) => (
								<li key={link.label}>
									<FooterLink {...link} />
								</li>
							))}
						</ul>
					</div>
				</div>
				<p className="mt-12 text-caption text-mute">
					© {new Date().getFullYear()} {siteConfig.legalName}
				</p>
			</div>
		</footer>
	);
}
