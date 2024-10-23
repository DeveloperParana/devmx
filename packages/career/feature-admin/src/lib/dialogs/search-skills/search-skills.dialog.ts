import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { MatListModule, MatListOption } from '@angular/material/list';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { EditableSkill } from '@devmx/shared-api-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SkillFacade } from '@devmx/career-data-access';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogActions,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'devmx-admin-search-skills',
  templateUrl: './search-skills.dialog.html',
  styleUrl: './search-skills.dialog.scss',
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
export class SearchSkillsDialog {
  skillFacade = inject(SkillFacade);

  ref = inject<MatDialogRef<SearchSkillsDialog, EditableSkill[]>>(MatDialogRef);

  search = new FormControl<string>('');

  #addSkill = new BehaviorSubject(false);
  addSkill$ = this.#addSkill.asObservable();

  constructor() {
    this.search.valueChanges
      .pipe(debounceTime(300))
      .pipe(takeUntilDestroyed())
      .subscribe((value) => {
        const name = value ? value : '';
        this.skillFacade.setFilter({ name });
        this.skillFacade.load();
      });
    this.skillFacade.load();
  }

  addSkill() {
    if (this.#addSkill.value === true) {
      this.#addSkill.next(false);
    }

    this.#addSkill.next(true);
  }

  close(selected: MatListOption[]) {
    this.ref.close(selected.map((option) => option.value));
  }

  onPageChange({ page, size }: PageParams) {
    this.skillFacade.setParams({ page, size });
    // this.skillFacade.load();
  }
}
