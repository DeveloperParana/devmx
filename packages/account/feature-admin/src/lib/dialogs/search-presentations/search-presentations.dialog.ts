import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FilterPresentation } from '@devmx/account-data-access';
import { FilterPresentationComponent } from '../../components';
import { PresentationRef } from '@devmx/shared-api-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableModule } from '@angular/material/table';
import { AsyncPipe, JsonPipe } from '@angular/common';
import {
  PresentationFacade,
  providePresentation,
} from '@devmx/presentation-data-access';
import {
  MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {
  OnInit,
  inject,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-search-presentations',
  templateUrl: './search-presentations.dialog.html',
  styleUrl: './search-presentations.dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [providePresentation()],
  imports: [
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    PaginatorComponent,
    FilterPresentationComponent,
    AsyncPipe,
    JsonPipe,
  ],
  standalone: true,
})
export class SearchPresentationsDialog implements OnInit {
  ref =
    inject<MatDialogRef<SearchPresentationsDialog, PresentationRef[]>>(
      MatDialogRef
    );

  data = inject<PresentationRef[]>(MAT_DIALOG_DATA);

  presentationFacade = inject(PresentationFacade);

  destroyRef = inject(DestroyRef);

  displayedColumns: string[] = ['select', 'title', 'owner'];
  selection = new SelectionModel<PresentationRef>(true, []);

  ngOnInit() {
    this.presentationFacade.load();
    if (this.data) {
      this.selection.select(...this.data);
    }
  }

  onFilterChange(filter: FilterPresentation) {
    this.presentationFacade.setFilter(filter);
    this.presentationFacade.load();
  }

  onPageChange({ page, size }: PageParams) {
    this.presentationFacade.load(page, size);
  }

  isSelected(row: PresentationRef) {
    return this.selection.selected.find(
      (presentation) => presentation.id === row.id
    );
  }

  checkboxLabel(row?: PresentationRef): string {
    if (!row) {
      return 'Marcar';
    }
    const prefix = this.selection.isSelected(row) ? 'desmarcar' : 'marcar';

    return `${prefix} row ${row.title}`;
  }
}
