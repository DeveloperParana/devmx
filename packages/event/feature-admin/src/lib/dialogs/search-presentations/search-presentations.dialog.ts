import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { PresentationFacade } from '@devmx/presentation-data-access';
import { EditablePresentation } from '@devmx/shared-api-interfaces';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule, MatListOption } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, JsonPipe } from '@angular/common';
import {
  PresentationSearch,
  PresentationSearchComponent,
} from '@devmx/presentation-ui-shared';
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
    PaginatorComponent,
    PresentationSearchComponent,
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
export class SearchPresentationsDialog {
  presentationFacade = inject(PresentationFacade);

  ref =
    inject<MatDialogRef<SearchPresentationsDialog, EditablePresentation[]>>(
      MatDialogRef
    );

  constructor() {
    this.presentationFacade.load();
  }

  onSearchChange(filter: PresentationSearch) {
    this.presentationFacade.setFilter(filter);
    this.presentationFacade.load();
  }

  onPageChange({ page, size }: PageParams) {
    this.presentationFacade.setParams({ page, size });
    this.presentationFacade.load();
  }

  close(selected: MatListOption[]) {
    this.ref.close(selected.map((option) => option.value));
  }
}
