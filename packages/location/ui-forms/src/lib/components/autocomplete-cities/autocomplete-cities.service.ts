import { City } from '@devmx/shared-api-interfaces';
import { BehaviorSubject } from 'rxjs';

export class AutocompleteCitiesService {
  #search = new BehaviorSubject('');
  search$ = this.#search.asObservable();

  #cities = new BehaviorSubject<City[]>([]);
  cities$ = this.#cities.asObservable();

  search(name: string) {
    this.#search.next(name);
  }

  setCities(cities: City[]) {
    this.#cities.next(cities);
  }
}
