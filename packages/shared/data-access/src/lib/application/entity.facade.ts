import { EntityService } from '@devmx/shared-api-interfaces/client';
import { State } from '@devmx/shared-util-data';
import { take } from 'rxjs';
import {
  Page,
  Entity,
  QueryFilter,
  QueryParams,
  EditableEntity,
} from '@devmx/shared-api-interfaces';

interface EntityState<T extends Entity> {
  response: Page<T>;
  selected: T | null;
  params: QueryParams<T>;
}

export abstract class EntityFacade<T extends Entity> extends State<
  EntityState<T>
> {
  response$ = this.select((state) => state.response);

  selected$ = this.select((state) => state.selected);

  params$ = this.select((state) => state.params);

  constructor(private skillService: EntityService<T>) {
    super({
      response: { data: [], items: 0, pages: 0 },
      params: { page: 0, size: 10, filter: {} },
      selected: null,
    });
  }

  setParams(params: QueryParams<T>) {
    this.setState({ params });
  }

  setFilter(filter: QueryFilter<T>) {
    const { params } = this.state;
    params.filter = filter;
    this.setState({ params });
  }

  load() {
    const request$ = this.skillService.find(this.state.params);

    request$.pipe(take(1)).subscribe((response) => this.setState({ response }));
  }

  create(data: EditableEntity<T>) {
    const request$ = this.skillService.create(data);

    request$.pipe(take(1)).subscribe(() => this.load());
  }

  loadOne(id: string) {
    const request$ = this.skillService.findOne(id);

    request$.pipe(take(1)).subscribe((selected) => this.setState({ selected }));
  }

  update(id: string, data: EditableEntity<T>) {
    const request$ = this.skillService.update(id, data);

    request$.pipe(take(1)).subscribe(() => this.load());
  }

  delete(id: string) {
    const request$ = this.skillService.delete(id);

    request$.pipe(take(1)).subscribe(() => this.load());
  }
}
