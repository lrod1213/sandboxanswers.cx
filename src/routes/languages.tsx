import { createFileRoute } from "@tanstack/react-router";

import { ProductPage } from "#/components/pages/product-page.tsx";
import { languages } from "#/content/products.ts";
import { createProductRouteOptions } from "#/lib/product-route.ts";

export const Route = createFileRoute("/languages")({
	...createProductRouteOptions(languages),
	component: () => <ProductPage content={languages} />,
});
