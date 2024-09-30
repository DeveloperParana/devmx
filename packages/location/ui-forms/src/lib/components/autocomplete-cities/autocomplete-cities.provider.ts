import { AutocompleteCitiesService } from './autocomplete-cities.service';

export function provideAutocompleteCitiesService() {
  return {
    provide: AutocompleteCitiesService,
  };
}
