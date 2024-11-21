import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'devmx-event-feature-admin',
  template: `<router-outlet />`,
  styles: `
    :host {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
})
export class EventFeatureAdminComponent {}
