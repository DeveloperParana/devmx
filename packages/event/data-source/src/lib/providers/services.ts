import { provideEventsMongoService } from '../infrastructure';

// export function provideEventsService() {
//   return createServiceProvider(EventsService, EventsServiceImpl, [
//     getModelToken(EventCollection.name),
//   ]);
// }

export function provideServices() {
  return [
    provideEventsMongoService()
  ]
}
