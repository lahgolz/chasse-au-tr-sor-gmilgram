import { MenuIcon } from 'lucide-react';

import { Button } from '../ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '../ui/navigation-menu';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet';

export function NavbarMobile() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="lg:hidden" title="Ouvrir le menu de navigation">
					<MenuIcon className="h-6 w-6" />
				</Button>
			</SheetTrigger>
			<SheetContent id="navbar-dialog-mobile" side="left">
				<SheetHeader className="text-2xl font-semibold">Chasse au G Milgram</SheetHeader>
				<NavigationMenu id="navbar-mobile" className="w-full max-w-full py-6" orientation="vertical">
					<NavigationMenuList className="flex w-full flex-col gap-4 space-x-0">
						<NavigationMenuItem>
							<SheetClose asChild>
								<NavigationMenuLink href="/" className="flex font-semibold">
									Accueil
								</NavigationMenuLink>
							</SheetClose>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<SheetClose asChild>
								<NavigationMenuLink href="/etapes" className="flex font-semibold">
									Étapes
								</NavigationMenuLink>
							</SheetClose>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</SheetContent>
		</Sheet>
	);
}
