import { createClientProvider, EntityFacade } from '@devmx/shared-data-access';
import { Album, EditableAlbum } from '@devmx/shared-api-interfaces';
import {
  CreateAlbumUseCase,
  DeleteAlbumUseCase,
  FindAlbumByIDUseCase,
  FindAlbumsUseCase,
  UpdateAlbumUseCase,
} from '@devmx/album-domain/client';

export class AlbumFacade extends EntityFacade<Album> {
  constructor(
    private createAlbumUseCase: CreateAlbumUseCase,
    private findAlbumsUseCase: FindAlbumsUseCase,
    private findAlbumByIdUseCase: FindAlbumByIDUseCase,
    private updateAlbumUseCase: UpdateAlbumUseCase,
    private deleteAlbumUseCase: DeleteAlbumUseCase
  ) {
    super({
      response: { data: [], items: 0, pages: 0 },
      params: {
        page: 0,
        size: 10,
        filter: { title: '' },
      },
      selected: null,
    });
  }

  load() {
    this.onLoad(this.findAlbumsUseCase.execute(this.state.params));
  }

  loadOne(id: string) {
    this.onLoadOne(this.findAlbumByIdUseCase.execute(id));
  }

  create(data: EditableAlbum) {
    this.onCreate(this.createAlbumUseCase.execute(data));
  }

  update(data: EditableAlbum) {
    this.onUpdate(this.updateAlbumUseCase.execute(data));
  }

  delete(id: string) {
    this.onDelete(this.deleteAlbumUseCase.execute(id));
  }
}

export function provideAlbumFacade() {
  return createClientProvider(AlbumFacade, [
    CreateAlbumUseCase,
    FindAlbumsUseCase,
    FindAlbumByIDUseCase,
    UpdateAlbumUseCase,
    DeleteAlbumUseCase,
  ]);
}
