import { ClientOnly, Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { useState, type ReactNode } from 'react'

import { MarketingButton } from '#/components/marketing/marketing-button.tsx'
import { Button } from '#/components/ui/button.tsx'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '#/components/ui/sheet.tsx'
import {
  primaryCta,
  resourcesLinks,
  siteConfig,
  solutionsLinks,
} from '#/config/site.ts'

function NavLinkItem({
  href,
  label,
  external,
  disabled,
  onClick,
}: {
  href: string
  label: string
  external?: boolean
  disabled?: boolean
  onClick?: () => void
}) {
  if (disabled) {
    return (
      <span className="cursor-not-allowed text-body-sm text-mute">{label}</span>
    )
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-body-sm text-body hover:text-ink"
        onClick={onClick}
      >
        {label}
      </a>
    )
  }

  return (
    <Link
      to={href}
      className="text-body-sm text-body hover:text-ink"
      onClick={onClick}
    >
      {label}
    </Link>
  )
}

/** SSR-safe dropdown using native details/summary (no Radix hooks). */
function NavDropdown({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <details className="group relative">
      <summary className="cursor-pointer list-none rounded-md px-3 py-2 text-body-sm text-body hover:text-ink [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-1">
          {label}
          <span
            className="text-mute transition-transform group-open:rotate-180"
            aria-hidden
          >
            ▾
          </span>
        </span>
      </summary>
      <div className="absolute left-0 top-full z-50 mt-1 min-w-[220px] rounded-md border border-hairline bg-canvas p-3 shadow-[var(--shadow-elev-4)]">
        {children}
      </div>
    </details>
  )
}

function DesktopNav() {
  return (
    <nav
      className="hidden items-center gap-1 lg:flex"
      aria-label="Main navigation"
    >
      <NavDropdown label="Solutions">
        <ul className="flex flex-col gap-2">
          {solutionsLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="block rounded-md px-2 py-1.5 text-body-sm hover:bg-canvas-soft"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </NavDropdown>

      <Link
        to="/data-connectors"
        className="rounded-md px-3 py-2 text-body-sm text-body hover:text-ink"
      >
        Integrations
      </Link>

      <NavDropdown label="Resources">
        <ul className="flex flex-col gap-2">
          {resourcesLinks.map((link) => (
            <li key={link.label}>
              <NavLinkItem {...link} />
            </li>
          ))}
        </ul>
      </NavDropdown>

      <Link
        to="/about"
        className="rounded-md px-3 py-2 text-body-sm text-body hover:text-ink"
      >
        About Us
      </Link>
    </nav>
  )
}

function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon" aria-label="Open menu">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px]">
        <SheetHeader>
          <SheetTitle>{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-6">
          <div>
            <p className="font-mono-caption mb-3 text-mute">Solutions</p>
            <div className="flex flex-col gap-3">
              {solutionsLinks.map((link) => (
                <NavLinkItem
                  key={link.href}
                  {...link}
                  onClick={() => setOpen(false)}
                />
              ))}
            </div>
          </div>
          <NavLinkItem
            href="/data-connectors"
            label="Integrations"
            onClick={() => setOpen(false)}
          />
          <div>
            <p className="font-mono-caption mb-3 text-mute">Resources</p>
            <div className="flex flex-col gap-3">
              {resourcesLinks.map((link) => (
                <NavLinkItem
                  key={link.label}
                  {...link}
                  onClick={() => setOpen(false)}
                />
              ))}
            </div>
          </div>
          <NavLinkItem
            href="/about"
            label="About Us"
            onClick={() => setOpen(false)}
          />
          <MarketingButton
            to={primaryCta.href}
            size="md"
            onClick={() => setOpen(false)}
          >
            {primaryCta.label}
          </MarketingButton>
        </nav>
      </SheetContent>
    </Sheet>
  )
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
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/95 backdrop-blur-sm">
      <div className="marketing-container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="text-body-md-strong text-ink">
          {siteConfig.name}
        </Link>

        <DesktopNav />

        <div className="hidden items-center gap-3 lg:flex">
          <MarketingButton to={primaryCta.href} size="sm">
            {primaryCta.label}
          </MarketingButton>
        </div>

        <ClientOnly fallback={<MobileNavFallback />}>
          <MobileNav />
        </ClientOnly>
      </div>
    </header>
  )
}
