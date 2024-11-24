import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { JobOpening } from '@devmx/shared-api-interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { JobModePipe } from '@devmx/career-ui-shared';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'devmx-job-opening-card-list',
  templateUrl: './job-opening-card-list.component.html',
  styleUrl: './job-opening-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatListModule,
    IconComponent,
    RouterLink,
    JobModePipe,
  ],
  standalone: true,
})
export class JobOpeningCardListComponent {
  data = input<JobOpening[]>([]);
}
