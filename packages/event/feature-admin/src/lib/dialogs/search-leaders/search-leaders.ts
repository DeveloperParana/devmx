import { EditableAccount } from '@devmx/shared-api-interfaces';
import { SearchLeadersDialog } from './search-leaders.dialog';
import { MatDialog } from '@angular/material/dialog';

export class SearchLeaders {
  constructor(private dialog: MatDialog) {}

  open() {
    return this.dialog
      .open<SearchLeadersDialog, void, EditableAccount[]>(SearchLeadersDialog)
      .afterClosed();
  }
}
