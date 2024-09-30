import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PresentationFacade } from '@devmx/presentation-data-access';
import { CreatePresentationComponent } from '../../components';
import { Presentation } from '@devmx/shared-api-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { AccountFacade } from '@devmx/account-data-access';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { take } from 'rxjs';
import {
  inject,
  OnInit,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-account-presentations',
  templateUrl: './presentations.container.html',
  styleUrl: './presentations.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    RouterLink,
    AsyncPipe,
  ],
  standalone: true,
})
export class PresentationsContainer implements OnInit {
  presentationFacade = inject(PresentationFacade);
  accountFacade = inject(AccountFacade);
  dialog = inject(MatDialog);

  ngOnInit() {
    this.accountFacade.loadPresentations();
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
        const presentation$ = this.presentationFacade.presentation$;
        presentation$.pipe(take(1)).subscribe(() => {
          this.accountFacade.loadPresentations();
        });

        this.presentationFacade.create(presentation);
      }
    });
  }

  onPageChange(event: PageEvent) {
    this.accountFacade.loadPresentations(event.pageIndex, event.pageSize);
  }
}
