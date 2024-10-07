import { LayoutSidenavComponent } from '@devmx/shared-ui-global/layout';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'devmx-events-left',
  template: `<devmx-layout-sidenav />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LayoutSidenavComponent],
  standalone: true,
})
export class EventsLeftOutlet {}
