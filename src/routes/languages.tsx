import { createFileRoute } from "@tanstack/react-router";

import { ProductPage } from "#/components/pages/product-page.tsx";
import { languages } from "#/content/products.ts";
import { createPageMeta } from "#/lib/seo.ts";

export const Route = createFileRoute("/languages")({
	head: () => ({
		meta: createPageMeta({
			title: languages.seo.title,
			description: languages.seo.description,
			path: "/languages",
		}),
	}),
	component: () => <ProductPage content={languages} />,
});
