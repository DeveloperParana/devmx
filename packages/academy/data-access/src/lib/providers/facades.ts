import {
  provideCourseFacade,
  provideInstitutionFacade,
  provideSubjectFacade,
} from '../application';

export function provideFacades() {
  return [
    provideInstitutionFacade(),
    provideSubjectFacade(),
    provideCourseFacade(),
  ];
}
