import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Album } from '@devmx/shared-api-interfaces';
import { AsyncPipe } from '@angular/common';
import { filter, map } from 'rxjs';

@Component({
  selector: 'devmx-album',
  templateUrl: './album.container.html',
  styleUrl: './album.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, AsyncPipe],
})
export class AlbumContainer {
  route = inject(ActivatedRoute);

  album$ = this.route.data.pipe(
    filter((data) => 'album' in data),
    map((data) => data['album'] as Album)
  );
}
