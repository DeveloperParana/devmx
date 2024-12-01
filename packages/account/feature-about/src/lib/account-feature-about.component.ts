import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppShellComponent } from '@devmx/shared-ui-global/shell';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Script } from '@devmx/shared-ui-global/script';
import { filter, map } from 'rxjs';

@Component({
  selector: 'devmx-account-feature-about',
  template: `
    <devmx-app-shell>
      <router-outlet />
    </devmx-app-shell>
  `,
  styles: `
    :host {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    :host h1 { font-size: 100%; margin: 0; }
    :host .toolbar { display: flex; gap: 1em; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, AppShellComponent],
  standalone: true,
})
export class AccountFeatureAboutComponent {
  route = inject(ActivatedRoute);

  script = inject(Script);

  constructor() {
    this.route.data
      .pipe(
        filter(({ schema }) => !!schema),
        map(({ schema }) => schema),
        takeUntilDestroyed()
      )
      .subscribe((schema) => {
        const type = 'application/ld+json';
        const content = JSON.stringify(schema, null, 2);
        this.script.addScript({ type }, content);
      });
  }
}
