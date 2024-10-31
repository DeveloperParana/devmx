import { HttpClient, HttpService } from '@devmx/shared-data-access';
import { AlbumService } from '@devmx/album-domain/client';
import { Env } from '@devmx/shared-api-interfaces/client';
import { Album } from '@devmx/shared-api-interfaces';

export class AlbumHttpServiceImpl
  extends HttpService<Album>
  implements AlbumService {}

export function provideAlbumHttpService() {
  return {
    provide: AlbumService,
    useFactory(http: HttpClient, env: Env) {
      return new AlbumHttpServiceImpl(http, env, 'albums');
    },
    deps: [HttpClient, Env],
  };
}
