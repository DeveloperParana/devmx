import { Album, Authentication, Photo } from '@devmx/shared-api-interfaces';
import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthenticationFacade } from '@devmx/account-data-access';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { PhotoFacade } from '@devmx/album-data-access';
import { AsyncPipe } from '@angular/common';
import { filter, map, take } from 'rxjs';
import {
  PhotoComponent,
  PhotoViewerService,
  providePhotoViewer,
} from '@devmx/album-ui-shared';

@Component({
  selector: 'devmx-album',
  templateUrl: './album.container.html',
  styleUrl: './album.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, MatButtonModule, PhotoComponent, AsyncPipe],
  providers: [providePhotoViewer()],
})
export class AlbumContainer {
  route = inject(ActivatedRoute);

  authFacade = inject(AuthenticationFacade);

  photoFacade = inject(PhotoFacade);

  photoViewer = inject(PhotoViewerService);

  album$ = this.route.data.pipe(
    filter((data) => 'album' in data),
    map((data) => data['album'] as Album)
  );

  open(photo: Photo, auth: Authentication, album: string) {
    const photoViewer = this.photoViewer.open({ photo, auth });
    photoViewer.updated$.subscribe((updated) => {
      const tags = updated.tags ?? [];

      this.photoFacade
        .updateTags({ ...updated, tags, album })
        .pipe(take(1))
        .subscribe((data) => {
          photoViewer.updated(data);
        });
    });
  }

  updateTags = (album: string) => (photo?: Photo) => {
    if (photo && photo.tags) {
      const tags = photo.tags ?? [];
      this.photoFacade.updateTags({ ...photo, tags, album });
    }
  };
}
