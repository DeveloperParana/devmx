import { input, Component, ChangeDetectionStrategy } from '@angular/core';
import { JobLevelPipe, JobModePipe, JobTypePipe } from '../../pipes';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe, NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { JobOut } from '@devmx/shared-api-interfaces';
import { PhotoPipe } from '@devmx/shared-ui-global';

@Component({
  selector: 'devmx-job-card',
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    IconComponent,
    CurrencyPipe,
    JobLevelPipe,
    JobModePipe,
    JobTypePipe,
    PhotoPipe,
    NgClass,
  ],
  standalone: true,
})
export class JobCardComponent {
  data = input.required<JobOut>();

  get job() {
    return this.data();
  }
}
