import { ExperienceLevel, JobContract, JobMode, JobType } from '../types';
import { Range } from '../interfaces';
import { City } from './city';

export interface Job {
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

  city?: City;

  contact?: string;

  company?: string;

  link?: string;
}
