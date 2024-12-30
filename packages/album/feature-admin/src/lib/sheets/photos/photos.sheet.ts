import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { Album } from '@devmx/shared-api-interfaces';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'devmx-photos',
  templateUrl: './photos.sheet.html',
  styleUrl: './photos.sheet.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatListModule, MatButtonModule, IconComponent],
})
export class PhotosSheet {
  ref = inject<MatBottomSheetRef<PhotosSheet, Album>>(MatBottomSheetRef);

  data = inject<Album>(MAT_BOTTOM_SHEET_DATA);
}
