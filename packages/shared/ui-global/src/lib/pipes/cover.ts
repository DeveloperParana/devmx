import { inject, Pipe, PipeTransform } from '@angular/core';
import { Env } from '@devmx/shared-api-interfaces/client';

@Pipe({
  name: 'cover',
  standalone: true,
})
export class CoverPipe implements PipeTransform {
  env = inject(Env);

  transform(value: string | null = null, kind: keyof Env['covers']) {
    return this.#getPath(value, kind);
  }

  #getPath(cover: string | null = null, kind: keyof Env['covers']) {
    return cover
      ? `${this.env.covers[kind].url}/${cover}`
      : '/covers/default.svg';
  }
}
