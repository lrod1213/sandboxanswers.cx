import { Link, getRouteApi } from "@tanstack/react-router";

import { CalEmbed } from "#/components/marketing/cal-embed.tsx";
import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { ContactForm } from "#/components/pages/contact-form.tsx";
import { Button } from "#/components/ui/button.tsx";
import { contactPageContent } from "#/content/contact.ts";

const contactRoute = getRouteApi("/contact");

export function ContactPage() {
	const { mode } = contactRoute.useSearch();
	const navigate = contactRoute.useNavigate();
	const showForm = mode === "form";
	const content = contactPageContent;

	return (
		<SectionBand className="pt-[var(--spacing-5xl)]">
			<div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
				<div className="lg:pt-4">
					<p className="section-eyebrow mb-4">{content.hero.eyebrow}</p>
					<h1 className="text-display-xl mb-6">{content.hero.title}</h1>
					<p className="text-body-lg mb-6 text-body">{content.hero.lead}</p>
					<p className="text-body-md mb-8 text-body">{content.hero.sublead}</p>
					<ul className="mb-10 space-y-3">
						{content.tourHighlights.map((item) => (
							<li
								key={item}
								className="flex items-center gap-3 text-body-md text-body"
							>
								<span
									className="size-1.5 shrink-0 rounded-full bg-primary"
									aria-hidden
								/>
								{item}
							</li>
						))}
					</ul>
					<blockquote className="rounded-[var(--rounded-lg)] bg-canvas-soft p-6 text-body-md text-body shadow-[var(--shadow-inset)]">
						&ldquo;{content.testimonial.quote}&rdquo;
						<footer className="mt-4 text-body-sm-strong">
							— {content.testimonial.author}, {content.testimonial.role}
						</footer>
					</blockquote>
				</div>

				<div className="space-y-4">
					<MarketingCard variant="large" className="overflow-hidden p-0">
						{showForm ? (
							<div className="p-6 md:p-8">
								<p className="section-eyebrow mb-2">
									{content.form.eyebrow}
								</p>
								<h2 className="text-display-sm mb-2">{content.form.title}</h2>
								<p className="text-body-sm mb-6 text-body">{content.form.lead}</p>
								<ContactForm />
							</div>
						) : (
							<div className="p-4 md:p-6">
								<p className="section-eyebrow mb-2">{content.cal.eyebrow}</p>
								<h2 className="text-display-sm mb-4">{content.cal.title}</h2>
								<CalEmbed />
							</div>
						)}
					</MarketingCard>

					<div className="text-center">
						{showForm ? (
							<Button
								type="button"
								variant="link"
								onClick={() => navigate({ search: { mode: undefined } })}
							>
								{content.form.switchToCal}
							</Button>
						) : (
							<Button
								type="button"
								variant="link"
								onClick={() => navigate({ search: { mode: "form" } })}
							>
								{content.cal.switchToForm}
							</Button>
						)}
					</div>
				</div>
			</div>
		</SectionBand>
	);
}
