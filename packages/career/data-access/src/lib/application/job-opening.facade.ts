import { createClientProvider, EntityFacade } from '@devmx/shared-data-access';
import { EditableJobOpening, JobOpening } from '@devmx/shared-api-interfaces';
import {
  CreateJobOpeningUseCase,
  FindJobOpeningByIDUseCase,
  FindJobOpeningsUseCase,
  DeleteJobOpeningUseCase,
  UpdateJobOpeningUseCase,
} from '@devmx/career-domain/client';

export class JobOpeningFacade extends EntityFacade<JobOpening> {
  constructor(
    private createJobOpeningUseCase: CreateJobOpeningUseCase,
    private findJobOpeningsUseCase: FindJobOpeningsUseCase,
    private findJobOpeningByIDUseCase: FindJobOpeningByIDUseCase,
    private updateJobOpeningUseCase: UpdateJobOpeningUseCase,
    private deleteJobOpeningUseCase: DeleteJobOpeningUseCase
  ) {
    super({
      response: { data: [], items: 0, pages: 0 },
      params: {
        page: 0,
        size: 10,
        filter: { title: '', mode: '', contract: '', experience: '' },
      },
      selected: null,
    });
  }

  load() {
    this.onLoad(this.findJobOpeningsUseCase.execute(this.state.params));
  }

  loadOne(id: string) {
    this.onLoadOne(this.findJobOpeningByIDUseCase.execute(id));
  }

  create(data: EditableJobOpening) {
    this.onCreate(this.createJobOpeningUseCase.execute(data));
  }

  update(data: EditableJobOpening) {
    this.onUpdate(this.updateJobOpeningUseCase.execute(data));
  }

  delete(id: string) {
    this.onDelete(this.deleteJobOpeningUseCase.execute(id));
  }
}

export function provideJobOpeningFacade() {
  return createClientProvider(JobOpeningFacade, [
    CreateJobOpeningUseCase,
    FindJobOpeningsUseCase,
    FindJobOpeningByIDUseCase,
    UpdateJobOpeningUseCase,
    DeleteJobOpeningUseCase,
  ]);
}
