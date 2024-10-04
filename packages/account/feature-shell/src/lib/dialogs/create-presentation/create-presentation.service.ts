import { CreatePresentationDialog } from './create-presentation.dialog';
import { CreatePresentation } from '@devmx/shared-api-interfaces';
import { MatDialog } from '@angular/material/dialog';

export class CreatePresentationService {
  constructor(private dialog: MatDialog) {}

  open() {
    return this.dialog.open<CreatePresentationDialog, void, CreatePresentation>(
      CreatePresentationDialog
    );
  }
}
