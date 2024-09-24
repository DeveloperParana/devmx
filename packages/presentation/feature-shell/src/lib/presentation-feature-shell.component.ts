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
  OnInit,
  Component,
  OnDestroy,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { AuthFacade } from '@devmx/account-data-access';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'devmx-presentation-feature-shell',
  templateUrl: './presentation-feature-shell.component.html',
  styleUrl: './presentation-feature-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ToolbarComponent,
    MatDialogModule,
    MatCheckboxModule,
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

  tags = ['TypeScript', 'Java', 'Kotlin', 'PHP', 'Rust'];

  constructor() {
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.#mobileQueryListener = () => changeDetectorRef.detectChanges();
    if (this.mobileQuery.addEventListener) {
      this.mobileQuery.addEventListener('change', this.#mobileQueryListener);
    }
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
    if (this.mobileQuery.removeEventListener) {
      this.mobileQuery.removeEventListener('change', this.#mobileQueryListener);
    }
  }
}
