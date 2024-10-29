import { EditablePresentation } from '@devmx/shared-api-interfaces';
import { SearchPresentationsDialog } from './search-presentations.dialog';
import { MatDialog } from '@angular/material/dialog';

export class SearchPresentations {
  constructor(private dialog: MatDialog) {}

  open() {
    return this.dialog
      .open<SearchPresentationsDialog, void, EditablePresentation[]>(
        SearchPresentationsDialog
      )
      .afterClosed();
  }
}
