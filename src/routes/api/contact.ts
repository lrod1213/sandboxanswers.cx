import { createFileRoute } from "@tanstack/react-router";

import { contactSchema } from "#/lib/contact-schema.ts";
import { submitContactLead } from "#/server/contact-lead.ts";

export const Route = createFileRoute("/api/contact")({
	server: {
		handlers: {
			POST: async ({ request }) => {
				try {
					const body = await request.json();
					const payload = contactSchema.parse(body);
					await submitContactLead(payload);
					return Response.json({ ok: true });
				} catch (error) {
					const message =
						error instanceof Error ? error.message : "Invalid submission";
					return Response.json({ ok: false, error: message }, { status: 400 });
				}
			},
		},
	},
});
