import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PresentationFormatPipe } from '@devmx/presentation-ui-shared';
import { PhotoPipe, StateNamePipe } from '@devmx/shared-ui-global';
import { PresentationOut } from '@devmx/shared-api-interfaces';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AsyncPipe } from '@angular/common';
import { filter, map } from 'rxjs';

@Component({
  selector: 'devmx-presentation-details',
  templateUrl: './presentation-details.container.html',
  styleUrl: './presentation-details.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    IconComponent,
    PresentationFormatPipe,
    StateNamePipe,
    PhotoPipe,
    AsyncPipe,
  ],
  standalone: true,
})
export class PresentationDetailsContainer {
  route = inject(ActivatedRoute);

  presentation$ = this.route.data.pipe(
    filter((data) => 'presentation' in data),
    map((data) => data['presentation'] as PresentationOut)
  );
}
