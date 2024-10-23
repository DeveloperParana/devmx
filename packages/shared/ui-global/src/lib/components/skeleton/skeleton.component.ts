import {
  input,
  viewChild,
  Component,
  ElementRef,
  AfterViewInit,
  ChangeDetectionStrategy,
  contentChild,
} from '@angular/core';

@Component({
  selector: 'devmx-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SkeletonComponent implements AfterViewInit {
  maskRef = viewChild<ElementRef<SVGSVGElement>>('#maskRef');

  svgRef = contentChild<SVGSVGElement>('#childRef');

  // data = input.required<string>();

  ngAfterViewInit() {
    console.log(this.maskRef());
    console.log(this.svgRef());

    const maskEl = this.maskRef()?.nativeElement;
    if (maskEl) {
      // const prefix = 'data:image/svg+xml;base64';
      // const url = `url('${prefix},${this.data()}')`;
      // maskEl.style.maskImage = url;
    }
  }
}
