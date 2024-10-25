import {
  Component,
  ElementRef,
  inject,
  input,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { interval, Subject, takeUntil, BehaviorSubject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  exportAs: 'devmxBash',
  selector: 'devmx-bash',
  template: `<pre #preTagRef></pre>`,
  styles: `devmx-bash pre { white-space: pre-line; }`,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class BashComponent {
  sanitizer = inject(DomSanitizer);

  preTagRef = viewChild<ElementRef<HTMLPreElement>>('preTagRef');

  get preTagEl() {
    return this.preTagRef()?.nativeElement;
  }

  speed = input(100);

  #code = new BehaviorSubject('');
  code$ = this.#code.asObservable();

  constructor() {
    this.code$.subscribe((code) => {
      const until = new Subject<void>();
      let index = 0;
      const preTagEl = this.preTagEl;

      // Limpar o conteúdo do terminal antes de começar
      if (preTagEl) {
        preTagEl.innerHTML = ''; // Limpa o conteúdo antes de começar
      }

      let isTag = false;
      let currentTag = ''; // Para armazenar tags HTML

      interval(this.speed())
        .pipe(takeUntil(until))
        .subscribe(() => {
          if (index < code.length) {
            const char = code[index];

            if (char === '<') {
              isTag = true;
              currentTag = ''; // Reinicia a tag
            }

            if (isTag) {
              currentTag += char;
              if (char === '>') {
                // Fecha a tag e insere no terminal
                isTag = false;
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = currentTag;
                const element = tempDiv.firstChild;

                if (element && preTagEl) {
                  preTagEl.appendChild(element); // Insere a tag HTML completa
                }
              }
            } else {
              if (preTagEl) {
                preTagEl.appendChild(document.createTextNode(char)); // Adiciona caracteres normais
              }
            }

            index++;
          } else {
            until.next();
            until.complete();
          }
        });
    });
  }

  setCode(code: string) {
    this.#code.next(code);
  }
}
