import { z } from "zod";

const clientEnvSchema = z.object({
	VITE_POSTHOG_KEY: z.string().optional(),
	VITE_POSTHOG_HOST: z.string().url().optional(),
	VITE_GTM_ID: z.string().optional(),
	VITE_CAL_LINK: z.string().optional(),
});

export const clientEnv = clientEnvSchema.parse(import.meta.env);

const serverEnvSchema = z.object({
	ATTIO_API_TOKEN: z.string().optional(),
});

export function getServerEnv() {
	return serverEnvSchema.parse(process.env);
}
