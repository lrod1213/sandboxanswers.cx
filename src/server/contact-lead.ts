import { getServerEnv } from "#/config/env.ts";
import type { ContactSubmission } from "#/lib/contact-schema.ts";

export async function submitContactLead(payload: ContactSubmission) {
	const env = getServerEnv();

	if (env.ATTIO_API_TOKEN) {
		// TODO: Create or update Attio person/company records when CRM mapping is finalized.
		console.info("[contact-lead:attio-ready]", {
			email: payload.email,
			company: payload.company,
		});
	} else {
		console.info("[contact-lead]", payload);
	}

	return { ok: true as const };
}
