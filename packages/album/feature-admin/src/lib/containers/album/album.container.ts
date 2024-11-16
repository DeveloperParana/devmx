import { HttpProgressEvent } from '@devmx/shared-api-interfaces/client';
import { Album, EditableAlbum } from '@devmx/shared-api-interfaces';
import { AlbumFacade, PhotoFacade } from '@devmx/album-data-access';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { SheetFacade } from '@devmx/shared-ui-global/sheet';
import { MatButtonModule } from '@angular/material/button';
import { UploadQueueComponent } from '../../components';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe, DatePipe } from '@angular/common';
import { HttpEventType } from '@angular/common/http';
import { concatMap, from, take, tap } from 'rxjs';
import { percent } from '@devmx/shared-util-data';
import { AlbumDetailsSheet } from '../../sheets';
import { ActivatedRoute } from '@angular/router';
import {
  resizeImage,
  ResizedImage,
  DropZoneDirective,
} from '@devmx/shared-ui-global/image';
import {
  inject,
  signal,
  Component,
  WritableSignal,
  ChangeDetectionStrategy,
} from '@angular/core';


interface PhotoProgress {
  photo: ResizedImage;
  progress: WritableSignal<number>;
}

@Component({
  selector: 'devmx-admin-album',
  templateUrl: './album.container.html',
  styleUrl: './album.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    UploadQueueComponent,
    DropZoneDirective,
    MatButtonModule,
    MatCardModule,
    IconComponent,
    AsyncPipe,
    DatePipe,
  ],
  standalone: true,
})
export class AlbumContainer {
  route = inject(ActivatedRoute);

  albumFacade = inject(AlbumFacade);

  photoFacade = inject(PhotoFacade);

  sheetFacade = inject(SheetFacade);

  async onDrop(album: string, files: File[], upload: UploadQueueComponent) {
    const total = files.length * 2;

    let loaded = 0;

    upload.opened.set(true);

    for (const file of files) {
      loaded += 1;

      upload.resizing.set(percent(loaded, total));

      const progress = signal(0);

      const photo = await resizeImage(file, 1280);

      upload.queue.set([...upload.queue(), { photo, progress }]);

      loaded += 1;

      upload.resizing.set(percent(loaded, total));
    }

    let completed = 0;

    const onQueueProgress = ({ photo, progress }: PhotoProgress) => {
      const onUploadProgress = ({ loaded, total, type }: HttpProgressEvent) => {
        if (type === HttpEventType.UploadProgress) {
          progress.set(percent(loaded, total ?? photo.size));
        }

        if (type === HttpEventType.Response) {
          completed += 1;

          if (completed >= upload.total()) {
            this.albumFacade.loadOne(album);
          }
        }
      };

      const { width, height } = photo;

      const data = { album, width, height, photo };

      return this.photoFacade.upload(data).pipe(tap(onUploadProgress));
    };

    from(upload.queue()).pipe(concatMap(onQueueProgress)).subscribe();
  }

  editAlbum(album: Album) {
    const sheet$ = this.sheetFacade.open<
      AlbumDetailsSheet,
      Album,
      EditableAlbum
    >(AlbumDetailsSheet, album);

    sheet$.pipe(take(1)).subscribe((result) => {
      if (result) {
        this.albumFacade.update(result);
      }
    });
  }
}
