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
											Sur chaque frame du gif, on peut voir des screenshots de plusieurs endroits sur Google Maps et
											aussi un personnage avec les pouces baissés (pour signifier que ce n'est pas l'endroit recherché),
											ou un pouce levé sur une seule image (pour signifier que c'est l'endroit recherché).
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
											En cherchant sur Google Maps, on peut trouver l'endroit qui correspond à l'image ci-dessus : le
											pont entre La Rochelle et l'Île de Ré (merci Astri' pour la localisation Google Maps exacte).
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
										<p>
											Il ne reste plus qu'à s'y rendre et commander une limonade dynamisée. Notre agent envoyé sur place
											n'a malheureusement pu avoir qu'une simple, mais excellente tout de même, limonade artisanale.
											Trois personnes étaient passées avant lui.
										</p>
										<h4 className="text-lg underline md:text-xl">Temps écoulé :</h4>
										<p>La crème a été trouvée en 2h environ !</p>
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
									<div className="flex flex-col gap-4">
										<h4 className="text-lg underline md:text-xl">Indices :</h4>
										<ol>
											<li>1. L'inscription : "X. Le 6 aout. (bit.ly/)"</li>
											<li>
												2. Un lien avec une phrase : bit.ly/cettepagesestechapeedunlivre (Cette page s'est échappée d'un
												livre. Va chez le bouquiniste et essaye d'acheter le livre sans l'aide du bouquiniste.)
											</li>
										</ol>
										<h4 className="text-lg underline md:text-xl">Explications :</h4>
										<p>
											Pour cette énigme, mieux vaut commencer par l'indice 2. En tapant le lien sur un moteur de
											recherche le lien qui nous est donné, on est redirigé vers une photo montrant une page d'un livre
											:
										</p>
										<div className="relative h-72 md:h-96">
											<Image
												src="/etapes/2/indice-page-livre.jpg"
												layout="fill"
												alt="Page du livre à trouver"
												className="object-contain"
											/>
										</div>
										<p>
											Avec une petite recherche, on peut se rendre compte que la page en question est tirée du livre
											"Leçons de physique expérimentale, Tome 3" de M. l'abbé Nollet, de l'Académie royale des sciences
											& de la Société royale de Londres.
										</p>
										<Button variant="link" asChild>
											<Link
												href="https://gallica.bnf.fr/ark:/12148/bpt6k5701347f/f50.item"
												target="_blank"
												rel="noopener noreferrer"
											>
												Lien pour consulter le livre
											</Link>
										</Button>
										<p>
											Maintenant qu'on a trouvé le livre, il faut ensuite trouver la bonne bouquinerie où chercher. Pour
											cela, on peut revenir au premier indice. Il faut déduire du premier indice qu'il faut chercher un
											tweet posté par G Milgram le 6 août dernier. Le tweet en question avait déjà été repéré par nos
											agents le jour où la chasse au trésor avait été lancée :
										</p>
										<div className="relative h-24 md:h-48">
											<Image
												src="/etapes/2/tweet-1.png"
												layout="fill"
												alt="Tweet de G Milgram du 6 août"
												className="object-contain"
											/>
										</div>
										<p>
											Avec ce tweet, on peut essayer de faire comme le lien donné dans le deuxième indice en collant
											tous les mots ensemble pour les mettre dans un lien bit.ly, mais ça ne fonctionne pas. Cependant,
											un tweet en réponse au premier donne la marche à suivre :
										</p>
										<div className="relative h-24 md:h-40">
											<Image
												src="/etapes/2/tweet-2.png"
												layout="fill"
												alt="Réponse au tweet de G Milgram"
												className="object-contain"
											/>
										</div>
										<p>
											En recommençant la même opération, mais en enlevant les majuscules et les accents, on obtient un
											lien valide qui nous redirige vers une image :
										</p>
										<div className="relative h-24 md:h-48">
											<Image
												src="/etapes/2/nom-de-ville.jpg"
												layout="fill"
												alt="Image donnée par le lien"
												className="object-contain"
											/>
										</div>
										<p>
											Comme indiqué sur l'image, cela devrait nous donner le nom de la ville où se trouve la
											bouquinerie. La personne à gauche de l'image a été identifié comme étant Jean-Luc Bideau et plus
											précisément le personnage qu'il joue dans la série H. On peut donc en déduire que la ville
											commence par la lettre H en plus d'avoir la lettre B en cinquième position. Après une petite
											recherche, on en a déduit que la ville en question était Hazebrouck. Cette ville possède deux
											bouquineries, Le Marais Du Livre et Les Trois Citrouilles. Malgré le fait que le premier propose
											bien le livre en question, il faut en fait se rendre au deuxième pour chercher le livre, mais sans
											demander l'aide du bouquiniste, attention ! Une fois trouvé, il ne reste plus qu'à essayer de
											l'acheter.
										</p>
										<div className="relative h-72 md:h-96">
											<Image
												src="/etapes/2/creme-trouvee.jpg"
												layout="fill"
												alt="Photo de la crème trouvée"
												className="object-contain"
											/>
										</div>
										<p>Félicitations à Avistew pour avoir récupéré la crème quantique n°2 !</p>
										<h4 className="text-lg underline md:text-xl">Temps écoulé :</h4>
										<p>La crème a été trouvée en 1h20 !</p>
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
											<Link
												href="https://www.youtube.com/watch?v=hTM2xAgitMY"
												target="_blank"
												rel="noopener noreferrer"
											>
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
											devant, on obtient : bit.ly/jolicoupgmercibimpasenviedejouerfinalement. En se rendant sur ce lien,
											on peut découvrir une image :
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
											Prenons tout d'abord le premier point. Le visage de la personne sur l'image est une référence à
											une précédente vidéo de G Milgram :
										</p>
										<Button variant="link" asChild>
											<Link
												href="https://www.youtube.com/watch?v=xVysa_Wdj3c"
												target="_blank"
												rel="noopener noreferrer"
											>
												L'incroyable business d'un PHYSICIEN !
											</Link>
										</Button>
										<p>
											Ce monsieur s'appelle Nassim Haramein, on se retrouve alors avec un début de phrase incomplète :
											"Nassim Haramein dit des ...". À en croire la vidéo, on peut en déduire que la phrase à trouver
											est "Nassim Haramein dit des bêtises", ce qui donne le lien suivant :
											bit.ly/nassimharameinditdesbetises. Ce lien redirige vers une autre image :
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
											Pour décoder cette image, il faut remplacer chaque caractère par le caractère à sa gauche suivant
											sa position sur un clavier AZERTY, ce qui donne :
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
											crème quantique se trouvait à la boutique "La Glacerie d'Anjou", une glacerie bien connue à
											Angers.
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
