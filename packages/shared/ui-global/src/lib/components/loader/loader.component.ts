import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'devmx-loader',
  template: `<h2>dev.mx</h2>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  active = input(false);
}
