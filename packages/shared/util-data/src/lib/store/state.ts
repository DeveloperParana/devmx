import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';

export abstract class State<T> {
  #state: BehaviorSubject<T>;

  protected state$: Observable<T>;

  protected get state() {
    return this.#state.value;
  }

  constructor(initialState: T) {
    const state = Object.freeze(initialState);
    this.#state = new BehaviorSubject(state);
    this.state$ = this.#state.asObservable();
  }

  protected select<K>(mapFn: (state: T) => K) {
    return this.state$.pipe(
      map((state) => mapFn(state)),
      distinctUntilChanged()
    );
  }

  protected setState(newState: Partial<T>) {
    this.#state.next({ ...this.state, ...newState });
  }
}
