import { provideCourse, provideInstitution, provideSubject } from './providers';

export function provideAcademy() {
  return [...provideSubject(), ...provideInstitution(), ...provideCourse()];
}
