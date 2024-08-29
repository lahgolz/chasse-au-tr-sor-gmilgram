import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<div className="container flex flex-col gap-4 md:gap-8">
			<div className="flex flex-col gap-4">
				<p>
					Ce site internet a été créé pour répertorier les solutions et retracer les recherches de la chasse au trésor
					organisée par G Milgram. Vous trouverez ici les indices, les réponses aux énigmes ainsi que des photos et
					vidéos prisent sur place par des chercheurs (si jamais il y en a).
				</p>
				<p>Si jamais vous souhaitez participer, je vous invite à aller regarder cette vidéo de G Milgram :</p>
				<iframe
					className="mx-auto aspect-video w-full self-stretch sm:min-h-96 sm:w-auto"
					title="Ras le C*L ! J'arrête."
					src="https://www.youtube.com/embed/Px27VMUJQPM"
					allowFullScreen
					height="300"
				/>
				<p className="mt-4">
					Un serveur Discord a été créé spécialement pour l'occasion, n'hésitez pas à le rejoindre pour venir discuter
					avec les autres participants, partager vos recherches, vos résultats, vos photos et vidéos ! Vous pouvez aussi
					ajouter votre position à la carte communautaire pour indiquer les endroits où vous pouvez vous déplacer pour
					chercher les pots de crème quantique G&G.
				</p>
				<div className="flex w-full flex-col justify-center gap-4 md:flex-row">
					<Button variant="default" className="md:w-96" asChild>
						<Link className="py-6" href="https://discord.gg/k4xMfR8ns8" target="_blank" rel="noopener noreferrer">
							Rejoindre le Discord
						</Link>
					</Button>
					<Button variant="default" className="md:w-96" asChild>
						<Link
							className="py-6"
							href="https://umap.openstreetmap.fr/fr/map/la-carte-quantique-chasse-au-tresor-de-g-milgram_1108382"
							target="_blank"
							rel="noopener noreferrer"
						>
							Ouvrir la carte communautaire
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
