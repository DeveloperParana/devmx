import { EditableEntity } from '../../lib/types';
import {
  Find,
  Page,
  Create,
  Delete,
  Entity,
  Update,
  FindOne,
  QueryParams,
} from '../../lib/interfaces';

export abstract class EntityService<T extends Entity>
  implements Create<T>, Find<T>, FindOne<T>, Update<T>, Delete<T>
{
  abstract create(data: EditableEntity<T>): Promise<T>;

  abstract find(params: QueryParams<T>): Promise<Page<T>>;

  abstract findOne(id: string): Promise<T | null>;

  abstract findOneBy<P extends keyof T>(
    prop: P,
    value: T[P]
  ): Promise<T | null>;

  abstract update(id: string, data: EditableEntity<T>): Promise<T>;

  abstract delete(id: string): Promise<T>;
}
