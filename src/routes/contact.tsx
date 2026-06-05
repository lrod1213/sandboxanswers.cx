import { createFileRoute } from "@tanstack/react-router";
import { MarketingCard } from "#/components/marketing/marketing-card.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { ContactForm } from "#/components/pages/contact-form.tsx";
import { createPageMeta } from "#/lib/seo.ts";

export const Route = createFileRoute("/contact")({
	head: () => ({
		meta: createPageMeta({
			title: "Contact Us",
			description:
				"Schedule a product tour or get in touch with the cxconnect.ai team.",
			path: "/contact",
		}),
	}),
	component: ContactPage,
});

function ContactPage() {
	return (
		<SectionBand className="pt-12">
			<div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
				<div>
					<p className="font-mono-caption mb-4 text-mute">Contact</p>
					<h1 className="text-display-lg mb-4">
						The Answer Layer. Now for CX Leaders.
					</h1>
					<p className="text-body-lg mb-6 text-body">
						Instant Answers. No bottlenecks. Just clarity.
					</p>
					<p className="text-body-md mb-8 text-body">
						Tell us about your team and we will follow up to schedule a
						conversation.
					</p>
					<blockquote className="border-l-2 border-hairline pl-4 text-body-md text-body italic">
						&ldquo;Very cool platform and demo. Are you sure this isn&apos;t our
						real data?&rdquo;
						<footer className="mt-3 text-body-sm not-italic">
							— Andres Jordão, CEO at Barkyn
						</footer>
					</blockquote>
				</div>
				<MarketingCard variant="large">
					<ContactForm />
				</MarketingCard>
			</div>
		</SectionBand>
	);
}
