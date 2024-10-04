import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreatePresentation } from '@devmx/shared-api-interfaces';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePresentationForm } from '../../forms';

@Component({
  selector: 'devmx-create-presentation',
  templateUrl: './create-presentation.dialog.html',
  styleUrl: './create-presentation.dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  standalone: true,
})
export class CreatePresentationDialog {
  form = new CreatePresentationForm();

  ref = inject<MatDialogRef<CreatePresentationDialog>>(
    MatDialogRef<CreatePresentationDialog, CreatePresentation>
  );

  onSubmit() {
    if (this.form.valid) {
      return this.ref.close(this.form.getRawValue());
    }

    this.form.markAllAsTouched();
  }
}
