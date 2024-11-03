import {
  provideCourseHttpService,
  provideInstitutionHttpService,
  provideSubjectHttpService,
} from '../infrastructure';

export function provideServices() {
  return [
    provideInstitutionHttpService(),
    provideSubjectHttpService(),
    provideCourseHttpService(),
  ];
}
