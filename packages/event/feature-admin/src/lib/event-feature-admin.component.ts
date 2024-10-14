import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'devmx-event-feature-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-feature-admin.component.html',
  styleUrl: './event-feature-admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFeatureAdminComponent {}
