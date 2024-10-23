import { by, deepMerge, paginate, predicate } from '@devmx/shared-util-data';
import { EntityService } from '@devmx/shared-api-interfaces/client';
import { StorageService } from './storage.service';
import { of } from 'rxjs';
import {
  Entity,
  QueryParams,
  EditableEntity,
} from '@devmx/shared-api-interfaces';

export abstract class LocalService<T extends Entity>
  implements EntityService<T>
{
  protected collection: T[];

  constructor(protected storage: StorageService, protected key: string) {
    this.collection = this.storage.getItem<T[]>(key, true) ?? [];
  }

  create(data: EditableEntity<T>) {
    const id = crypto.randomUUID();

    const entity = { ...data, id } as T;

    this.collection.push(entity);

    this.storage.setItem(this.key, this.collection, true);

    return of(entity);
  }

  find(params: QueryParams<T>) {
    let result = this.collection ?? [];

    if (params.filter) {
      result = this.collection.filter(predicate(params.filter));
    }

    return of(paginate(result, params));
  }

  findOne(id: string) {
    const entity = this.collection.find(by('id', id)) ?? null;

    return of(entity);
  }

  update(id: string, data: EditableEntity<T>) {
    const index = this.collection.findIndex(by('id', id));

    if (index < 0) {
      throw new Error(`ID ${id} not found`);
    }

    const entity = this.collection[index];

    const value = deepMerge(entity, data as Partial<T>);

    this.collection[index] = value;

    this.storage.setItem(this.key, this.collection, true);

    return of(value);
  }

  delete(id: string) {
    const index = this.collection.findIndex(by('id', id));

    if (index < 0) {
      throw new Error(`ID ${id} not found`);
    }

    const entity = this.collection[index];

    this.collection.splice(index, 1);

    this.storage.setItem(this.key, this.collection, true);

    return of(entity);
  }
}
