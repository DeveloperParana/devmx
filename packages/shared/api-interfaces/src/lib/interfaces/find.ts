import { QueryParams } from './query-params';
import { Observable } from 'rxjs';
import { Entity } from './entity';
import { Page } from './page';

export interface Find<T extends Entity> {
  find(data: QueryParams<T>): Observable<Page<T>> | Promise<Page<T>>;
}
