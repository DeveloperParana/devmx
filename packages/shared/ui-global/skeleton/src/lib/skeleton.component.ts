import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'devmx-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SkeletonComponent {
  rows = input(2);

  #rows = [];

  items() {
    this.#rows.length = this.rows();
    return this.#rows;
  }
}
