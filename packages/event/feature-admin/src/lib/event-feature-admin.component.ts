import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'devmx-event-feature-admin',
  template: '<router-outlet />',
  styleUrl: './event-feature-admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  standalone: true,
})
export class EventFeatureAdminComponent {}
