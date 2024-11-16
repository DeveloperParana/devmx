import { provideSelectUser, SelectUser } from '@devmx/account-ui-shared';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SheetComponent } from '@devmx/shared-ui-global/sheet';
import { EditableAlbum } from '@devmx/shared-api-interfaces';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumForm } from '../../forms';
import {
  inject,
  OnInit,
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'devmx-album-details',
  templateUrl: './album-details.sheet.html',
  styleUrl: './album-details.sheet.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideSelectUser()],
  imports: [
    MatBottomSheetModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    IconComponent,
  ],
  standalone: true,
})
export class AlbumDetailsSheet
  extends SheetComponent<EditableAlbum, AlbumDetailsSheet, EditableAlbum | null>
  implements OnInit
{
  form = new AlbumForm();

  cdr = inject(ChangeDetectorRef);

  selectUser = inject(SelectUser);

  ngOnInit() {
    if (this.data) {
      this.form.patch(this.data);
    }
  }

  selectContributors() {
    const select$ = this.selectUser.open({ multiple: true });

    select$.pipe(take(1)).subscribe((contributors) => {
      if (contributors) {
        for (const contributor of contributors) {
          this.form.contributors.add(contributor);
        }

        this.cdr.detectChanges();
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const result = this.form.getRawValue();
      console.log(result);

      return this.close(result);
    }

    return this.form.markAllAsTouched();
  }
}
