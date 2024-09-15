import Image from 'next/image';
import Link from 'next/link';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

export function Step2() {
	return (
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
									Pour cette énigme, mieux vaut commencer par l'indice 2. En tapant le lien sur un moteur de recherche
									le lien qui nous est donné, on est redirigé vers une photo montrant une page d'un livre :
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
									Avec une petite recherche, on peut se rendre compte que la page en question est tirée du livre "Leçons
									de physique expérimentale, Tome 3" de M. l'abbé Nollet, de l'Académie royale des sciences & de la
									Société royale de Londres.
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
									tweet posté par G Milgram le 6 août dernier. Le tweet en question avait déjà été repéré par nos agents
									le jour où la chasse au trésor avait été lancée :
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
									Avec ce tweet, on peut essayer de faire comme le lien donné dans le deuxième indice en collant tous
									les mots ensemble pour les mettre dans un lien bit.ly, mais ça ne fonctionne pas. Cependant, un tweet
									en réponse au premier donne la marche à suivre :
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
									En recommençant la même opération, mais en enlevant les majuscules et les accents, on obtient un lien
									valide qui nous redirige vers une image :
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
									Comme indiqué sur l'image, cela devrait nous donner le nom de la ville où se trouve la bouquinerie. La
									personne à gauche de l'image a été identifié comme étant Jean-Luc Bideau et plus précisément le
									personnage qu'il joue dans la série H. On peut donc en déduire que la ville commence par la lettre H
									en plus d'avoir la lettre B en cinquième position. Après une petite recherche, on en a déduit que la
									ville en question était Hazebrouck. Cette ville possède deux bouquineries, Le Marais Du Livre et Les
									Trois Citrouilles. Malgré le fait que le premier propose bien le livre en question, il faut en fait se
									rendre au deuxième pour chercher le livre, mais sans demander l'aide du bouquiniste, attention ! Une
									fois trouvé, il ne reste plus qu'à essayer de l'acheter.
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
								<p className="mt-4">Article rédigé par Lahgolz</p>
							</div>
						</CardContent>
					</AccordionContent>
				</AccordionItem>
			</Card>
		</Accordion>
	);
}
