// import { createClientProvider } from '@devmx/shared-data-access';
// import { EventFacade } from '../facades';
// import {
//   CreateEventUseCase,
//   FindEventByIDUseCase,
//   FindEventsUseCase,
//   RemoveEventUseCase,
//   UpdateEventUseCase,
//   UploadCoverUseCase,
// } from '@devmx/event-domain/client';

import { provideEventFacade } from '../application';

// export function provideEventFacade() {
//   return createClientProvider(EventFacade, [
//     CreateEventUseCase,
//     FindEventsUseCase,
//     FindEventByIDUseCase,
//     UpdateEventUseCase,
//     RemoveEventUseCase,
//     UploadCoverUseCase,
//   ]);
// }

export function provideFacades() {
  return [provideEventFacade()];
}
