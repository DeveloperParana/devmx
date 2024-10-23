import { Entity } from './entity';
import { Observable } from 'rxjs';

export interface Delete<T extends Entity> {
  delete(id: string): Observable<T> | Promise<T>;
}
