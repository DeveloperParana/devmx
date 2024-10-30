import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';

@Pipe({ name: 'marked', standalone: true })
export class MarkedPipe implements PipeTransform {
  transform(value: string) {
    return marked(value ?? '', { gfm: true, async: false });
  }
}
