import { ExperienceLevel, JobContract, JobMode, JobType } from '../types';
import { Entity, Range } from '../interfaces';
import { JobSkill } from './job-skill';

export interface JobOpening extends Entity {
  title: string;

  description: string;

  requirements: string;

  experience: ExperienceLevel;

  contract: JobContract;

  type: JobType;

  mode: JobMode;

  skills: JobSkill[];

  benefits?: string;

  salary?: Range;

  contact?: string;

  company?: string;

  link?: string;

  open: boolean;

  active: boolean;
}
