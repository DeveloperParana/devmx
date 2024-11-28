import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'devmx-empty',
  template: `<img [src]="image()" />`,
  styleUrl: './empty.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyComponent {
  image = input('');
}
