import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthenticationFacade } from '@devmx/account-data-access';
import { LayoutComponent } from '@devmx/shared-ui-global/layout';
import { ShellContainer } from '@devmx/shared-ui-global/shell';
import { RouterModule } from '@angular/router';

@Component({
  template: `<devmx-layout />`,
  styles: `
    :host {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  `,
  selector: 'devmx-learn-feature-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, LayoutComponent],
})
export class LearnFeatureShellComponent extends ShellContainer {
  constructor(auth: AuthenticationFacade) {
    super(auth);
  }
}
