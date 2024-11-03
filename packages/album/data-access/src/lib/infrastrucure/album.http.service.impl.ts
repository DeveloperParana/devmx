import { AlbumService } from '@devmx/album-domain/client';
import { Env } from '@devmx/shared-api-interfaces/client';
import { Album } from '@devmx/shared-api-interfaces';
import { observer } from '@devmx/shared-util-data';
import { Observable, tap } from 'rxjs';
import {
  HttpClient,
  HttpService,
  HttpEventType,
} from '@devmx/shared-data-access';

export class AlbumHttpServiceImpl
  extends HttpService<Album>
  implements AlbumService
{
  progressMap = new Map<File, Observable<number>>();

  savePhoto(album: string, photo: File) {
    const url = [this.url, album, 'photo'];
    const data = new FormData();
    data.append('photo', photo);

    const progress = observer(0);

    this.progressMap.set(photo, progress.observe());

    return this.http
      .post<ProgressEvent>(url.join('/'), data, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(
        tap((event) => {
          if (typeof event.type === 'number') {
            if (event.type === HttpEventType.UploadProgress) {
              const value = event.total
                ? Math.round((100 * event.loaded) / event.total)
                : 0;
              progress.update(value);
            }
          }
        })
      );
  }
}

export function provideAlbumHttpService() {
  return {
    provide: AlbumService,
    useFactory(http: HttpClient, env: Env) {
      return new AlbumHttpServiceImpl(http, env, 'albums');
    },
    deps: [HttpClient, Env],
  };
}
