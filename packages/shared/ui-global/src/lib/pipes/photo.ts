import { inject, Pipe, PipeTransform } from '@angular/core';
import { Env } from '@devmx/shared-api-interfaces/client';

@Pipe({
  name: 'photo',
  standalone: true,
})
export class PhotoPipe implements PipeTransform {
  env = inject(Env);

  transform(value?: string) {
    return this.#getPath(value);
  }

  #getPath(photo?: string) {
    return photo ? `${this.env.photos.url}/${photo}` : '/photos/default.svg';
  }
}
