import { Sidenav, SidenavItem } from './sidenav';

export function provideSidenav(items: SidenavItem[]) {
  return {
    provide: Sidenav,
    useFactory() {
      return new Sidenav(items);
    },
  };
}
