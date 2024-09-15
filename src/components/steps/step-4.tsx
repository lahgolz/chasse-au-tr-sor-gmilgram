import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

export function Step4() {
	return (
		<Accordion className="w-full" type="single" collapsible asChild>
			<Card className="relative">
				<AccordionItem value="item-1">
					<AccordionTrigger className="py-0 pr-6 hover:no-underline">
						<CardHeader className="w-full">
							<CardTitle className="mr-auto text-lg md:text-2xl">4 - Haute-Vienne</CardTitle>
						</CardHeader>
					</AccordionTrigger>
					<AccordionContent className="pb-0">
						<CardContent>
							<Separator className="absolute top-16 w-[calc(100%-3rem)]" />
							<div className="grid gap-4 md:grid-cols-2">À venir.</div>
						</CardContent>
					</AccordionContent>
				</AccordionItem>
			</Card>
		</Accordion>
	);
}
