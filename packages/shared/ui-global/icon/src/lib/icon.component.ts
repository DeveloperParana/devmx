import { HttpClient } from '@angular/common/http';
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
  standalone: true,
  providers: [
    {
      provide: IconRegistry,
      deps: [HttpClient],
    },
  ],
  template: '',
})
export class IconComponent implements OnInit {
  renderer = inject(Renderer2);

  elRef = inject<ElementRef<HTMLElement>>(ElementRef);

  registry = inject(IconRegistry);

  name = input.required<Icon>();

  color = input('#111');

  size = input<string | number>(32);

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
        this.renderer.setStyle(svg, 'color', this.color());

        this.renderer.appendChild(this.elRef.nativeElement, svg);
      });
  }
}
