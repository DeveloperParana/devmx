import { EntityService } from '@devmx/shared-api-interfaces/server';
import { Album } from '@devmx/shared-api-interfaces';

export abstract class AlbumsService extends EntityService<Album> {}