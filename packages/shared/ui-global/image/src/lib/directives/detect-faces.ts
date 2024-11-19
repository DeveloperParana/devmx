import { afterRender, Directive, ElementRef } from '@angular/core';
import { detectFaces } from '@devmx/shared-util-data';

@Directive({
  selector: 'img[devmxDetectFaces]',
  standalone: true,
})
export class DetectFacesDirective {
  constructor(elRef: ElementRef<HTMLImageElement>) {
    afterRender(() => {
      const faces = detectFaces(elRef.nativeElement);
      console.log(faces);
    });
  }
}
