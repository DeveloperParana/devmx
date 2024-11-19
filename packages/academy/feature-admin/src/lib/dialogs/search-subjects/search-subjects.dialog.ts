import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { MatListModule, MatListOption } from '@angular/material/list';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EditableSubject } from '@devmx/shared-api-interfaces';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { SubjectFacade } from '@devmx/academy-data-access';
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
  selector: 'devmx-admin-search-subjects',
  templateUrl: './search-subjects.dialog.html',
  styleUrl: './search-subjects.dialog.scss',
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
export class SearchSubjectsDialog {
  subjectFacade = inject(SubjectFacade);

  ref =
    inject<MatDialogRef<SearchSubjectsDialog, EditableSubject[]>>(MatDialogRef);

  search = new FormControl<string>('');

  #addSubject = new BehaviorSubject(false);
  addSubject$ = this.#addSubject.asObservable();

  constructor() {
    this.search.valueChanges
      .pipe(debounceTime(300))
      .pipe(takeUntilDestroyed())
      .subscribe((value) => {
        const name = value ? value : '';
        this.subjectFacade.setFilter({ name });
        this.subjectFacade.load();
      });
    this.subjectFacade.load();
  }

  addSubject() {
    if (this.#addSubject.value === true) {
      this.#addSubject.next(false);
    }

    this.#addSubject.next(true);
  }

  close(selected: MatListOption[]) {
    this.ref.close(selected.map((option) => option.value));
  }

  onPageChange({ page, size }: PageParams) {
    this.subjectFacade.setParams({ page, size });
    // this.subjectFacade.load();
  }
}
