import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Steps() {
	return (
		<div className="container flex flex-col gap-4 md:gap-8">
			<div className="flex flex-col gap-4">
				<Accordion className="w-full" type="single" collapsible asChild>
					<Card className="relative">
						<AccordionItem value="item-1">
							<AccordionTrigger className="py-0 pr-6 hover:no-underline">
								<CardHeader className="w-full">
									<CardTitle className="mr-auto text-lg md:text-2xl">1 - Charente-Maritime</CardTitle>
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
				<Accordion className="w-full" type="single" collapsible asChild>
					<Card className="relative">
						<AccordionItem value="item-1">
							<AccordionTrigger className="py-0 pr-6 hover:no-underline">
								<CardHeader className="w-full">
									<CardTitle className="mr-auto text-lg md:text-2xl">2 - Le Nord</CardTitle>
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
				<Accordion className="w-full" type="single" collapsible asChild>
					<Card className="relative">
						<AccordionItem value="item-1">
							<AccordionTrigger className="py-0 pr-6 hover:no-underline">
								<CardHeader className="w-full">
									<CardTitle className="mr-auto text-lg md:text-2xl">3 - Pays de la Loire</CardTitle>
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
				<Accordion className="w-full" type="single" collapsible asChild>
					<Card className="relative">
						<AccordionItem value="item-1">
							<AccordionTrigger className="py-0 pr-6 hover:no-underline">
								<CardHeader className="w-full">
									<CardTitle className="mr-auto text-lg md:text-2xl">5 - Montpellier</CardTitle>
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
				<Accordion className="w-full" type="single" collapsible asChild>
					<Card className="relative">
						<AccordionItem value="item-1">
							<AccordionTrigger className="py-0 pr-6 hover:no-underline">
								<CardHeader className="w-full">
									<CardTitle className="mr-auto text-lg md:text-2xl">6 - Les Ardennes</CardTitle>
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
				<Accordion className="w-full" type="single" collapsible asChild>
					<Card className="relative">
						<AccordionItem value="item-1">
							<AccordionTrigger className="py-0 pr-6 hover:no-underline">
								<CardHeader className="w-full">
									<CardTitle className="mr-auto text-lg md:text-2xl">7 - Ariège</CardTitle>
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
				<Accordion className="w-full" type="single" collapsible asChild>
					<Card className="relative">
						<AccordionItem value="item-1">
							<AccordionTrigger className="py-0 pr-6 hover:no-underline">
								<CardHeader className="w-full">
									<CardTitle className="mr-auto text-lg md:text-2xl">8 - Île-de-France</CardTitle>
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
				<Accordion className="w-full" type="single" collapsible asChild>
					<Card className="relative">
						<AccordionItem value="item-1">
							<AccordionTrigger className="py-0 pr-6 hover:no-underline">
								<CardHeader className="w-full">
									<CardTitle className="mr-auto text-lg md:text-2xl">9 - Côte-d'Or</CardTitle>
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
				<Accordion className="w-full" type="single" collapsible asChild>
					<Card className="relative">
						<AccordionItem value="item-1">
							<AccordionTrigger className="py-0 pr-6 hover:no-underline">
								<CardHeader className="w-full">
									<CardTitle className="mr-auto text-lg md:text-2xl">10 - Nancy-Strasbourg</CardTitle>
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
				<Accordion className="w-full" type="single" collapsible asChild>
					<Card className="relative">
						<AccordionItem value="item-1">
							<AccordionTrigger className="py-0 pr-6 hover:no-underline">
								<CardHeader className="w-full">
									<CardTitle className="mr-auto text-lg md:text-2xl">11 - Indre-et-Loire</CardTitle>
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
				<Accordion className="w-full" type="single" collapsible asChild>
					<Card className="relative">
						<AccordionItem value="item-1">
							<AccordionTrigger className="py-0 pr-6 hover:no-underline">
								<CardHeader className="w-full">
									<CardTitle className="mr-auto text-lg md:text-2xl">12 - Bretagne</CardTitle>
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
				<Accordion className="w-full" type="single" collapsible asChild>
					<Card className="relative">
						<AccordionItem value="item-1">
							<AccordionTrigger className="py-0 pr-6 hover:no-underline">
								<CardHeader className="w-full">
									<CardTitle className="mr-auto text-lg md:text-2xl">13 - Suisse</CardTitle>
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
				<Accordion className="w-full" type="single" collapsible asChild>
					<Card className="relative">
						<AccordionItem value="item-1">
							<AccordionTrigger className="py-0 pr-6 hover:no-underline">
								<CardHeader className="w-full">
									<CardTitle className="mr-auto text-lg md:text-2xl">14 - Lyon</CardTitle>
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
			</div>
		</div>
	);
}
