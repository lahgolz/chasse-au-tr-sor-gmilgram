import Image from 'next/image';
import Link from 'next/link';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
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
									<div className="grid gap-4">
										<h4 className="text-lg underline md:text-xl">Indices :</h4>
										<ol>
											<li>Un lien : https://giphy.com/gifs/ggM2mcRFtz1GDbrUrS</li>
											<li>La phrase : "Va chez Raymonde et demande lui une limonade dynamisée"</li>
										</ol>
										<h4 className="text-lg underline md:text-xl">Réponses :</h4>
										<p>En tapant le lien sur un moteur de recherche, on est redirigé vers un gif :</p>
										<div className="relative h-96">
											<Image
												src="/etapes/1/indice.gif"
												layout="fill"
												alt="GIF donné par le lien"
												className="object-contain"
											/>
										</div>
										<p>
											Sur chaque frame du gif, on peut voir des screenshots de plusieurs endroits sur Google Maps et
											aussi un personnage avec les pouces baissés (pour signifier que ce n'est pas l'endroit recherché),
											ou un pouce levé sur une seule image (pour signifier que c'est l'endroit recherché).
										</p>
										<div className="relative h-96">
											<Image
												src="/etapes/1/bonne-frame.png"
												layout="fill"
												alt="Localisation qui nous intéresse sur le gif"
												className="object-contain"
											/>
										</div>
										<p>
											En cherchant sur Google Maps, on peut trouver l'endroit qui correspond à l'image ci-dessus : le
											pont entre La Rochelle et l'Île de Ré.
										</p>
										<Button variant="link" asChild>
											<Link
												href="https://www.google.fr/maps/@46.1734202,-1.2343992,3a,75y,322.66h,80.82t/data=!3m8!1e1!3m6!1sAF1QipOAvaXgANleX9bSBZdN-kmoKFKJIffOk1rq92Gl!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOAvaXgANleX9bSBZdN-kmoKFKJIffOk1rq92Gl%3Dw203-h100-k-no-pi0.41481084-ya274.81506-ro-2.0760534-fo100!7i7680!8i3840?coh=205409&entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D"
												target="_blank"
												rel="noopener noreferrer"
											>
												Lien vers la page Google Maps
											</Link>
										</Button>
										<p>
											Vu que la photo montre l'Île de Ré, il faut chercher dans cette zone. Pas plus d'info, on peut
											alors revenir au second indice. Une simple recherche "Chez Raymonde Île de Ré" sur Google Maps
											nous donne un seul restaurant du nom de Chez Ré Monde.
										</p>
										<Button variant="link" asChild>
											<Link
												href="https://www.google.fr/maps/place/Chez+R%C3%A9+Monde/@46.1587475,-1.2718845,17z/data=!3m2!4b1!5s0x4803fe2e0eb5214b:0x753057ed899db4bb!4m6!3m5!1s0x4803fe2e03f24003:0x3f643e3da66efd3a!8m2!3d46.1587475!4d-1.2718845!16s%2Fg%2F11cn12fprc?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D"
												target="_blank"
												rel="noopener noreferrer"
											>
												Lien vers la page Google Maps
											</Link>
										</Button>
										<p>Il ne reste plus qu'à s'y rendre et commander une limonade dynamisée.</p>
									</div>
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
