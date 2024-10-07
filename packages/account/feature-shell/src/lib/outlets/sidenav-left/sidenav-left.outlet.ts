import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutSidenavComponent } from '@devmx/shared-ui-global/layout';

@Component({
  selector: 'devmx-sidenav-left',
  template: `<devmx-layout-sidenav />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LayoutSidenavComponent],
  standalone: true,
})
export class SidenavLeftOutlet {}
