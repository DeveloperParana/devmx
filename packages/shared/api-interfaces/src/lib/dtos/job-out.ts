import { ExperienceLevel, JobContract, JobType, JobMode } from '../types';
import { AccountRef } from './account-ref';
import { Range } from '../interfaces';
import { CityRef } from './city-ref';

export interface JobOut {
  id: string;

  title: string;

  description: string;

  requirements: string[];

  experience: ExperienceLevel;

  contract: JobContract;

  type: JobType;

  mode: JobMode;

  benefits?: string[];

  salary?: Range;

  city?: CityRef;

  contact?: string;

  company?: string;

  link?: string;

  active: boolean

  owner: AccountRef;
}
