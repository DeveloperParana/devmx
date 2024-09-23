import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PresentationFacade } from '@devmx/presentation-data-access';
import { LayoutModule, MediaMatcher } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Presentation } from '@devmx/shared-api-interfaces';
import { ToolbarComponent } from '@devmx/shared-ui-global';
import { MatButtonModule } from '@angular/material/button';
import { CreatePresentationComponent } from './components';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { take } from 'rxjs';
import {
  inject,
  Component,
  OnDestroy,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { AuthFacade } from '@devmx/account-data-access';

@Component({
  selector: 'devmx-presentation-feature-shell',
  templateUrl: './presentation-feature-shell.component.html',
  styleUrl: './presentation-feature-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ToolbarComponent,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    RouterModule,
  ],
  standalone: true,
})
export class PresentationFeatureShellComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  #mobileQueryListener: () => void;

  authFacade = inject(AuthFacade);

  presentationFacade = inject(PresentationFacade);

  dialog = inject(MatDialog);

  constructor() {
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.#mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.#mobileQueryListener);
  }

  ngOnInit() {
    this.authFacade.loadAuthUser();
  }

  openCreate() {
    const dialogRef = this.dialog.open<
      CreatePresentationComponent,
      void,
      Presentation
    >(CreatePresentationComponent);

    const afterClosed$ = dialogRef.afterClosed().pipe(take(1));

    afterClosed$.subscribe((presentation) => {
      if (presentation) {
        this.presentationFacade.create(presentation);
      }
    });
  }

  ngOnDestroy() {
    this.mobileQuery.removeEventListener('change', this.#mobileQueryListener);
  }
}
