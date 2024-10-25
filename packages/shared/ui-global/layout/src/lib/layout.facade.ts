import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { AccountRole } from '@devmx/shared-api-interfaces';
import { SectionHeaderOptions } from './interfaces';
import { MediaMatcher } from '@angular/cdk/layout';
import { navLinksValidator } from './validators';
import { forceAsync, State } from '@devmx/shared-util-data';
import { SectionHeader } from './models';

interface SidenavState {
  start: boolean;
  end: boolean;
}

export interface LayoutState {
  loader: boolean;
  mobile: boolean;
  sidenav: SidenavState;
  sections: SectionHeader[];
  component: ComponentPortal<unknown> | null;
}

export class LayoutFacade extends State<LayoutState> {
  loader$ = this.select((state) => state.loader);

  mobile$ = this.select((state) => state.mobile);

  sidenav$ = this.select((state) => state.sidenav);

  sidenavStart$ = this.select((state) => state.sidenav.start);

  sidenavEnd$ = this.select((state) => state.sidenav.end);

  component$ = this.select((state) => state.component);

  sections$ = this.select((state) => state.sections);

  #mediaQuery: MediaQueryList;
  #mediaQueryListener: (ev: MediaQueryListEvent) => void;

  constructor(
    media: MediaMatcher,
    private sections: SectionHeaderOptions[] = []
  ) {
    super({
      loader: false,
      mobile: false,
      component: null,
      sections: [],
      sidenav: {
        start: false,
        end: false,
      },
    });

    this.#mediaQuery = media.matchMedia('(max-width: 600px)');

    this.#mediaQueryListener = (ev: MediaQueryListEvent) => {
      if (ev.matches) this.setSidenav({ start: false });
      this.setMobile(ev.matches);
    };

    this.setMobile(this.#mediaQuery.matches);

    forceAsync(() => {
      if (this.#mediaQuery.matches) {
        this.setSidenav({ start: false });
      }
    }, 500);

    this.#mediaQuery.addEventListener('change', this.#mediaQueryListener);
  }

  loadNavLinks(roles: AccountRole) {
    this.setState({ sections: navLinksValidator(this.sections, roles) });
  }

  resetNavLinks() {
    this.setState({ sections: [] });
  }

  setLoader(loader: boolean) {
    this.setState({ loader });
  }

  setMobile(mobile: boolean) {
    this.setState({ mobile });
  }

  setComponent<T>(type: ComponentType<T>) {
    const component = new ComponentPortal(type);
    this.setState({ component });
  }

  resetComponent() {
    this.setState({ component: null });
  }

  setSidenav(state: Partial<SidenavState>) {
    const { sidenav } = this.state;
    this.setState({ sidenav: { ...sidenav, ...state } });
  }

  destroyListener() {
    this.#mediaQuery.removeEventListener('change', this.#mediaQueryListener);
  }
}
