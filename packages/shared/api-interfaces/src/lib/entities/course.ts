import { CourseSubject } from './course-subject';
import { Institution } from './institution';
import { UserRef } from '../dtos';

export interface Course {
  id: string;

  name: string;

  goal: string;

  ead: boolean;

  subjects: CourseSubject[];

  institution: Institution;

  details?: string;

  link?: string;

  contributors: UserRef[];
}
