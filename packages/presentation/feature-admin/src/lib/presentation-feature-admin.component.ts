import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'devmx-presentation-feature-admin',
  template: `<router-outlet />`,
  styleUrl: './presentation-feature-admin.component.scss',
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PresentationFeatureAdminComponent {}
