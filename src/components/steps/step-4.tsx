import Image from 'next/image';
import Link from 'next/link';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Button } from '../ui/button';
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
							<div className="flex flex-col gap-4">
								<h4 className="text-lg underline md:text-xl">Indice :</h4>
								<p>Un lien vers une vidéo YouTube (inaccessible aujourd'hui) :</p>
								<Button variant="link" asChild>
									<Link href="https://www.youtube.com/watch?v=0D2tWXPM-vw" target="_blank" rel="noopener noreferrer">
										youtu.be/0D2tWXPM-vw
									</Link>
								</Button>
								<h4 className="text-lg underline md:text-xl">Explications :</h4>
								<p>
									Le titre de la vidéo est assez évocateur : il faut trouver (encore une fois) un lien bit.ly caché
									dedans. La vidéo montre le Château de Montbrun, situé dans la commune de Dournazac, avec une de ses
									tours qui s'envole telle une fusée. Nos enquêteur·rices se sont bien cassé·es la tête pour savoir à
									quoi cela pouvait correspondre, mais sans grand résultat. G Milgram, dans un élan de générosité (ou de
									troll, on ne sait pas) a alors pris la décision de donner le lien d'une autre vidéo YouTube
									(inaccessible aujourd'hui) en commentaire :
								</p>
								<div className="relative h-16 md:h-36">
									<Image
										src="/etapes/4/commentaire.png"
										layout="fill"
										alt="Commentaire de G Milgram"
										className="object-contain"
									/>
								</div>
								<Button variant="link" asChild>
									<Link href="https://www.youtube.com/watch?v=YNMPUZE1kgA" target="_blank" rel="noopener noreferrer">
										youtu.be/YNMPUZE1kgA
									</Link>
								</Button>
								<p>
									La vidéo semble être identique, mais plus courte d'une seconde. En regardant bien, on peut constater
									que par moment, des caractères sont présents en tout petit et presque transparents. En les
									rassemblant, on obtient ceci : 24canaaucunsens42. Si on essaye ce code dans un lien bit.ly
									(bit.ly/24canaaucunsens42), on tombe sur un espace Google Drive avec comme titre "Fausse piste ?"
									(aujourd'hui renommé "Cette Fausse piste est une vraie piste"). Ce drive ne contient qu'un seul
									fichier, une image :
								</p>
								<div className="relative h-72">
									<Image
										src="/etapes/4/image-google-drive.png"
										layout="fill"
										alt="Image contenu dans Google Drive"
										className="object-contain"
									/>
								</div>
								<p>
									Au premier coup d'œil, on peut déjà savoir qu'il va falloir concentrer les recherches à Limoges, mais
									c'est grand comme ville ! L'équation en dessous n'est pas directement une équation connue dans
									l'univers scientifique, mais elle peut faire penser à l'équation d'Albert Einstein exprimant la
									relation entre la masse et l'énergie d'une particule : <code>E=mc²</code>. C'est bien normal que cela
									nous fasse penser à cette équation, car c'est la même suite de caractères passée sous chiffrage César
									avec un décalage de 2. Il existe une rue à Limoges à l'effigie de ce grand scientifique, la rue Albert
									Einstein. L'image montre ensuite le logo de Google Street View, on sait donc où chercher (pas besoin
									de se déplacer) et en dessous encore, il est fait mention d'une pub, il faut faire attention à une
									date et mettre le tout en code de lien bit.ly. En parcourant la rue sur Google Street view, on peut
									trouver ce panneau publicitaire :
								</p>
								<Button variant="link" asChild>
									<Link
										href="https://www.google.fr/maps/@45.8150606,1.263916,3a,19.6y,237.42h,85.12t/data=!3m11!1e1!3m9!1smCrMpK_RokxdcjNXt5kk6A!2e0!5s20220601T000000!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DmCrMpK_RokxdcjNXt5kk6A%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D211.98198%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!9m2!1b1!2i35?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
										target="_blank"
										rel="noopener noreferrer"
									>
										Lien vers la page Google Street View
									</Link>
								</Button>
								<p>
									En prenant la date et ajoutant bit.ly devant, on obtient le lien suivant : bit.ly/samedi29octobre. Ce
									lien redirige vers une vidéo YouTube :
								</p>
								<Button variant="link" asChild>
									<Link href="https://www.youtube.com/watch?v=rME_oea6tjE" target="_blank" rel="noopener noreferrer">
										youtu.be/rME_oea6tjE
									</Link>
								</Button>
								<p>
									Dans cette vidéo, G Milgram nous donne rendez-vous à "la pierre mystère" afin de chercher (en montrant
									la petite bouille trop cute d'une loutre &lt;3). Une petite recherche sur Google Maps nous montre
									qu'il existe un lieu nommé "La pierre mystère" sur un circuit de randonnée situé à Compreignac :
								</p>
								<Button variant="link" asChild>
									<Link
										href="https://www.google.fr/maps/place/La+pierre+myst%C3%A8re/@45.9817049,1.2924566,17z/data=!3m1!4b1!4m6!3m5!1s0x47f94d4aa7decadb:0xadfd6aeefd8346c!8m2!3d45.981705!4d1.2973275!16s%2Fg%2F11ks4jc0yr?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
										target="_blank"
										rel="noopener noreferrer"
									>
										Lien vers la page Google Maps
									</Link>
								</Button>
								<p>
									Une de nos agents est partie sur le terrain et c'est trempée jusqu'à l'os qu'elle a fièrement annoncé
									avoir trouvé le pot de crème au petit matin :
								</p>
								<div className="relative h-72">
									<Image
										src="/etapes/4/creme-trouvee.jpg"
										layout="fill"
										alt="Photo de la crème trouvée"
										className="object-contain"
									/>
								</div>
								<p>Félicitations à Boann pour avoir récupéré la crème quantique n°4 !</p>
								<h4 className="text-lg underline md:text-xl">Temps écoulé :</h4>
								<p>La crème a été trouvée en 14h56 !</p>
								<p className="mt-4">Article rédigé par Lahgolz</p>
							</div>
						</CardContent>
					</AccordionContent>
				</AccordionItem>
			</Card>
		</Accordion>
	);
}
