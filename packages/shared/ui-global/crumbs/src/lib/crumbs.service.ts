import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

export interface Breadcrumb {
  path: string | string[];
  text: string;
}

export class CrumbsService {
  #breadcrumbs = new BehaviorSubject<Breadcrumb[]>([]);
  breadcrumbs$ = this.#breadcrumbs.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const { root } = this.router.routerState.snapshot;
        const breadcrumbs: Breadcrumb[] = [];
        this.#addBreadcrumb([], breadcrumbs, root);
        this.#breadcrumbs.next(breadcrumbs);
      });
  }

  #addBreadcrumb(
    parentUrl: string[],
    breadcrumbs: Breadcrumb[],
    route: ActivatedRouteSnapshot | null
  ) {
    if (route) {
      const url = parentUrl.concat(route.url.map((url) => url.path));

      if ('breadcrumb' in route.data) {
        const breadcrumb = route.data['breadcrumb'];
        const isFactory = typeof route.data['breadcrumb'] === 'function';
        const text = isFactory ? breadcrumb(route.data) : breadcrumb;

        const path = '/' + url.join('/');
        breadcrumbs.push({ path, text });
      }

      this.#addBreadcrumb(url, breadcrumbs, route.firstChild);
    }
  }
}
