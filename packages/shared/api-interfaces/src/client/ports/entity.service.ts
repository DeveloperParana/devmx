import { EditableEntity } from '../../lib/types';
import { Observable } from 'rxjs';
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
  abstract create(data: EditableEntity<T>): Observable<T>;

  abstract find(params: QueryParams<T>): Observable<Page<T>>;

  abstract findOne(id: string): Observable<T | null>;

  abstract update(id: string, data: EditableEntity<T>): Observable<T>;

  abstract delete(id: string): Observable<T>;
}
