import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'devmx-career-feature-admin',
  template: `<router-outlet />`,
  styleUrl: './career-feature-admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  standalone: true,
})
export class CareerFeatureAdminComponent {}
