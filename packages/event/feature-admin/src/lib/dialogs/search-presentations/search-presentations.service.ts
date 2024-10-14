import { SearchPresentationsDialog } from './search-presentations.dialog';
import { PresentationRef } from '@devmx/shared-api-interfaces';
import { MatDialog } from '@angular/material/dialog';

export class SearchPresentationsService {
  constructor(private dialog: MatDialog) {}

  open(data: PresentationRef[] = []) {
    return this.dialog.open<
      SearchPresentationsDialog,
      PresentationRef[],
      PresentationRef[]
    >(SearchPresentationsDialog, { data });
  }
}
