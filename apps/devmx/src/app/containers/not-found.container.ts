import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'devmx-not-found',
  template: `
    <div>
      <img src="devmx.svg" />

      <main>
        <h2>404</h2>
        <h3>Página não encontrada</h3>
        <a routerLink="/conta">Acesse sua conta</a>
      </main>

      <img src="devpr.svg" width="100" />
    </div>
  `,
  styleUrl: './not-found.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  standalone: true,
})
export class NotFoundContainer {}
