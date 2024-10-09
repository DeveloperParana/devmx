import {
  JobMode,
  JobContract,
  ExperienceLevel,
} from '@devmx/shared-api-interfaces';

export interface FilterJob {
  title: string;
  description: string;
  mode: JobMode | '';
  contract: JobContract | '';
  experience: ExperienceLevel | '';
}
