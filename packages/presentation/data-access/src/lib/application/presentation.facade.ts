import { createClientProvider, EntityFacade } from '@devmx/shared-data-access';
import {
  Presentation,
  EditablePresentation,
} from '@devmx/shared-api-interfaces';
import {
  CreatePresentationUseCase,
  FindPresentationByIDUseCase,
  FindPresentationsUseCase,
  DeletePresentationUseCase,
  UpdatePresentationUseCase,
} from '@devmx/presentation-domain/client';

export class PresentationFacade extends EntityFacade<Presentation> {
  constructor(
    private createPresentationUseCase: CreatePresentationUseCase,
    private findPresentationsUseCase: FindPresentationsUseCase,
    private findPresentationByIDUseCase: FindPresentationByIDUseCase,
    private updatePresentationUseCase: UpdatePresentationUseCase,
    private deletePresentationUseCase: DeletePresentationUseCase
  ) {
    super({
      response: { data: [], items: 0, pages: 0 },
      params: {
        page: 0,
        size: 10,
        filter: { title: '', format: '' },
      },
      selected: null,
    });
  }

  load() {
    this.onLoad(this.findPresentationsUseCase.execute(this.state.params));
  }

  loadOne(id: string) {
    this.onLoadOne(this.findPresentationByIDUseCase.execute(id));
  }

  create(data: EditablePresentation) {
    this.onCreate(this.createPresentationUseCase.execute(data));
  }

  update(data: EditablePresentation) {
    this.onUpdate(this.updatePresentationUseCase.execute(data));
  }

  delete(id: string) {
    this.onDelete(this.deletePresentationUseCase.execute(id));
  }
}

export function providePresentationFacade() {
  return createClientProvider(PresentationFacade, [
    CreatePresentationUseCase,
    FindPresentationsUseCase,
    FindPresentationByIDUseCase,
    UpdatePresentationUseCase,
    DeletePresentationUseCase,
  ]);
}
