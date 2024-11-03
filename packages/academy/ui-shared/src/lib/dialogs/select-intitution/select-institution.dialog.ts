import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { MatListModule, MatListOption } from '@angular/material/list';
import { EditableInstitution } from '@devmx/shared-api-interfaces';
import { InstitutionFacade } from '@devmx/academy-data-access';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InstitutionSearch } from '../../forms';
import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogActions,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface SelectInstitutionConfig {
  multiple?: boolean;
}

@Component({
  selector: 'devmx-select-institution',
  templateUrl: './select-institution.dialog.html',
  styleUrl: './select-institution.dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    PaginatorComponent,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    IconComponent,
    MatListModule,
    AsyncPipe,
    JsonPipe,
  ],
  standalone: true,
})
export class SelectInstitutionDialog {
  institutionFacade = inject(InstitutionFacade);

  ref =
    inject<
      MatDialogRef<
        SelectInstitutionDialog,
        EditableInstitution | EditableInstitution[]
      >
    >(MatDialogRef);

  data = inject<SelectInstitutionConfig>(MAT_DIALOG_DATA);

  constructor() {
    this.institutionFacade.load();
  }

  onSearchChange(filter: InstitutionSearch) {
    this.institutionFacade.setFilter(filter);
    this.institutionFacade.load();
  }

  onPageChange({ page, size }: PageParams) {
    this.institutionFacade.setParams({ page, size });
    this.institutionFacade.load();
  }

  close(selected: MatListOption[]) {
    if (this.data.multiple) {
      this.ref.close(selected.map((item) => item.value));
    } else {
      this.ref.close(selected[0].value);
    }
  }
}
