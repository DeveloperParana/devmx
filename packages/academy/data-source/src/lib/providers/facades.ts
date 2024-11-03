import {
  provideCoursesFacade,
  provideInstitutionsFacade,
  provideSubjectsFacade,
} from '../application';

export function provideFacades() {
  return [
    provideInstitutionsFacade(),
    provideSubjectsFacade(),
    provideCoursesFacade(),
  ];
}
