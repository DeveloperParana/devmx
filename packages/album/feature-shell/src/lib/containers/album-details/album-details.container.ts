import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Album } from '@devmx/shared-api-interfaces';
import { AsyncPipe, DatePipe } from '@angular/common';
import { filter, map } from 'rxjs';

@Component({
  selector: 'devmx-album-details',
  templateUrl: './album-details.container.html',
  styleUrl: './album-details.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    IconComponent,
    AsyncPipe,
    DatePipe,
  ],
})
export class AlbumDetailsContainer {
  route = inject(ActivatedRoute);

  album$ = this.route.data.pipe(
    filter((data) => 'album' in data),
    map((data) => data['album'] as Album)
  );
}
