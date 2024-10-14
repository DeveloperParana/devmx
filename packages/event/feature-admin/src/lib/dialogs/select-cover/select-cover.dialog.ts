import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CropCoverComponent } from '@devmx/shared-ui-global';
import { SelectCoverOptions } from './select-cover.options';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'devmx-select-cover',
  template: `<devmx-crop-cover
    [width]="data.width"
    [height]="data.height"
    (cropped)="ref.close($event)"
  />`,
  styleUrl: './select-cover.dialog.scss',
  imports: [CropCoverComponent],
  standalone: true,
})
export class SelectCoverDialog {
  ref = inject<MatDialogRef<SelectCoverDialog, Blob>>(MatDialogRef);

  data = inject<SelectCoverOptions>(MAT_DIALOG_DATA);
}
