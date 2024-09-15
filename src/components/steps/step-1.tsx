import Image from 'next/image';
import Link from 'next/link';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

export function Step1() {
	return (
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
							<div className="flex flex-col gap-4">
								<h4 className="text-lg underline md:text-xl">Indices :</h4>
								<ol>
									<li>1. Un lien : https://giphy.com/gifs/ggM2mcRFtz1GDbrUrS</li>
									<li>2. La phrase : "Va chez Raymonde et demande lui une limonade dynamisée"</li>
								</ol>
								<h4 className="text-lg underline md:text-xl">Explications :</h4>
								<p>En tapant le lien sur un moteur de recherche, on est redirigé vers un gif :</p>
								<div className="relative h-72 md:h-96">
									<Image
										src="/etapes/1/indice.gif"
										layout="fill"
										alt="GIF donné par le lien"
										className="object-contain"
									/>
								</div>
								<p>
									Sur chaque frame du gif, on peut voir des screenshots de plusieurs endroits sur Google Maps et aussi
									un personnage avec les pouces baissés (pour signifier que ce n'est pas l'endroit recherché), ou un
									pouce levé sur une seule image (pour signifier que c'est l'endroit recherché).
								</p>
								<div className="relative h-72 md:h-96">
									<Image
										src="/etapes/1/bonne-frame.png"
										layout="fill"
										alt="Localisation qui nous intéresse sur le gif"
										className="object-contain"
									/>
								</div>
								<p>
									En cherchant sur Google Maps, on peut trouver l'endroit qui correspond à l'image ci-dessus : le pont
									entre La Rochelle et l'Île de Ré (merci Astri' pour la localisation Google Maps exacte).
								</p>
								<Button variant="link" asChild>
									<Link
										href="https://www.google.com/maps/@46.1658137,-1.2531377,3a,75y,310.92h,67.56t/data=!3m8!1e1!3m6!1sAF1QipMesjaN_d9aP0l6Fzyes2GwYeAOK85iZUvAR9Ef!2e10!3e11!6s%2F%2Flh5.ggpht.com%2Fp%2FAF1QipMesjaN_d9aP0l6Fzyes2GwYeAOK85iZUvAR9Ef%3Dw900-h600-k-no-pi22.44197316916059-ya80.36335818628612-ro0-fo100!7i7680!8i3840?coh=205409&entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D"
										target="_blank"
										rel="noopener noreferrer"
									>
										Lien vers la page Google Maps
									</Link>
								</Button>
								<p>
									Vu que la photo montre l'Île de Ré, il faut chercher dans cette zone. Pas plus d'info, on peut alors
									revenir au second indice. Une simple recherche "Chez Raymonde Île de Ré" sur Google Maps nous donne un
									seul restaurant du nom de Chez Ré Monde.
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
								<p>
									Il ne reste plus qu'à s'y rendre et commander une limonade dynamisée. Notre agent envoyé sur place n'a
									malheureusement pu avoir qu'une simple, mais excellente tout de même, limonade artisanale. Trois
									personnes étaient passées avant lui.
								</p>
								<h4 className="text-lg underline md:text-xl">Temps écoulé :</h4>
								<p>La crème a été trouvée en 2h environ !</p>
								<p className="mt-4">Article rédigé par Lahgolz</p>
							</div>
						</CardContent>
					</AccordionContent>
				</AccordionItem>
			</Card>
		</Accordion>
	);
}
