import { OnInit, Component, ChangeDetectionStrategy } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { EditableAlbum, UserRef } from '@devmx/shared-api-interfaces';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SheetComponent } from '@devmx/shared-ui-global/sheet';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumForm } from '../../forms';
import {
  provideSelectUser,
  SearchUserComponent,
} from '@devmx/account-ui-shared';

@Component({
  selector: 'devmx-create-album',
  templateUrl: './create-album.sheet.html',
  styleUrl: './create-album.sheet.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideSelectUser()],
  imports: [
    SearchUserComponent,
    MatBottomSheetModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    IconComponent,
  ],
})
export class CreateAlbumSheet
  extends SheetComponent<EditableAlbum, CreateAlbumSheet, EditableAlbum | null>
  implements OnInit
{
  form = new AlbumForm();

  ngOnInit() {
    if (this.data) {
      this.form.patch(this.data);
    }
  }

  onContributorSelected(user: UserRef) {
    this.form.contributors.add(user);
  }

  onSubmit() {
    if (this.form.valid) {
      return this.close(this.form.getRawValue());
    }

    return this.form.markAllAsTouched();
  }
}
