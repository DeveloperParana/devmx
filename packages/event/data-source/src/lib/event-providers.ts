import { provideEvent, provideRSVP } from './providers';

export function provideEvents() {
  return [...provideEvent(), ...provideRSVP()];
}
