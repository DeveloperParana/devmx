import { provideEventsFacade, provideEventsService } from "./providers";
import { provideFindEventsUseCase } from "./providers/use-cases";

export function provideEvents() {
  return [
    provideEventsService(),

    provideFindEventsUseCase(),

    provideEventsFacade()
  ]
}
