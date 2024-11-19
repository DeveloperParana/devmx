import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { JobLevelPipe, JobModePipe, JobTypePipe } from '../../pipes';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { JobOpening } from '@devmx/shared-api-interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'devmx-job-opening-card',
  templateUrl: './job-opening-card.component.html',
  styleUrl: './job-opening-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatListModule,
    IconComponent,
    JobModePipe,
    JobTypePipe,
    JobLevelPipe,
  ],
})
export class JobOpeningCardComponent {
  data = input.required<JobOpening>();

  discrete = input<boolean | ''>(false);

  get jobOpening() {
    return this.data();
  }
}
