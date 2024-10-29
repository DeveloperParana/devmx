import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { PresentationFacade } from '@devmx/presentation-data-access';
import { EditablePresentation } from '@devmx/shared-api-interfaces';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { PresentationFilterForm } from '../../forms';
import { AsyncPipe } from '@angular/common';
import { debounceTime } from 'rxjs';
import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogActions,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'devmx-admin-search-presentations',
  templateUrl: './search-presentations.dialog.html',
  styleUrl: './search-presentations.dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    PaginatorComponent,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatInputModule,
    IconComponent,
    MatListModule,
    AsyncPipe,
  ],
  standalone: true,
})
export class SearchPresentationsDialog {
  presentationFacade = inject(PresentationFacade);

  ref =
    inject<MatDialogRef<SearchPresentationsDialog, EditablePresentation[]>>(
      MatDialogRef
    );

  search = new FormControl<string>('');

  form = new PresentationFilterForm();

  constructor() {
    this.form.valueChanges
      .pipe(debounceTime(300))
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        const value = this.form.getRawValue();
        this.presentationFacade.setFilter(value);
        this.presentationFacade.load();
      });
    this.presentationFacade.load();
  }

  onPageChange({ page, size }: PageParams) {
    this.presentationFacade
    // .setParams({ page, size });
    // this.presentationFacade.load();
  }
}
