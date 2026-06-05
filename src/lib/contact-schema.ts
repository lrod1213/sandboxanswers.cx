import { contactInterestOptions } from "#/config/pages.ts";
import { z } from "zod";

const interestEnum = z.enum(contactInterestOptions);

export const contactSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.email("Enter a valid work email"),
	company: z.string().min(1, "Company is required"),
	role: z.string().min(1, "Role is required"),
	message: z.string().optional(),
	interests: z.array(interestEnum).min(1, "Select at least one interest"),
	attribution: z.record(z.string(), z.string()).optional(),
});

export type ContactSubmission = z.infer<typeof contactSchema>;

export const defaultContactValues = {
	name: "",
	email: "",
	company: "",
	role: "",
	message: "",
	interests: [] as string[],
};
