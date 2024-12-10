import { provideEvent as provideEvents, provideRSVP } from './providers';

export function provideEvent() {
  return [...provideEvents(), ...provideRSVP()];
}
