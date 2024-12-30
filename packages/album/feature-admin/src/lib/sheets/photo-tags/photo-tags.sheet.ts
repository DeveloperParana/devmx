import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { Photo } from '@devmx/shared-api-interfaces';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'devmx-photo-tags',
  templateUrl: './photo-tags.sheet.html',
  styleUrl: './photo-tags.sheet.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatListModule, MatButtonModule],
})
export class PhotoTagsSheet {
  ref = inject<MatBottomSheetRef<PhotoTagsSheet, Photo>>(MatBottomSheetRef);

  data = inject<Photo>(MAT_BOTTOM_SHEET_DATA);
}
