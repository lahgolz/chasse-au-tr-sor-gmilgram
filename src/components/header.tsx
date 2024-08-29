import { NavbarDesktop } from './navbar/navbar-desktop';
import { NavbarMobile } from './navbar/navbar-mobile';
import { ThemeSwitch } from './theme-switch';

export default function Header() {
	return (
		<header className="fixed top-0 z-50 flex h-20 w-full shrink-0 items-center gap-4 border bg-card px-4 text-card-foreground shadow-sm md:px-6">
			<NavbarMobile />
			<h1 className="flex-grow text-2xl font-semibold">Chasse au G Milgram</h1>
			<NavbarDesktop />
			<ThemeSwitch />
		</header>
	);
}
