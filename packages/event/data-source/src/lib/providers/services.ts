import { provideEventsMongoService, provideRSVPsMongoService } from '../infrastructure';

export function provideServices() {
  return [
    provideEventsMongoService(),
    provideRSVPsMongoService()
  ]
}
