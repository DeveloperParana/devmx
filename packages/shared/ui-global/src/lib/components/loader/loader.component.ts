import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'devmx-loader',
  template: `<h2>dev.mx</h2>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './loader.component.scss',
  imports: [NgClass],
  standalone: true,
})
export class LoaderComponent {
  active = input(false);
}
