import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "#/components/ui/accordion.tsx";

export type FaqItem = {
	question: string;
	answer: string;
};

type FaqAccordionProps = {
	items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
	return (
		<Accordion type="single" collapsible className="w-full">
			{items.map((item, index) => (
				<AccordionItem
					key={item.question}
					value={`item-${index}`}
					className="group rounded-[var(--rounded-md)] px-4 transition-colors duration-200 hover:bg-canvas-soft/70"
				>
					<AccordionTrigger className="text-body-md-strong text-left hover:no-underline group-hover:text-ink data-[state=open]:text-link [&>svg]:transition-colors group-hover:[&>svg]:text-link data-[state=open]:[&>svg]:text-link">
						{item.question}
					</AccordionTrigger>
					<AccordionContent className="text-body-md text-body">
						{item.answer}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
