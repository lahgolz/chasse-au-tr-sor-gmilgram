import Image from 'next/image';
import Link from 'next/link';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

export function Step3() {
	return (
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
							<div className="flex flex-col gap-4">
								<h4 className="text-lg underline md:text-xl">Indice :</h4>
								<p>Un lien vers une vidéo YouTube :</p>
								<Button variant="link" asChild>
									<Link href="https://www.youtube.com/watch?v=hTM2xAgitMY" target="_blank" rel="noopener noreferrer">
										youtu.be/hTM2xAgitMY
									</Link>
								</Button>
								<h4 className="text-lg underline md:text-xl">Explications :</h4>
								<p>
									Il faut tout d'abord trouver un lien bit.ly caché dans la vidéo. Pour construire ce lien, il faut
									utiliser ce que dit G Milgram dedans :
								</p>
								<ul className="ml-8">
									<li>- Joli coup G</li>
									<li>- Merci</li>
									<li>- Bim</li>
									<li>- Pas envie de jouer finalement</li>
								</ul>
								<p>
									En collant tous les mots et en enlevant les majuscules, tout en ajoutant le début de lien bit.ly
									devant, on obtient : bit.ly/jolicoupgmercibimpasenviedejouerfinalement. En se rendant sur ce lien, on
									peut découvrir une image :
								</p>
								<div className="relative h-32 md:h-64">
									<Image
										src="/etapes/3/indice-video.jpg"
										layout="fill"
										alt="Image cachée dans la vidéo"
										className="object-contain"
									/>
								</div>
								<p>Cet indice nous donne deux choses différentes :</p>
								<ul>
									<li>1. Un lien avec texte à trou (comme nous avons pu rencontrer dans l'énigme précédente).</li>
									<li>2. Une information sur où la crème pourrait se trouver et comment l'obtenir.</li>
								</ul>
								<p>
									Prenons tout d'abord le premier point. Le visage de la personne sur l'image est une référence à une
									précédente vidéo de G Milgram :
								</p>
								<Button variant="link" asChild>
									<Link href="https://www.youtube.com/watch?v=xVysa_Wdj3c" target="_blank" rel="noopener noreferrer">
										L'incroyable business d'un PHYSICIEN !
									</Link>
								</Button>
								<p>
									Ce monsieur s'appelle Nassim Haramein, on se retrouve alors avec un début de phrase incomplète :
									"Nassim Haramein dit des ...". À en croire la vidéo, on peut en déduire que la phrase à trouver est
									"Nassim Haramein dit des bêtises", ce qui donne le lien suivant : bit.ly/nassimharameinditdesbetises.
									Ce lien redirige vers une autre image :
								</p>
								<p>Ce lien redirigeait vers cette image :</p>
								<div className="relative h-72 md:h-96">
									<Image
										src="/etapes/3/indice-lien-a-trou.jpg"
										layout="fill"
										alt="Image donnée par le lien à trou"
										className="object-contain"
									/>
								</div>
								<p>
									Pour décoder cette image, il faut remplacer chaque caractère par le caractère à sa gauche suivant sa
									position sur un clavier AZERTY, ce qui donne :
								</p>
								<code>
									<ul className="ml-8">
										<li>z -&gt; a</li>
										<li>, -&gt; n</li>
										<li>h -&gt; g</li>
										<li>r -&gt; e</li>
										<li>t -&gt; r</li>
										<li>d -&gt; s</li>
									</ul>
								</code>
								<p>
									La crème se trouve donc dans la ville d'Angers et selon l'information précédente sur l'état de la
									crème, sa température aurait été modifiée. Ici, il faut faire le lien avec de la crème glacée. La
									crème quantique se trouvait à la boutique "La Glacerie d'Anjou", une glacerie bien connue à Angers.
								</p>
								<div className="relative h-72 md:h-96">
									<Image
										src="/etapes/3/creme-trouvee.jpg"
										layout="fill"
										alt="Photo de la crème trouvée"
										className="object-contain"
									/>
								</div>
								<p>Félicitations à ACP pour avoir récupéré la crème quantique n°3 !</p>
								<h4 className="text-lg underline md:text-xl">Temps écoulé :</h4>
								<p>La crème a été trouvée en 1h07 !</p>
								<p className="mt-4">Article rédigé par Lucas Cimon et Lahgolz</p>
							</div>
						</CardContent>
					</AccordionContent>
				</AccordionItem>
			</Card>
		</Accordion>
	);
}
