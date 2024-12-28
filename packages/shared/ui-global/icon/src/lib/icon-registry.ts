import { HttpClient } from '@angular/common/http';
import { of, tap } from 'rxjs';
import { Icon } from './types';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class IconRegistry {
  #cache: Partial<Record<Icon, string>> = {};

  constructor(private http: HttpClient) {}

  getIcon(name: Icon) {
    if (this.#cache[name]) return of(this.#cache[name]);

    return this.http
      .get(`icons/${name}.svg`, { responseType: 'text' })
      .pipe(tap(this.#setCache(name)));
  }

  #setCache = (name: Icon) => (icon: string) => {
    this.#cache[name] = icon;
  };
}
