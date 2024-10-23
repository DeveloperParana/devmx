import { EditableEntity } from '../types';
import { Observable } from 'rxjs';
import { Entity } from './entity';

export interface Create<T extends Entity> {
  create(data: EditableEntity<T>): Observable<T> | Promise<T>;
}
