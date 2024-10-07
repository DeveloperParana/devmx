import { LayoutSidenav, LayoutSidenavItem } from './sidenav';

export function provideLayoutSidenav(items: LayoutSidenavItem[]) {
  return {
    provide: LayoutSidenav,
    useFactory() {
      return new LayoutSidenav(items);
    },
  };
}
