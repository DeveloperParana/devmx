import { State } from '@devmx/shared-util-data';
import { Observable, take } from 'rxjs';
import {
  Page,
  Entity,
  QueryFilter,
  QueryParams,
} from '@devmx/shared-api-interfaces';

interface EntityState<T> {
  response: Page<T>;
  selected: T | null;
  params: QueryParams<T>;
}

export abstract class EntityFacade<T extends Entity> extends State<
  EntityState<T>
> {
  response$ = this.select((state) => state.response);

  selected$ = this.select((state) => state.selected);

  abstract load(): void;

  setParams(params: QueryParams<T>) {
    const { filter } = this.state.params;
    this.setState({ params: { ...params, filter } });
  }

  setFilter(filter: QueryFilter<T>) {
    const { params } = this.state;
    this.setState({ params: { ...params, filter} });
  }

  protected onLoad(request$: Observable<Page<T>>) {
    request$.pipe(take(1)).subscribe((response) => this.setState({ response }));
  }

  protected onLoadOne(request$: Observable<T | null>) {
    this.setState({ selected: null });

    request$.pipe(take(1)).subscribe((selected) => this.setState({ selected }));
  }

  protected onCreate(request$: Observable<T | null>) {
    request$.pipe(take(1)).subscribe(() => this.load());
  }

  protected onUpdate(request$: Observable<T | null>) {
    request$.pipe(take(1)).subscribe(() => this.load());
  }

  protected onDelete(request$: Observable<T | null>) {
    request$.pipe(take(1)).subscribe(() => this.load());
  }
}
