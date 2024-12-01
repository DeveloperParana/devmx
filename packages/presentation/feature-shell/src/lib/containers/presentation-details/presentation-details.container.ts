import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MarkdownViewComponent } from '@devmx/shared-ui-global/markdown';
import { PresentationOut } from '@devmx/shared-api-interfaces';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { PhotoPipe } from '@devmx/shared-ui-global';
import { AsyncPipe } from '@angular/common';
import { filter, map } from 'rxjs';
import {
  PresentationFormatPipe,
  PresentationEmbedComponent,
} from '@devmx/presentation-ui-shared';

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
    MarkdownViewComponent,
    PresentationEmbedComponent,
    PresentationFormatPipe,
    PhotoPipe,
    AsyncPipe,
  ],
})
export class PresentationDetailsContainer {
  route = inject(ActivatedRoute);

  presentation$ = this.route.data.pipe(
    filter((data) => 'presentation' in data),
    map((data) => data['presentation'] as PresentationOut)
  );
}
