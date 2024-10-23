import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'devmx-event-admin-home',
  templateUrl: './home.container.html',
  styleUrl: './home.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatGridListModule, MatButtonModule, MatCardModule, AsyncPipe],
})
export class HomeContainer {
  private breakpointObserver = inject(BreakpointObserver);

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 },
      ];
    })
  );
}
