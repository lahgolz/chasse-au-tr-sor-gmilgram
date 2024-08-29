'use client';

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '../ui/navigation-menu';

export function NavbarDesktop() {
	return (
		<NavigationMenu id="navbar-desktop" className="ml-auto hidden lg:flex">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
						Acceuil
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink className={navigationMenuTriggerStyle()} href="/etapes">
						Étapes
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
