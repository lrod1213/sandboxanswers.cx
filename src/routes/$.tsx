import { createFileRoute, Link } from "@tanstack/react-router";

import { SectionBand } from "#/components/marketing/section-band.tsx";
import { Button } from "#/components/ui/button.tsx";
import { createPageMeta } from "#/lib/seo.ts";

export const Route = createFileRoute("/$")({
	head: () => ({
		meta: createPageMeta({
			title: "Page not found",
			path: "",
		}),
	}),
	component: NotFoundPage,
});

function NotFoundPage() {
	return (
		<SectionBand className="pt-[var(--spacing-5xl)]">
			<div className="mx-auto max-w-xl text-center">
				<p className="font-mono-caption mb-4 text-body">404</p>
				<h1 className="text-display-lg mb-4">Page not found.</h1>
				<p className="text-body-lg mb-8 text-body">
					The page you are looking for does not exist or has moved.
				</p>
				<Button asChild size="lg">
					<Link to="/">Go home</Link>
				</Button>
				<p className="mt-6 text-body-sm">
					<Link to="/contact" className="text-link hover:underline">
						Contact us
					</Link>
				</p>
			</div>
		</SectionBand>
	);
}
