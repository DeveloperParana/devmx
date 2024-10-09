import { ConvertRelationsToID, Job } from '@devmx/shared-api-interfaces';

export type UpdateJob = Partial<ConvertRelationsToID<Job>> & { id: string };
