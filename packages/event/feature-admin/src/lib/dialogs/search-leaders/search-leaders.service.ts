import { SearchLeadersDialog } from './search-leaders.dialog';
import { AccountRef } from '@devmx/shared-api-interfaces';
import { MatDialog } from '@angular/material/dialog';

export class SearchLeadersService {
  constructor(private dialog: MatDialog) {}

  open(data: AccountRef[] = []) {
    return this.dialog.open<SearchLeadersDialog, AccountRef[], AccountRef[]>(
      SearchLeadersDialog,
      { data }
    );
  }
}
