import { MatFormFieldModule } from '@angular/material/form-field';
import { UserSocialType } from '@devmx/shared-api-interfaces';
import { MatSelectModule } from '@angular/material/select';
import { FormOption, PhoneMaskDirective } from '@devmx/shared-ui-global/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { UserSocialData } from './user-social-data';
import { UserSocialItemForm } from '../../forms';
import {
  MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {
  inject,
  OnInit,
  signal,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-user-social',
  templateUrl: './user-social.dialog.html',
  styleUrl: './user-social.dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    PhoneMaskDirective,
  ],
})
export class UserSocialDialog implements OnInit {
  ref = inject(MatDialogRef<UserSocialDialog, Blob>);

  data = inject<UserSocialData>(MAT_DIALOG_DATA);

  allOptions: FormOption<UserSocialType>[] = [
    { value: 'website', viewValue: 'Website' },
    { value: 'github', viewValue: 'Github' },
    { value: 'linkedIn', viewValue: 'Linked In' },
    { value: 'whatsApp', viewValue: 'WhatsApp' },
    { value: 'notion', viewValue: 'Notion' },
    { value: 'instagram', viewValue: 'Instagram' },
  ];

  options = signal<FormOption<UserSocialType>[]>([]);

  form = new UserSocialItemForm();

  ngOnInit() {
    if (this.data) {
      const options = this.allOptions.filter((option) => {
        return this.data.items.every((item) => option.value !== item.type);
      });

      this.options.set(options);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      return this.ref.close(this.form.getRawValue());
    }

    return this.form.markAllAsTouched();
  }
}
