import { BehaviorSubject, debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { MediaMatcher } from '@angular/cdk/layout';

type LoaderMode = 'determinate' | 'indeterminate';

export class Layout {
  #mediaQuery: MediaQueryList;
  #mediaQueryListener: (ev: MediaQueryListEvent) => void;

  #mobileQuery = new BehaviorSubject(false);
  mobileQuery$ = this.#mobileQuery.asObservable();

  #component = new BehaviorSubject<ComponentPortal<unknown> | null>(null);
  component$ = this.#component.asObservable();

  #sidenav = new BehaviorSubject(false);
  sidenav$ = this.#sidenav.asObservable();

  #loader = new Subject<LoaderMode>();
  loader$ = this.#loader.asObservable().pipe(debounceTime(10), distinctUntilChanged());

  constructor(media: MediaMatcher, component: ComponentType<unknown> | null) {
    if (component) this.setComponent(component);

    this.#mediaQuery = media.matchMedia('(max-width: 600px)');

    this.#mediaQueryListener = (ev: MediaQueryListEvent) => {
      if (ev.matches) this.closeSidenav();
      this.#mobileQuery.next(ev.matches);
    };

    if (this.#mediaQuery.addEventListener) {
      this.#mediaQuery.addEventListener('change', this.#mediaQueryListener);
    }
  }

  setComponent<T>(component: ComponentType<T>) {
    this.#component.next(new ComponentPortal(component));
  }

  setLoader(mode: LoaderMode) {
    this.#loader.next(mode);
  }

  openSidenav() {
    this.#sidenav.next(true);
  }

  closeSidenav() {
    this.#sidenav.next(false);
  }

  toggleSidenav() {
    const { value } = this.#sidenav;
    this.#sidenav.next(!value);
  }

  destroy() {
    this.#mediaQuery.removeEventListener('change', this.#mediaQueryListener);
  }
}
