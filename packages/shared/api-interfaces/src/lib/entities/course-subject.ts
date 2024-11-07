import { Subject } from './subject';

export interface CourseSubject {
  // id: string

  subject: Subject;

  instructor?: string;

  hours?: number;
}
