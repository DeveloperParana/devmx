import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppShellComponent } from '@devmx/shared-ui-global/shell';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IconComponent } from '@devmx/shared-ui-global/icon';

@Component({
  selector: 'devmx-career-feature-page',
  template: `
    <devmx-app-shell>
      <mat-toolbar class="app-toolbar">
        <a routerLink="/" class="app-logo">
          <img src="devmx.svg" height="48" alt="DevMX" />
        </a>

        <h1 class="app-title">Vagas</h1>

        <span class="spacer"></span>

        <a
          target="_blank"
          rel="noreferrer"
          title="Github"
          href="https://github.com/DeveloperParana/devmx"
        >
          <devmx-icon name="github" />
        </a>
      </mat-toolbar>
      <router-outlet />
    </devmx-app-shell>
  `,
  styles: `
    :host {
      flex: 1;
      display: flex;
      flex-direction: column;

      .app-toolbar {
        display: flex;
        gap: 0.4em;
      }

      .app-logo {
        img {
          max-height: 48px;
        }
      }

      .app-title {
        margin-right: 1em;
        font-size: 0.9em;
        font-weight: 500;
        opacity: 0.4;
        margin: 0;
      }

      .spacer {
        flex: 1 1 auto;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, MatToolbarModule, AppShellComponent, IconComponent],
})
export class CareerFeaturePageComponent {}
