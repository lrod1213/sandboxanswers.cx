import { createFileRoute } from "@tanstack/react-router";

import { ProductPage } from "#/components/pages/product-page.tsx";
import { translations } from "#/content/products.ts";
import { createPageHead } from "#/lib/seo.ts";

export const Route = createFileRoute("/translations")({
	head: () =>
		createPageHead({
			title: translations.seo.title,
			description: translations.seo.description,
			path: "/translations",
		}),
	component: () => <ProductPage content={translations} />,
});
