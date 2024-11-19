import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { MatListModule, MatListOption } from '@angular/material/list';
import { EditableInstitution } from '@devmx/shared-api-interfaces';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { InstitutionFacade } from '@devmx/academy-data-access';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'devmx-admin-search-institution',
  templateUrl: './search-institution.dialog.html',
  styleUrl: './search-institution.dialog.scss',
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
})
export class SearchInstitutionDialog {
  institutionFacade = inject(InstitutionFacade);

  ref =
    inject<MatDialogRef<SearchInstitutionDialog, EditableInstitution[]>>(
      MatDialogRef
    );

  search = new FormControl<string>('');

  #addInstitution = new BehaviorSubject(false);
  addInstitution$ = this.#addInstitution.asObservable();

  constructor() {
    this.search.valueChanges
      .pipe(debounceTime(300))
      .pipe(takeUntilDestroyed())
      .subscribe((value) => {
        const name = value ? value : '';
        this.institutionFacade.setFilter({ name });
        this.institutionFacade.load();
      });
    this.institutionFacade.load();
  }

  addInstitution() {
    if (this.#addInstitution.value === true) {
      this.#addInstitution.next(false);
    }

    this.#addInstitution.next(true);
  }

  close(selected: MatListOption) {
    this.ref.close(selected.value);
  }

  onPageChange({ page, size }: PageParams) {
    this.institutionFacade.setParams({ page, size });
    this.institutionFacade.load();
  }
}
