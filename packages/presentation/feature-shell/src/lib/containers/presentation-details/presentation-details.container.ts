import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { PresentationFacade } from '@devmx/presentation-data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { LoaderComponent, param, DevPRComponent } from '@devmx/shared-ui-global';

@Component({
  selector: 'devmx-presentation-details',
  templateUrl: './presentation-details.container.html',
  styleUrl: './presentation-details.container.scss',
  imports: [
    RouterModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    DevPRComponent,
    LoaderComponent,
    AsyncPipe,
    JsonPipe
  ],
  standalone: true,
})
export class PresentationDetailsContainer implements OnInit {
  presentationFacade = inject(PresentationFacade);

  #destroyRef = inject(DestroyRef);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    const id$ = this.route.paramMap.pipe(param('id'));

    id$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((id) => {
      if (id) this.presentationFacade.loadOne(id);
    });
  }
}
