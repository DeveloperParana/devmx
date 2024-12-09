import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AnalyticsService } from '@devmx/shared-ui-global/analytics';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Env } from '@devmx/shared-api-interfaces/client';
import { filter, map, pairwise, startWith } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'devmx-root',
  template: `<router-outlet />`,
  styles: `
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  `,
  imports: [RouterOutlet],
})
export class AppComponent {
  constructor(env: Env, analyticsService: AnalyticsService, router: Router) {
    const routes$ = router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects),
      startWith(''),
      pairwise()
    );

    routes$
      .pipe(
        filter(() => env.prod),
        takeUntilDestroyed()
      )
      .subscribe(([, toUrl]) => {
        analyticsService.locationChanged(toUrl);
      });
  }
}
