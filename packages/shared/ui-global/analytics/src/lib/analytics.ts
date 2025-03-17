import { Gtag, GtagConfig, GtagEvent, GtagEventParams } from './interfaces';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

declare const gtag: Gtag;

export class Analytics {
  debug = false;

  constructor(private router: Router) {}

  startTracking() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const page_location = event.urlAfterRedirects;
        this.event('page_view', { page_location, debug_mode: this.debug });
      });
  }

  set(params: object) {
    gtag('set', params);
  }

  event(event: GtagEvent, params?: GtagEventParams) {
    gtag('event', event, params);
  }

  config(id: string, config?: GtagConfig) {
    gtag('config', id, config);
  }
}

export function provideAnalytics() {
  return {
    provide: Analytics,
    deps: [Router],
  };
}
