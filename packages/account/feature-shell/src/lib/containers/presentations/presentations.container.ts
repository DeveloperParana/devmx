import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { PresentationFacade } from '@devmx/presentation-data-access';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { AccountFacade } from '@devmx/account-data-access';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import { take } from 'rxjs';
import {
  CreatePresentationService,
  provideCreatePresentation,
} from '../../dialogs';
import {
  inject,
  OnInit,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-account-presentations',
  templateUrl: './presentations.container.html',
  styleUrl: './presentations.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideCreatePresentation()],
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    PaginatorComponent,
    RouterModule,
    AsyncPipe,
  ],
  standalone: true,
})
export class PresentationsContainer implements OnInit {
  router = inject(Router);

  route = inject(ActivatedRoute);

  destroyRef = inject(DestroyRef);

  presentationFacade = inject(PresentationFacade);

  accountFacade = inject(AccountFacade);

  createPresentation = inject(CreatePresentationService);

  ngOnInit() {
    this.route.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ page = 0, size = 10 }) => {
        this.accountFacade.loadPresentations(page, size);
      });
  }

  openCreate() {
    const createPresentationRef = this.createPresentation.open();

    const afterClosed$ = createPresentationRef.afterClosed().pipe(take(1));

    afterClosed$.subscribe((presentation) => {
      if (presentation) {
        const presentation$ = this.presentationFacade.presentation$;
        presentation$.pipe(take(1)).subscribe(() => {
          this.accountFacade.loadPresentations();
        });

        this.presentationFacade.create(presentation);
      }
    });
  }

  onPageChange({ page, size }: PageParams) {
    this.accountFacade.loadPresentations(page, size);
  }
}
