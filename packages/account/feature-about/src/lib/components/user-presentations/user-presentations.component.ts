import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Presentation } from '@devmx/shared-api-interfaces';

@Component({
  selector: 'devmx-user-presentations',
  template: `
    <ul>
      @for (item of data(); track item.id) {
      <li>{{ item.title }}</li>
      }
    </ul>
  `,
  styleUrl: './user-presentations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPresentationsComponent {
  data = input.required<Presentation[]>();
}
