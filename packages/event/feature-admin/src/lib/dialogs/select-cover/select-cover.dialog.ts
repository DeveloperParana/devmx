import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { ImageRefForm } from '@devmx/shared-ui-global/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {
  loadImage,
  cropImage,
  CropImageComponent,
} from '@devmx/shared-ui-global/image';

export interface CoverResult {
  src: string;
  alt?: string;
}

@Component({
    selector: 'devmx-select-cover',
    templateUrl: './select-cover.dialog.html',
    styleUrl: './select-cover.dialog.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        CropImageComponent,
        MatInputModule,
        MatButtonModule,
        IconComponent,
    ]
})
export class SelectCoverDialog {
  ref = inject<DialogRef<CoverResult, SelectCoverDialog>>(DialogRef);

  data = inject<Blob>(DIALOG_DATA);

  src: string;

  form = new ImageRefForm();

  position = new DOMRect();

  constructor() {
    this.src = URL.createObjectURL(this.data);
  }

  onCropChange(rect: DOMRect) {
    this.position = rect;
  }

  async onCrop() {
    const image = await loadImage(this.src);

    const src = cropImage(image, this.position);

    this.form.patchValue({ src });

    this.ref.close(this.form.getRawValue());
  }

  close() {
    this.ref.close();
  }
}
