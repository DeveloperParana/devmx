import { IconRegistry } from './icon-registry';
import { Icon } from './types';
import { take } from 'rxjs';
import {
  input,
  inject,
  OnInit,
  Component,
  Renderer2,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'devmx-icon',
  template: '',
  styles: `
    :host {
      display: inline-flex;
    }
  `,
  standalone: true,
})
export class IconComponent implements OnInit {
  renderer = inject(Renderer2);

  elRef = inject<ElementRef<HTMLElement>>(ElementRef);

  registry = inject(IconRegistry);

  name = input.required<Icon>();

  color = input();

  size = input<string | number>(24);

  ngOnInit() {
    this.registry
      .getIcon(this.name())
      .pipe(take(1))
      .subscribe((icon) => {
        const parser = new DOMParser();
        const element = parser.parseFromString(icon, 'image/svg+xml');
        const svg = element.firstChild;

        const size = this.size() + '';

        this.renderer.setAttribute(svg, 'width', size);
        this.renderer.setAttribute(svg, 'height', size);

        if (this.color()) {
          this.renderer.setStyle(svg, 'color', this.color());
        }

        this.renderer.appendChild(this.elRef.nativeElement, svg);
      });
  }
}
