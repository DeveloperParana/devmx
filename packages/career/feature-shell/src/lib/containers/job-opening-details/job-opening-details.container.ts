import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe, JsonPipe } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { JobOpeningOut } from '@devmx/shared-api-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { PhotoPipe } from '@devmx/shared-ui-global';
import { filter, map } from 'rxjs';
import {
  JobLevelPipe,
  JobModePipe,
  JobTypePipe,
} from '@devmx/career-ui-shared';

@Component({
  selector: 'devmx-job-opening-details',
  templateUrl: './job-opening-details.container.html',
  styleUrl: './job-opening-details.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    IconComponent,
    IconComponent,
    CurrencyPipe,
    JobLevelPipe,
    JobModePipe,
    JobTypePipe,
    PhotoPipe,
    AsyncPipe,
    JsonPipe,
  ],
  standalone: true,
})
export class JobOpeningDetailsContainer {
  route = inject(ActivatedRoute);

  jobOpening$ = this.route.data.pipe(
    filter((data) => 'jobOpening' in data),
    map((data) => data['jobOpening'] as JobOpeningOut)
  );
}
