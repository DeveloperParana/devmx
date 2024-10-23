import { createServiceProvider } from '@devmx/shared-data-source';
import { JobsService } from '@devmx/career-domain/server';
import { getModelToken } from '@nestjs/mongoose';
import { JobsServiceImpl, provideSkillsMongoService } from '../services';
import { JobCollection } from '../schemas';

export function provideJobsService() {
  return createServiceProvider(JobsService, JobsServiceImpl, [
    getModelToken(JobCollection.name),
  ]);
}

export function provideServices() {
  return [provideJobsService(), provideSkillsMongoService()];
}
