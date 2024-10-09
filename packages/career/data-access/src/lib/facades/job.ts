import { JobOut, Page } from '@devmx/shared-api-interfaces';
import { CreateJob, UpdateJob } from '@devmx/career-domain';
import { State } from '@devmx/shared-data-access';
import { FilterJob } from '../dtos';
import { take } from 'rxjs';
import {
  CreateJobUseCase,
  FindJobByIDUseCase,
  FindJobsUseCase,
  RemoveJobUseCase,
  UpdateJobUseCase,
} from '@devmx/career-domain/client';

interface JobState {
  jobs: Page<JobOut>;
  job: JobOut | null;
  filter: FilterJob;
}

export class JobFacade extends State<JobState> {
  jobs$ = this.select((state) => state.jobs);

  job$ = this.select((state) => state.job);

  constructor(
    private createJobUseCase: CreateJobUseCase,
    private findJobsUseCase: FindJobsUseCase,
    private findJobByIDUseCase: FindJobByIDUseCase,
    private updateJobUseCase: UpdateJobUseCase,
    private removeJobUseCase: RemoveJobUseCase
  ) {
    super({
      jobs: { data: [], items: 0, pages: 0 },
      filter: {
        title: '',
        description: '',
        mode: '',
        contract: '',
        experience: '',
      },
      job: null,
    });
  }

  setFilter(filter: FilterJob) {
    this.setState({ filter });
  }

  clearFilter() {
    this.setState({
      filter: {
        title: '',
        description: '',
        mode: '',
        contract: '',
        experience: '',
      },
    });
  }

  load(page = 0, size = 10) {
    const filter = this.state.filter;
    const params = { filter, page, size };

    const request$ = this.findJobsUseCase.execute(params);

    const onJobs = (jobs: Page<JobOut>) => {
      this.setState({ jobs });
    };

    request$.pipe(take(1)).subscribe(onJobs);
  }

  loadOne(id: string) {
    const request$ = this.findJobByIDUseCase.execute(id);

    const onJob = (job: JobOut) => {
      this.setState({ job });
    };

    request$.pipe(take(1)).subscribe(onJob);
  }

  create(data: CreateJob) {
    const request$ = this.createJobUseCase.execute(data);

    request$.pipe(take(1)).subscribe(({ id }) => this.loadOne(id));
  }

  update(data: UpdateJob) {
    const request$ = this.updateJobUseCase.execute(data);

    request$.pipe(take(1)).subscribe(() => this.load());
  }

  remove(id: string) {
    const request$ = this.removeJobUseCase.execute(id);

    request$.pipe(take(1)).subscribe(() => this.load());
  }
}
