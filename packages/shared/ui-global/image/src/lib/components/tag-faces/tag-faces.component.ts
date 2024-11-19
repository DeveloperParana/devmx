import {
  Component,
  ElementRef,
  contentChild,
  AfterViewInit,
  ChangeDetectionStrategy,
  viewChild,
} from '@angular/core';
import { create, detectFaces } from '@devmx/shared-util-data';

@Component({
  selector: 'devmx-tag-faces,figure[devmx-tag-faces]',
  template: `<ng-content /> <canvas #canvas></canvas>`,
  styleUrl: './tag-faces.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class TagFacesComponent implements AfterViewInit {
  imgRef = contentChild<ElementRef<HTMLImageElement>>('img');
  get imgEl() {
    const ref = this.imgRef();
    return ref?.nativeElement;
  }

  canvasRef = viewChild<ElementRef<HTMLCanvasElement>>('canvas');
  get canvasEl() {
    const ref = this.canvasRef();
    return ref?.nativeElement;
  }

  ngAfterViewInit() {
    // const { nativeElement } = this.imgRef() ?? {};

    if (!this.imgEl) return;

    this.imgEl.onload = () => {
      if (!this.imgEl || !this.canvasEl) return;

      const faces = detectFaces(this.imgEl);
      console.log(faces);

      if (!faces) return;

      this.canvasEl.width = this.imgEl.width;
      this.canvasEl.height = this.imgEl.height;
      const context = this.canvasEl.getContext('2d');

      console.log(context);

      if (!context) return;

      if (faces.length) {
        for (const face of faces) {
          context.strokeStyle = 'lime';
          context.lineWidth = 2;
          context.strokeRect(face.x, face.y, face.width, face.height);
        }
      }
    };
  }
}
