import { Env, HttpProgressEvent } from '@devmx/shared-api-interfaces/client';
import { HttpClient, HttpService } from '@devmx/shared-data-access';
import { PhotoService, UploadPhoto } from '@devmx/album-domain/client';
import { Photo } from '@devmx/shared-api-interfaces';

export class PhotoHttpServiceImpl
  extends HttpService<Photo>
  implements PhotoService
{
  upload({ photo, ...value }: UploadPhoto) {
    const data = new FormData();

    data.set('file', photo);

    return this.http.post<HttpProgressEvent>(this.url, value, {
      body: data,
      reportProgress: true,
      observe: 'events',
    });
  }
}

export function providePhotoHttpService() {
  return {
    provide: PhotoService,
    useFactory(http: HttpClient, env: Env) {
      return new PhotoHttpServiceImpl(http, env, 'photos');
    },
    deps: [HttpClient, Env],
  };
}
