import { createClientProvider, EntityFacade } from '@devmx/shared-data-access';
import { Subject, EditableSubject } from '@devmx/shared-api-interfaces';
import {
  CreateSubjectUseCase,
  DeleteSubjectUseCase,
  FindSubjectByIDUseCase,
  FindSubjectsUseCase,
  UpdateSubjectUseCase,
} from '@devmx/academy-domain/client';

export class SubjectFacade extends EntityFacade<Subject> {
  constructor(
    private createSubjectUseCase: CreateSubjectUseCase,
    private findSubjectsUseCase: FindSubjectsUseCase,
    private findSubjectByIdUseCase: FindSubjectByIDUseCase,
    private updateSubjectUseCase: UpdateSubjectUseCase,
    private deleteSubjectUseCase: DeleteSubjectUseCase
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
    this.onLoad(this.findSubjectsUseCase.execute(this.state.params));
  }

  loadOne(id: string) {
    this.onLoadOne(this.findSubjectByIdUseCase.execute(id));
  }

  create(data: EditableSubject) {
    this.onCreate(this.createSubjectUseCase.execute(data));
  }

  update(data: EditableSubject) {
    this.onUpdate(this.updateSubjectUseCase.execute(data));
  }

  delete(id: string) {
    this.onDelete(this.deleteSubjectUseCase.execute(id));
  }
}

export function provideSubjectFacade() {
  return createClientProvider(SubjectFacade, [
    CreateSubjectUseCase,
    FindSubjectsUseCase,
    FindSubjectByIDUseCase,
    UpdateSubjectUseCase,
    DeleteSubjectUseCase,
  ]);
}
