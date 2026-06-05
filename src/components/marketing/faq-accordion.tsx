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
				<AccordionItem key={item.question} value={`item-${index}`}>
					<AccordionTrigger className="text-body-md-strong text-left hover:no-underline">
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
