import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { ContactPage } from "#/components/pages/contact-page.tsx";
import { contactPageContent } from "#/content/contact.ts";
import { createPageHeadFromContent } from "#/lib/seo.ts";

const contactSearchSchema = z.object({
	mode: z.enum(["form"]).optional(),
});

export const Route = createFileRoute("/contact")({
	validateSearch: contactSearchSchema,
	head: () => createPageHeadFromContent(contactPageContent.seo),
	component: ContactPage,
});
