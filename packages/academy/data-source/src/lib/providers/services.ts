import {
  provideCoursesMongoService,
  provideInstitutionsMongoService,
  provideSubjectsMongoService,
} from '../infrastructure';

export function provideServices() {
  return [
    provideInstitutionsMongoService(),
    provideSubjectsMongoService(),
    provideCoursesMongoService(),
  ];
}
