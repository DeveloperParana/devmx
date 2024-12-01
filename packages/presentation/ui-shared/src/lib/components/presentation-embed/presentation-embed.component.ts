import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Presentation } from '@devmx/shared-api-interfaces';
import { SafeUrlPipe } from '@devmx/shared-ui-global/pipes';

@Component({
  selector: 'devmx-presentation-embed',
  template: `
    <iframe
      [src]="presentation.link + '/embed?style=light' | safeUrl"
      [title]="presentation.title"
      scrolling="no"
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
    ></iframe>
  `,
  styleUrl: './presentation-embed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SafeUrlPipe],
  standalone: true,
})
export class PresentationEmbedComponent {
  data = input.required<Presentation>();

  get presentation() {
    return this.data();
  }
}
