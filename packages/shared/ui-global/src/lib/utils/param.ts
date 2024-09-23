import { filter, map, Observable } from 'rxjs';
import { ParamMap } from '@angular/router';

export function param(key: string) {
  return (source$: Observable<ParamMap>) => {
    return source$.pipe(
      filter((params) => params.has(key)),
      map((params) => params.get(key))
    );
  };
}
