import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Presentation } from '@devmx/shared-api-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { PresentationForm } from '../../forms';

@Component({
  selector: 'devmx-create-presentation',
  templateUrl: './create-presentation.component.html',
  styleUrl: './create-presentation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    TextFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  standalone: true,
})
export class CreatePresentationComponent {
  form = new PresentationForm();

  ref = inject<MatDialogRef<CreatePresentationComponent>>(
    MatDialogRef<CreatePresentationComponent, Presentation>
  );

  onSubmit() {
    if (this.form.valid) {
      return this.ref.close(this.form.getRawValue());
    }

    this.form.markAllAsTouched();
  }
}
