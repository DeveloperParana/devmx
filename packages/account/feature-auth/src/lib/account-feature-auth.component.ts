import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'devmx-account-feature-auth',
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
  standalone: true,
})
export class AccountFeatureAuthComponent {}
