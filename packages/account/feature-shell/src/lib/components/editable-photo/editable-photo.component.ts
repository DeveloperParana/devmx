import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { PhotoComponent } from '@devmx/shared-ui-global';

@Component({
  selector: 'devmx-editable-photo',
  template: `<devmx-photo (cropped)="ref.close($event)" />`,
  styleUrl: './editable-photo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatDialogModule, PhotoComponent],
  standalone: true,
})
export class EditablePhotoComponent {
  ref = inject<MatDialogRef<EditablePhotoComponent, Blob>>(MatDialogRef);
}
