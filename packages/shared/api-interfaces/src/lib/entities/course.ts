import { CourseSubject } from './course-subject';
import { Institution } from './institution';
import { AccountRef } from '../dtos';

export interface Course {
  id: string;

  name: string;

  goal: string;

  subjects: CourseSubject[];

  institution: Institution;

  details?: string;

  link?: string;

  contributors: AccountRef[];
}
