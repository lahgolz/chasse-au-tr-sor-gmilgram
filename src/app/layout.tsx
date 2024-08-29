import { StrictMode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from 'next-themes';

import './globals.css';

import { Footer } from '@/components/footer';
import Header from '@/components/header';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
	title: {
		template: '%s | Chasse au G Milgram',
		default: 'Chasse au G Milgram',
	},
	description:
		'Site internet créé pour répertorier les solutions et retracer les recherches de la chasse au trésor organisée par G Milgram.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={cn(inter.variable, 'font-sans antialiased')} suppressHydrationWarning>
				<StrictMode>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						<Header />
						<main className="flex min-h-dvh justify-center p-4 pt-24 md:min-h-[calc(100dvh-6rem)] lg:p-8 lg:pt-28">
							{children}
						</main>
						<Footer />
					</ThemeProvider>
				</StrictMode>
			</body>
		</html>
	);
}
