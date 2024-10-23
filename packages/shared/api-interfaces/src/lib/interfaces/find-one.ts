import { Entity } from './entity';
import { Observable } from 'rxjs';

export interface FindOne<T extends Entity> {
  findOne(id: string): Observable<T | null> | Promise<T | null>;
}
