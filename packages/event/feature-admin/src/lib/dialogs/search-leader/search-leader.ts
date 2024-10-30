import { EditableAccount } from '@devmx/shared-api-interfaces';
import { SearchLeaderDialog } from './search-leader.dialog';
import { MatDialog } from '@angular/material/dialog';

export class SearchLeader {
  constructor(private dialog: MatDialog) {}

  open() {
    return this.dialog
      .open<SearchLeaderDialog, void, EditableAccount>(SearchLeaderDialog)
      .afterClosed();
  }
}
