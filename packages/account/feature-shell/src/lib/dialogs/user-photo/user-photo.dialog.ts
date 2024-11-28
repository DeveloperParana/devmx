import { DialogRef, DialogModule, DIALOG_DATA } from '@angular/cdk/dialog';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { CropPhotoDirective } from './crop-photo.directive';
import { MatButtonModule } from '@angular/material/button';
import { UserPhotoData } from './user-photo-data';
import {
  inject,
  viewChild,
  Component,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-user-photo',
  templateUrl: './user-photo.dialog.html',
  styleUrl: './user-photo.dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DialogModule, MatButtonModule, CropPhotoDirective, IconComponent],
})
export class UserPhotoDialog implements AfterViewInit {
  ref = inject(DialogRef<Blob, UserPhotoDialog>);

  data = inject<UserPhotoData>(DIALOG_DATA);

  cropPhoto = viewChild(CropPhotoDirective);

  ngAfterViewInit(): void {
    const cropPhoto = this.cropPhoto();
    if (!cropPhoto) return;

    cropPhoto.image.src = URL.createObjectURL(this.data.file);
  }

  zoomIn() {
    this.cropPhoto()?.zoomIn();
  }

  zoomOut() {
    this.cropPhoto()?.zoomOut();
  }

  crop() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const crop = this.cropPhoto();

    if (!crop || !crop.context || !context) return;

    canvas.width = crop.context.canvas.width;
    canvas.height = crop.context.canvas.height;

    const { x, y } = crop.position;
    const w = crop.image.width * crop.scale;
    const h = crop.image.height * crop.scale;

    context.drawImage(crop.image, x, y, w, h);

    canvas.toBlob((blob) => {
      if (blob) this.ref.close(blob);
    });
  }
}
