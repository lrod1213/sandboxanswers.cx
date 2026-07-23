import { ClientOnly, Link, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";

import { SiteLogo } from "#/components/layout/site-logo.tsx";
import { Button } from "#/components/ui/button.tsx";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "#/components/ui/sheet.tsx";
import {
	companyLinks,
	featuresLink,
	integrationsLinks,
	primaryCta,
	resourcesLinks,
	solutionsLinks,
} from "#/config/pages.ts";
import { siteConfig } from "#/config/site.ts";
import { cn } from "#/lib/utils.ts";

function NavLinkItem({
	href,
	label,
	external,
	disabled,
	onClick,
}: {
	href: string;
	label: string;
	external?: boolean;
	disabled?: boolean;
	onClick?: () => void;
}) {
	if (disabled) {
		return (
			<span className="cursor-not-allowed text-body-sm text-body/70">
				{label}
			</span>
		);
	}

	if (external) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="text-body-sm text-body transition-colors hover:text-ink"
				onClick={onClick}
			>
				{label}
			</a>
		);
	}

	return (
		<Link
			to={href}
			className="inline-flex min-h-11 items-center text-body-sm text-body transition-colors hover:text-ink"
			onClick={onClick}
		>
			{label}
		</Link>
	);
}

/** Desktop dropdown — opens on hover, closes when pointer leaves the nav. */
function NavDropdown({
	menuId,
	activeMenu,
	onActivate,
	label,
	children,
}: {
	menuId: string;
	activeMenu: string | null;
	onActivate: (id: string) => void;
	label: string;
	children: ReactNode;
}) {
	const open = activeMenu === menuId;

	return (
		<div className="relative" onMouseEnter={() => onActivate(menuId)}>
			<button
				type="button"
				className="inline-flex cursor-default items-center gap-1 rounded-[var(--rounded-sm)] px-3 py-2 text-body-sm text-body transition-colors hover:bg-canvas-soft hover:text-ink focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/30"
				aria-haspopup="true"
				aria-expanded={open}
				tabIndex={-1}
			>
				{label}
				<span
					className={cn(
						"text-mute transition-transform duration-200",
						open && "rotate-180",
					)}
					aria-hidden
				>
					▾
				</span>
			</button>
			{/* pt-2 bridges the gap so hover is not lost moving into the panel */}
			<div
				className={cn(
					"absolute left-0 top-full z-50 pt-2 transition-[opacity,visibility] duration-150",
					open
						? "visible opacity-100"
						: "pointer-events-none invisible opacity-0",
				)}
			>
				<div className="min-w-[240px] rounded-[var(--rounded-md)] bg-canvas p-3 elev-5">
					{children}
				</div>
			</div>
		</div>
	);
}

function DesktopNav() {
	const [activeMenu, setActiveMenu] = useState<string | null>(null);
	const closeMenu = () => setActiveMenu(null);

	return (
		<nav
			className="hidden items-center gap-1 lg:flex"
			aria-label="Main navigation"
			onMouseLeave={closeMenu}
		>
			<NavDropdown
				menuId="solutions"
				activeMenu={activeMenu}
				onActivate={setActiveMenu}
				label="Solutions"
			>
				<ul className="flex flex-col gap-2">
					{solutionsLinks.map((link) => (
						<li key={link.href}>
							<Link
								to={link.href}
								className="block rounded-[var(--rounded-sm)] px-3 py-2 text-body-sm text-body hover:bg-canvas-soft hover:text-ink"
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</NavDropdown>

			{integrationsLinks.map((link) => (
				<Link
					key={link.href}
					to={link.href}
					className="rounded-[var(--rounded-sm)] px-3 py-2 text-body-sm text-body transition-colors hover:bg-canvas-soft hover:text-ink"
					onMouseEnter={closeMenu}
				>
					{link.label}
				</Link>
			))}

			<Link
				to={featuresLink.href}
				className="rounded-[var(--rounded-sm)] px-3 py-2 text-body-sm text-body transition-colors hover:bg-canvas-soft hover:text-ink"
				onMouseEnter={closeMenu}
			>
				{featuresLink.label}
			</Link>

			<NavDropdown
				menuId="resources"
				activeMenu={activeMenu}
				onActivate={setActiveMenu}
				label="Resources"
			>
				<ul className="flex flex-col gap-2">
					{resourcesLinks.map((link) => (
						<li key={link.label}>
							<NavLinkItem {...link} />
						</li>
					))}
				</ul>
			</NavDropdown>

			{companyLinks
				.filter((link) => link.href === "/about")
				.map((link) => (
					<Link
						key={link.href}
						to={link.href}
						className="rounded-[var(--rounded-sm)] px-3 py-2 text-body-sm text-body transition-colors hover:bg-canvas-soft hover:text-ink"
						onMouseEnter={closeMenu}
					>
						{link.label}
					</Link>
				))}
		</nav>
	);
}

function MobileNavLink({
	href,
	label,
	external,
	disabled,
	active,
	onClick,
	className,
}: {
	href: string;
	label: string;
	external?: boolean;
	disabled?: boolean;
	active?: boolean;
	onClick?: () => void;
	className?: string;
}) {
	const linkClassName = cn(
		"flex min-h-11 w-full items-center gap-2 rounded-[var(--rounded-sm)] px-3 py-2.5 text-left text-body-md-strong transition-[color,background-color,transform] duration-200",
		active
			? "bg-link-bg-soft text-link"
			: "text-ink hover:bg-canvas-soft hover:text-link",
		disabled && "cursor-not-allowed text-body/45 hover:bg-transparent hover:text-body/45",
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
				onClick={onClick}
			>
				{label}
			</a>
		);
	}

	return (
		<Link to={href} className={linkClassName} onClick={onClick}>
			{label}
		</Link>
	);
}

function MobileNavSection({
	label,
	children,
}: {
	label: string;
	children: ReactNode;
}) {
	return (
		<div>
			<p className="section-eyebrow mb-3">{label}</p>
			<div className="overflow-hidden rounded-[var(--rounded-md)] border border-hairline bg-canvas-soft/70 shadow-[var(--shadow-inset)]">
				{children}
			</div>
		</div>
	);
}

function MobileNavLinkList({
	links,
	pathname,
	onNavigate,
}: {
	links: typeof solutionsLinks;
	pathname: string;
	onNavigate: () => void;
}) {
	return (
		<ul className="divide-y divide-hairline">
			{links.map((link) => {
				const active =
					!link.external &&
					!link.disabled &&
					(pathname === link.href ||
						(link.href !== "/" && pathname.startsWith(`${link.href}/`)));

				return (
					<li key={link.href ?? link.label}>
						<MobileNavLink
							{...link}
							active={active}
							onClick={onNavigate}
							className="rounded-none"
						/>
					</li>
				);
			})}
		</ul>
	);
}

function MobileNav() {
	const [open, setOpen] = useState(false);
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const closeMenu = () => setOpen(false);
	const platformLinks = [...integrationsLinks, featuresLink];

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild className="lg:hidden">
				<Button
					variant="outline"
					size="icon"
					className="size-11 border-hairline-strong/80 bg-canvas/80 shadow-[var(--shadow-inset)] backdrop-blur-sm"
					aria-label="Open menu"
				>
					<Menu className="size-5" />
				</Button>
			</SheetTrigger>
			<SheetContent
				side="right"
				className="flex w-full max-w-[min(100vw,360px)] flex-col gap-0 overflow-hidden border-l border-hairline bg-canvas p-0 shadow-[var(--shadow-elev-5)] sm:max-w-sm [&>button]:top-5 [&>button]:right-5 [&>button]:flex [&>button]:size-10 [&>button]:items-center [&>button]:justify-center [&>button]:rounded-[var(--rounded-sm)] [&>button]:border [&>button]:border-hairline [&>button]:bg-canvas-soft [&>button]:opacity-100 [&>button]:shadow-[var(--shadow-inset)] [&>button]:transition-colors [&>button]:hover:bg-canvas-soft-2"
			>
				<div
					className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_100%_0%,rgba(147,51,234,0.08),transparent_42%),radial-gradient(circle_at_0%_100%,rgba(94,234,212,0.06),transparent_38%)]"
					aria-hidden
				/>
				<div
					className="signal-grid pointer-events-none absolute inset-0 opacity-[0.05]"
					aria-hidden
				/>

				<SheetHeader className="relative shrink-0 space-y-0 border-b border-hairline px-5 py-4 pr-16">
					<SheetTitle className="sr-only">{siteConfig.name} navigation</SheetTitle>
					<SiteLogo />
					<p className="mt-2 text-body-sm text-body">{siteConfig.tagline}</p>
				</SheetHeader>

				<nav
					className="relative flex-1 overflow-y-auto px-5 py-6"
					aria-label="Main navigation"
				>
					<div className="flex flex-col gap-8">
						<MobileNavSection label="Solutions">
							<MobileNavLinkList
								links={solutionsLinks}
								pathname={pathname}
								onNavigate={closeMenu}
							/>
						</MobileNavSection>

						<MobileNavSection label="Platform">
							<MobileNavLinkList
								links={platformLinks}
								pathname={pathname}
								onNavigate={closeMenu}
							/>
						</MobileNavSection>

						<MobileNavSection label="Resources">
							<MobileNavLinkList
								links={resourcesLinks}
								pathname={pathname}
								onNavigate={closeMenu}
							/>
						</MobileNavSection>

						<MobileNavSection label="Company">
							<MobileNavLinkList
								links={companyLinks.filter((link) => link.href === "/about")}
								pathname={pathname}
								onNavigate={closeMenu}
							/>
						</MobileNavSection>
					</div>
				</nav>

				<div className="relative shrink-0 border-t border-hairline bg-canvas-soft/90 px-5 py-5 backdrop-blur-sm">
					<Button asChild size="lg" className="w-full">
						<Link to={primaryCta.href} onClick={closeMenu}>
							{primaryCta.label}
						</Link>
					</Button>
					<p className="mt-3 text-center text-caption text-body">
						Executive customer intelligence for CX leaders
					</p>
				</div>
			</SheetContent>
		</Sheet>
	);
}

function MobileNavFallback() {
	return (
		<div className="flex items-center gap-2 lg:hidden">
			<Link
				to="/contact"
				className="text-body-sm font-medium text-link hover:underline"
			>
				Contact
			</Link>
		</div>
	);
}

export function SiteHeader() {
	const [hasScrolled, setHasScrolled] = useState(false);
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const logoHref = pathname === "/daily-signal" ? "/daily-signal" : "/";

	useEffect(() => {
		const updateScrolled = () => setHasScrolled(window.scrollY > 12);

		updateScrolled();
		window.addEventListener("scroll", updateScrolled, { passive: true });

		return () => window.removeEventListener("scroll", updateScrolled);
	}, []);

	return (
		<header
			className={cn(
				"fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
				hasScrolled
					? "bg-canvas/78 shadow-[var(--shadow-elev-2)] backdrop-blur-md"
					: "bg-transparent shadow-none backdrop-blur-none",
			)}
		>
			<div className="marketing-container flex h-16 items-center justify-between gap-4">
				<Link
					to={logoHref}
					className="inline-flex items-center text-ink transition-opacity hover:opacity-90"
				>
					<SiteLogo />
				</Link>

				<DesktopNav />

				<div className="hidden items-center gap-3 lg:flex">
					<Button asChild size="sm">
						<Link to={primaryCta.href}>{primaryCta.label}</Link>
					</Button>
				</div>

				<ClientOnly fallback={<MobileNavFallback />}>
					<MobileNav />
				</ClientOnly>
			</div>
		</header>
	);
}
