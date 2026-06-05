import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import posthog from "posthog-js";
import { z } from "zod";

import { MarketingButton } from "#/components/marketing/marketing-button.tsx";
import { Checkbox } from "#/components/ui/checkbox.tsx";
import { Input } from "#/components/ui/input.tsx";
import { Label } from "#/components/ui/label.tsx";
import { Textarea } from "#/components/ui/textarea.tsx";

const interestOptions = [
	"The Answer Layer",
	"Real-time Translations",
	"Data Connectors",
	"General inquiry",
] as const;

const contactSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.email("Enter a valid work email"),
	company: z.string().min(1, "Company is required"),
	role: z.string().min(1, "Role is required"),
	message: z.string().optional(),
	interests: z.array(z.string()).min(1, "Select at least one interest"),
});

type ContactValues = z.infer<typeof contactSchema>;

const defaultValues: ContactValues = {
	name: "",
	email: "",
	company: "",
	role: "",
	message: "",
	interests: [],
};

export function ContactForm() {
	const navigate = useNavigate();

	const form = useForm({
		defaultValues,
		validators: {
			onSubmit: contactSchema,
		},
		onSubmit: async ({ value }) => {
			console.info("[contact]", value);
			posthog.capture("contact_form_submitted", {
				company: value.company,
				interests: value.interests,
			});
			await navigate({ to: "/success" });
		},
	});

	return (
		<form
			className="space-y-6"
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				form.handleSubmit();
			}}
		>
			<form.Field name="name">
				{(field) => (
					<FieldGroup label="Name" id="name">
						<Input
							id="name"
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
						<FieldError errors={field.state.meta.errors} />
					</FieldGroup>
				)}
			</form.Field>

			<form.Field name="email">
				{(field) => (
					<FieldGroup label="Work email" id="email">
						<Input
							id="email"
							type="email"
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
						<FieldError errors={field.state.meta.errors} />
					</FieldGroup>
				)}
			</form.Field>

			<form.Field name="company">
				{(field) => (
					<FieldGroup label="Company" id="company">
						<Input
							id="company"
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
						<FieldError errors={field.state.meta.errors} />
					</FieldGroup>
				)}
			</form.Field>

			<form.Field name="role">
				{(field) => (
					<FieldGroup label="Role" id="role">
						<Input
							id="role"
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
						<FieldError errors={field.state.meta.errors} />
					</FieldGroup>
				)}
			</form.Field>

			<form.Field name="interests" mode="array">
				{(field) => (
					<fieldset>
						<legend className="text-body-sm-strong mb-3 block">
							What are you interested in?
						</legend>
						<div className="flex flex-col gap-3">
							{interestOptions.map((option) => {
								const checked = field.state.value.includes(option);
								return (
									<label
										key={option}
										className="flex cursor-pointer items-center gap-3 text-body-sm"
									>
										<Checkbox
											checked={checked}
											onCheckedChange={(v) => {
												if (v) {
													field.pushValue(option);
												} else {
													const idx = field.state.value.indexOf(option);
													if (idx >= 0) field.removeValue(idx);
												}
											}}
										/>
										{option}
									</label>
								);
							})}
						</div>
						<FieldError errors={field.state.meta.errors} />
					</fieldset>
				)}
			</form.Field>

			<form.Field name="message">
				{(field) => (
					<FieldGroup label="Message (optional)" id="message">
						<Textarea
							id="message"
							rows={4}
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
					</FieldGroup>
				)}
			</form.Field>

			<form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting]}>
				{([canSubmit, isSubmitting]) => (
					<MarketingButton type="submit" disabled={!canSubmit || isSubmitting}>
						{isSubmitting ? "Sending…" : "Get in touch"}
					</MarketingButton>
				)}
			</form.Subscribe>
		</form>
	);
}

function FieldGroup({
	label,
	id,
	children,
}: {
	label: string;
	id: string;
	children: React.ReactNode;
}) {
	return (
		<div className="space-y-2">
			<Label htmlFor={id}>{label}</Label>
			{children}
		</div>
	);
}

function FieldError({
	errors,
}: {
	errors: readonly ({ message?: string } | string | undefined)[];
}) {
	const message = errors
		.map((e) => (typeof e === "string" ? e : e?.message))
		.filter(Boolean)[0];
	if (!message) return null;
	return <p className="text-caption text-error">{message}</p>;
}
