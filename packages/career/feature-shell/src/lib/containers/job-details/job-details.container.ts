import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { JobLevelPipe, JobModePipe, JobTypePipe } from '../../pipes';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, CurrencyPipe, JsonPipe } from '@angular/common';
import { JobOut } from '@devmx/shared-api-interfaces';
import { PhotoPipe } from '@devmx/shared-ui-global';
import { filter, map } from 'rxjs';

@Component({
  selector: 'devmx-job-details',
  templateUrl: './job-details.container.html',
  styleUrl: './job-details.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
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
export class JobDetailsContainer {
  route = inject(ActivatedRoute);

  job$ = this.route.data.pipe(
    filter((data) => 'job' in data),
    map((data) => data['job'] as JobOut)
  );
}
