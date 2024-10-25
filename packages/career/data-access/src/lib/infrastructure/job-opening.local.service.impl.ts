import { JobOpeningService } from '@devmx/career-domain/client';
import { JobOpening } from '@devmx/shared-api-interfaces';
import {
  LocalService,
  StorageService,
  createServiceProvider,
} from '@devmx/shared-data-access';

export class JobOpeningLocalServiceImpl
  extends LocalService<JobOpening>
  implements JobOpeningService {}

export function provideJobOpeningLocalService() {
  return createServiceProvider(JobOpeningService, JobOpeningLocalServiceImpl, [
    StorageService,
    'jobopenings',
  ]);
}
