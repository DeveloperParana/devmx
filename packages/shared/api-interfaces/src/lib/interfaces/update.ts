import { EditableEntity } from '../types';
import { Entity } from './entity';
import { Observable } from 'rxjs';

export interface Update<T extends Entity> {
  update(
    id: string,
    data: EditableEntity<T>
  ): Observable<T | null> | Promise<T | null>;
}
