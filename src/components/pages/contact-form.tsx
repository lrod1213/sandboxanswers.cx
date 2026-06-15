import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import posthog from "posthog-js";
import { useState } from "react";

import { contactInterestOptions } from "#/config/pages.ts";
import { siteCtaBandExperiment } from "#/config/experiments.ts";
import { Button } from "#/components/ui/button.tsx";
import { Checkbox } from "#/components/ui/checkbox.tsx";
import { Input } from "#/components/ui/input.tsx";
import { Label } from "#/components/ui/label.tsx";
import { Textarea } from "#/components/ui/textarea.tsx";
import {
	contactSchema,
	defaultContactValues,
} from "#/lib/contact-schema.ts";
import { getCalAttributionConfig } from "#/lib/attribution.ts";

export function ContactForm() {
	const navigate = useNavigate();
	const [submitError, setSubmitError] = useState<string | null>(null);

	const form = useForm({
		defaultValues: defaultContactValues,
		validators: {
			onSubmit: contactSchema,
		},
		onSubmit: async ({ value }) => {
			setSubmitError(null);

			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					...value,
					attribution: getCalAttributionConfig(),
				}),
			});

			if (!response.ok) {
				const data = (await response.json().catch(() => null)) as {
					error?: string;
				} | null;
				setSubmitError(data?.error ?? "Something went wrong. Please try again.");
				return;
			}

			posthog.capture("contact_form_submitted", {
				company: value.company,
				interests: value.interests,
				cta_band_variant:
					posthog.getFeatureFlag(siteCtaBandExperiment.flagKey) ??
					siteCtaBandExperiment.defaultVariant,
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
						<div className="grid gap-3 sm:grid-cols-2">
							{contactInterestOptions.map((option) => {
								const checked = field.state.value.includes(option);
								const id = `interest-${option
									.toLowerCase()
									.replace(/[^a-z0-9]+/g, "-")}`;
								return (
									<label
										key={option}
										htmlFor={id}
										className="flex min-h-12 cursor-pointer items-center gap-3 rounded-[var(--rounded-sm)] border border-hairline bg-canvas px-3 text-body-sm shadow-[var(--shadow-inset)] transition-colors hover:bg-canvas-soft"
									>
										<Checkbox
											id={id}
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

			{submitError ? (
				<p className="text-caption text-error-deep">{submitError}</p>
			) : null}

			<form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting]}>
				{([canSubmit, isSubmitting]) => (
					<Button type="submit" size="lg" disabled={!canSubmit || isSubmitting}>
						{isSubmitting ? "Sending…" : "Send message"}
					</Button>
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
	return <p className="text-caption text-error-deep">{message}</p>;
}
