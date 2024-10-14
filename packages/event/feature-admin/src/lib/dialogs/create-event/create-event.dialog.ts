import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CreateEvent } from '@devmx/shared-api-interfaces';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateEventForm } from '../../forms';

@Component({
  selector: 'devmx-create-event',
  templateUrl: './create-event.dialog.html',
  styleUrl: './create-event.dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  standalone: true,
})
export class CreateEventDialog {
  ref = inject<MatDialogRef<CreateEventDialog, CreateEvent>>(MatDialogRef);

  form = new CreateEventForm();

  onSubmit() {
    if (this.form.valid) {
      return this.ref.close(this.form.getRawValue());
    }

    this.form.markAllAsTouched();
  }
}
