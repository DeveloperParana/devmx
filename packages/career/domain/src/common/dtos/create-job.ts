import {
  Job,
  Creatable,
  ConvertRelationsToID,
} from '@devmx/shared-api-interfaces';

export type CreateJob = Creatable<ConvertRelationsToID<Job>>;
