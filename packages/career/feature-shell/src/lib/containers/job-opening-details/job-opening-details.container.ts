import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MarkedPipe, SafeHtmlPipe } from '@devmx/shared-ui-global/editor';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { JobOpeningOut } from '@devmx/shared-api-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
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
    CurrencyPipe,
    JobLevelPipe,
    JobModePipe,
    JobTypePipe,
    SafeHtmlPipe,
    MarkedPipe,
    PhotoPipe,
    AsyncPipe,
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
