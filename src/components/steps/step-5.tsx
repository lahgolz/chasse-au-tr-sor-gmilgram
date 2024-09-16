import Image from 'next/image';
import Link from 'next/link';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

export function Step5() {
	return (
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
							<div className="flex flex-col gap-4">
								<h4 className="text-lg underline md:text-xl">Indice :</h4>
								<p>Une bien étrange image :</p>
								<div className="relative h-20 md:h-64">
									<Image
										src="/etapes/5/indice.png"
										layout="fill"
										alt="Image donnée comme indice"
										className="object-contain"
									/>
								</div>
								<h4 className="text-lg underline md:text-xl">Explications :</h4>
								<p>
									Sur l'image donnée en indice, on peut déjà identifier une répétition d'images montrant une partie du
									visage d'une statue de Jules César. Nous avons ensuite une suite de caractères ne voulant rien dire
									(et non, ce n'est pas le code d'un lien bit.ly valide, mais vous allez voir). La suite de caractères
									est en fait chiffrée, mais qui dit chiffrage, dit algorithme de chiffrage et croyez-le ou non, mais G
									Milgram nous a donné tous les éléments concernant la méthode de chiffrage utilisée. En effet, la
									présence de Jules César implique que l'algorithme utilisé pour chiffrer cette suite de caractères est
									la méthode de chiffrage tirée de son nom : le code César (comme pour la précédente énigme). La
									répétition de la même image de Jules César 4 fois nous donne la clé de déchiffrage : un décalage de 4.
									En appliquant l'algorithme en sens inverse, on obtient le message suivant :{' '}
									<code>bitlyungrosleadershipvibratoire</code>. Ceci est en réalité un lien bit.ly mal formaté. En le
									formatant correctement, on obtient le lien suivant : <code>bit.ly/ungrosleadershipvibratoire</code>.
									En se rendant sur ce lien, on tombe une nouvelle fois sur un espace Google Drive contenant une image :
								</p>
								<div className="relative h-20 md:h-64">
									<Image
										src="/etapes/5/image-google-drive.png"
										layout="fill"
										alt="Image donnée sur le Google Drive"
										className="object-contain"
									/>
								</div>
								<p>
									Cette image nous donne trois informations différentes que nous allons décortiquer. Dans la première
									phrase, G Milgram nous dit que l'on doit le laisser nous "aiguiller" pour trouver le nom de la rue
									(sauf que vous aurez beau le laisser, vous n'aurez rien de plus sans recherche de votre part). En
									cherchant sur Google, on peut trouver qu'il existe une rue à Montpellier nommée "Rue de
									l'aiguillerie", quelle coïncidence ! Nous pouvons donc en déduire que c'est la rue que nous cherchons.
									La seconde phrase nous donne l'information sur le numéro de la rue : c'est un palindrome (une suite de
									caractères qui se lit de la même manière à l'endroit comme à l'envers, genre kayak, ou pour
									correspondre un peu plus au contexte ici, 22 ou 121). Pour la rue de l'aiguillerie, on compte une
									quinzaine de palindromes et vu que l'on n'a pas plus d'informations, fallait directement aller tester
									sur place ! Enfin, la dernière phrase nous donne la phrase à dire pour obtenir le prochain indice.
									Après quelques essais infructueux de la part de nos agents sur place, la bonne adresse a finalement
									été trouvée : 55 rue de l'aiguillerie, correspondant à l'adresse d'un bar à jeux nommé "AlphaNef". En
									prononçant la phrase donnée, nos agents se sont vus donner une carte contenant un lien bit.ly :
								</p>
								<div className="relative h-72">
									<Image
										src="/etapes/5/carte-url.png"
										layout="fill"
										alt="Image de la carte avec l'url inachevée"
										className="object-contain"
									/>
								</div>
								<p>
									Problème, quand on teste ce lien, celui-ci ne fonctionne pas. En effet, comme énoncé dans la phrase à
									prononcer, l'URL donnée est inachevée. C'est un peu tiré par les cheveux (en même temps, il y a
									littéralement écrit "relou cet URL" dans l'URL), mais en gros, pour la faire courte, il faut tout
									simplement ajouter la lettre "g" à la toute fin de l'URL pour obtenir le lien final :{' '}
									<code>bit.ly/hftgb87z9relouceturl55drjyxfg</code> (littéralement bravo au génie qui a eu cette idée).
									Ce lien redirige vers une vidéo YouTube :
								</p>
								<Button variant="link" asChild>
									<Link href="https://www.youtube.com/watch?v=PKPGJfSbn4Q" target="_blank" rel="noopener noreferrer">
										youtu.be/PKPGJfSbn4Q
									</Link>
								</Button>
								<p>Eh oui, une nouvelle photo de loutre avec une bouille trop mimi &lt;3</p>
								<p>
									Pardon, dans cette vidéo G Milgram nous félicite pour avoir trouvé la bonne URL (en même temps...) et
									nous demande ensuite de retourner à l'AlphaNef (le bar où la carte a été obtenue) et de prononcer la
									phrase "Salut, c'est pour relever le défi galactique, c'est possible ?" (avec pour information
									supplémentaire que l'on a le droit qu'à une seule tentative par jour, étrange). Nos précédents agents,
									fun fact, ils étaient 27, sont alors retournés faire un tour au bar et, en prononçant ladite phrase,
									se sont vu donner comme challenge de remporter un combat de Puissance 4 en deux manches gagnantes.
								</p>
								<div className="relative h-72">
									<Image
										src="/etapes/5/puissance-4.png"
										layout="fill"
										alt="Une partie de Puissance 4 endiablée !"
										className="object-contain"
									/>
								</div>
								<p>
									Ce fut une guerre acharnée avec moult batailles, mais après avoir fait tomber une demi-douzaine de nos
									vaillants soldats, l'ennemi a finalement posé genou à terre et s'est avoué vaincu avec une partie
									remportée 2-1 par l'un de nos agents !
								</p>
								<div className="relative h-32 md:h-72">
									<Image
										src="/etapes/5/creme-trouvee.png"
										layout="fill"
										alt="Photo de la crème trouvée"
										className="object-contain"
									/>
								</div>
								<p>Félicitations à Agoss pour avoir récupéré la crème quantique n°5 !</p>
								<h4 className="text-lg underline md:text-xl">Temps écoulé :</h4>
								<p>La crème a été trouvée en 1h30 !</p>
								<p className="mt-4">Article rédigé par Lahgolz (merci à Minarov pour son résumé des événements)</p>
							</div>
						</CardContent>
					</AccordionContent>
				</AccordionItem>
			</Card>
		</Accordion>
	);
}
