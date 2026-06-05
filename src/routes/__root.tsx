import { TanStackDevtools } from "@tanstack/react-devtools";
import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { FirstTouchCapture } from "#/components/analytics/first-touch-capture.tsx";
import {
	GtmHeadScript,
	GtmNoScript,
} from "#/components/analytics/gtm-scripts.tsx";
import { PageViewTracker } from "#/components/analytics/page-view-tracker.tsx";
import { MarketingLayout } from "#/components/layout/marketing-layout.tsx";
import { OrganizationJsonLd } from "#/components/seo/organization-json-ld.tsx";
import { createPageHead } from "#/lib/seo.ts";
import PostHogProvider from "../integrations/posthog/provider";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => {
		const seo = createPageHead({});
		return {
			meta: seo.meta,
			links: [
				...seo.links,
				{
					rel: "stylesheet",
					href: appCss,
				},
				{
					rel: "icon",
					href: "/favicon.ico",
				},
				{
					rel: "manifest",
					href: "/manifest.json",
				},
			],
		};
	},
	shellComponent: RootDocument,
	component: RootComponent,
});

function RootComponent() {
	return (
		<MarketingLayout>
			<Outlet />
		</MarketingLayout>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<GtmHeadScript />
				<OrganizationJsonLd />
				<HeadContent />
			</head>
			<body>
				<GtmNoScript />
				<PostHogProvider>
					<FirstTouchCapture />
					<PageViewTracker />
					{children}
					<TanStackDevtools
						config={{
							position: "bottom-right",
						}}
						plugins={[
							{
								name: "Tanstack Router",
								render: <TanStackRouterDevtoolsPanel />,
							},
						]}
					/>
				</PostHogProvider>
				<Scripts />
			</body>
		</html>
	);
}
