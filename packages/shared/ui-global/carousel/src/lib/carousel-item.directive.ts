import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[devmxCarouselItem]',
  standalone: true,
})
export class CarouselItemDirective {
  constructor(readonly tmpl: TemplateRef<HTMLElement>) {}
}
