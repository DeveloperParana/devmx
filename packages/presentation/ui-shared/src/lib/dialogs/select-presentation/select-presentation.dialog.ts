import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { MatListModule, MatListOption } from '@angular/material/list';
import { SearchFieldComponent } from '@devmx/shared-ui-global/search';
import { PresentationFacade } from '@devmx/presentation-data-access';
import { EditablePresentation } from '@devmx/shared-api-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogActions,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface SelectPresentationConfig {
  multiple?: boolean;
}

@Component({
  selector: 'devmx-select-presentation',
  templateUrl: './select-presentation.dialog.html',
  styleUrl: './select-presentation.dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    PaginatorComponent,
    SearchFieldComponent,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatListModule,
    AsyncPipe,
  ],
})
export class SelectPresentationDialog {
  presentationFacade = inject(PresentationFacade);

  ref =
    inject<
      MatDialogRef<
        SelectPresentationDialog,
        EditablePresentation | EditablePresentation[]
      >
    >(MatDialogRef);

  data = inject<SelectPresentationConfig>(MAT_DIALOG_DATA);

  search = '';

  constructor() {
    this.load();
  }

  onSearchChange(title: string) {
    this.search = title;
    this.load();
  }

  onPageChange({ page, size }: PageParams) {
    this.presentationFacade.setParams({ page, size });
    this.load();
  }

  load() {
    const filter = { title: this.search };
    this.presentationFacade.setFilter(filter);
    this.presentationFacade.load();
  }

  close(selected: MatListOption[]) {
    if (this.data.multiple) {
      this.ref.close(selected.map((item) => item.value));
    } else {
      this.ref.close(selected[0].value);
    }
  }
}
