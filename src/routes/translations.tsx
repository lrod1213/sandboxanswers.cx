import { createFileRoute } from "@tanstack/react-router";

import { ProductPage } from "#/components/pages/product-page.tsx";
import { translations } from "#/content/products.ts";
import { createProductRouteOptions } from "#/lib/product-route.ts";

export const Route = createFileRoute("/translations")({
	...createProductRouteOptions(translations),
	component: () => <ProductPage content={translations} />,
});
