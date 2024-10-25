import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BashComponent } from '@devmx/shared-ui-global/bash';
import { LayoutFacade } from '@devmx/shared-ui-global/layout';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'devmx-home',
  templateUrl: './home.container.html',
  styleUrl: './home.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe
  ],
  standalone: true,
})
export class HomeContainer {
  httpClient = inject(HttpClient)

  #loader = new BehaviorSubject(0)
  loader$ = this.#loader.asObservable()

  constructor() {
    const layout = inject(LayoutFacade);
    layout.setSidenav({ start: true });
  }


  onClick() {
    this.loader$ = this.httpClient.get<number>('/api/accounts/download')
  }
}
