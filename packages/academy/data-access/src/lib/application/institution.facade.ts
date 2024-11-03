import { createClientProvider, EntityFacade } from '@devmx/shared-data-access';
import { Institution, EditableInstitution } from '@devmx/shared-api-interfaces';
import {
  CreateInstitutionUseCase,
  DeleteInstitutionUseCase,
  FindInstitutionByIDUseCase,
  FindInstitutionsUseCase,
  UpdateInstitutionUseCase,
} from '@devmx/academy-domain/client';

export class InstitutionFacade extends EntityFacade<Institution> {
  constructor(
    private createInstitutionUseCase: CreateInstitutionUseCase,
    private findInstitutionsUseCase: FindInstitutionsUseCase,
    private findInstitutionByIdUseCase: FindInstitutionByIDUseCase,
    private updateInstitutionUseCase: UpdateInstitutionUseCase,
    private deleteInstitutionUseCase: DeleteInstitutionUseCase
  ) {
    super({
      response: { data: [], items: 0, pages: 0 },
      params: {
        page: 0,
        size: 10,
        filter: { name: '' },
      },
      selected: null,
    });
  }

  load() {
    this.onLoad(this.findInstitutionsUseCase.execute(this.state.params));
  }

  loadOne(id: string) {
    this.onLoadOne(this.findInstitutionByIdUseCase.execute(id));
  }

  create(data: EditableInstitution) {
    this.onCreate(this.createInstitutionUseCase.execute(data));
  }

  update(data: EditableInstitution) {
    this.onUpdate(this.updateInstitutionUseCase.execute(data));
  }

  delete(id: string) {
    this.onDelete(this.deleteInstitutionUseCase.execute(id));
  }
}

export function provideInstitutionFacade() {
  return createClientProvider(InstitutionFacade, [
    CreateInstitutionUseCase,
    FindInstitutionsUseCase,
    FindInstitutionByIDUseCase,
    UpdateInstitutionUseCase,
    DeleteInstitutionUseCase,
  ]);
}
