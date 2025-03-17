import { Analytics } from '@devmx/shared-ui-global/analytics';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { env } from '../envs/env';

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
  constructor() {
    if (env.prod) {
      const analytics = inject(Analytics);
      analytics.startTracking();
    }
  }
}
