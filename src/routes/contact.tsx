import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { CalEmbed } from "#/components/marketing/cal-embed.tsx";
import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { ContactForm } from "#/components/pages/contact-form.tsx";
import { Button } from "#/components/ui/button.tsx";
import { createPageHead } from "#/lib/seo.ts";

const tourHighlights = [
	"Quick discovery discussion",
	"Personalized use-cases",
	"Your questions, answered",
] as const;

export const Route = createFileRoute("/contact")({
	head: () =>
		createPageHead({
			title: "Contact Us",
			description:
				"Schedule a 20-minute product tour with the cxconnect.ai team or send us a message.",
			path: "/contact",
		}),
	component: ContactPage,
});

function ContactPage() {
	const [showForm, setShowForm] = useState(false);

	return (
		<SectionBand className="pt-[var(--spacing-5xl)]">
			<div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
				<div className="lg:pt-4">
					<p className="section-eyebrow mb-4">Contact</p>
					<h1 className="text-display-xl mb-6">
						The Answer Layer. Now for CX Leaders.
					</h1>
					<p className="text-body-lg mb-6 text-body">
						Instant Answers. No bottlenecks. Just clarity.
					</p>
					<p className="text-body-md mb-8 text-body">
						Schedule a 20-minute product tour with our team.
					</p>
					<ul className="mb-10 space-y-3">
						{tourHighlights.map((item) => (
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
						&ldquo;Very cool platform and demo. Are you sure this isn&apos;t our
						real data?&rdquo;
						<footer className="mt-4 text-body-sm-strong">
							— Andres Jordão, CEO at Barkyn
						</footer>
					</blockquote>
				</div>

				<div className="space-y-4">
					<MarketingCard variant="large" className="overflow-hidden p-0">
						{showForm ? (
							<div className="p-6 md:p-8">
								<p className="section-eyebrow mb-2">Contact us instead</p>
								<h2 className="text-display-sm mb-2">Send us a message</h2>
								<p className="text-body-sm mb-6 text-body">
									Prefer email? Tell us about your team and we&apos;ll follow up
									shortly.
								</p>
								<ContactForm />
							</div>
						) : (
							<div className="p-4 md:p-6">
								<p className="section-eyebrow mb-2">Book a demo</p>
								<h2 className="text-display-sm mb-4">
									Pick a time that works for you
								</h2>
								<CalEmbed />
							</div>
						)}
					</MarketingCard>

					<div className="text-center">
						{showForm ? (
							<Button
								type="button"
								variant="link"
								onClick={() => setShowForm(false)}
							>
								Schedule a demo instead
							</Button>
						) : (
							<Button
								type="button"
								variant="link"
								onClick={() => setShowForm(true)}
							>
								Contact us instead
							</Button>
						)}
					</div>
				</div>
			</div>
		</SectionBand>
	);
}
