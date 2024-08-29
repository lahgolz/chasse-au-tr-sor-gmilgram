import Link from 'next/link';

export function Footer() {
	return (
		<footer className="py-6 md:px-8 md:py-0">
			<div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
				<p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
					Site fait par{' '}
					<Link className="font-medium underline underline-offset-4" href="https://github.com/lahgolz" target="_blank">
						Lahgolz
					</Link>
					. Le code source est disponible sur{' '}
					<Link
						className="font-medium underline underline-offset-4"
						href="https://github.com/lahgolz/chasse-au-tresor-gmilgram"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</Link>
					.
				</p>
			</div>
		</footer>
	);
}
