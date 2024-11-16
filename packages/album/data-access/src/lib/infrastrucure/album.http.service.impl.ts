import { Env, HttpProgressEvent } from '@devmx/shared-api-interfaces/client';
import { AlbumService, UploadPhoto } from '@devmx/album-domain/client';
import { HttpClient, HttpService } from '@devmx/shared-data-access';
import { Album } from '@devmx/shared-api-interfaces';

export class AlbumHttpServiceImpl
  extends HttpService<Album>
  implements AlbumService
{
  upload({ album, photo, width, height, caption }: UploadPhoto) {
    const data = new FormData();
    data.append('file', photo);
    data.append('album', album);
    data.append('width', String(width));
    data.append('height', String(height));
    data.append('caption', caption ?? '');

    const url = [this.url, album, 'upload'];

    return this.http.post<HttpProgressEvent>(url.join('/'), data, {
      reportProgress: true,
      observe: 'events',
    });
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
