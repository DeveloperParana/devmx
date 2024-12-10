import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DialogComponent } from '../dialog.component';
import { DialogModule } from '@angular/cdk/dialog';

export interface PromptDialogData {
  title: string;
  label: string;
  value?: string;
  required?: boolean;
}

@Component({
  selector: 'devmx-prompt-dialog',
  templateUrl: './prompt-dialog.component.html',
  styleUrl: '../dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    DialogModule,
  ],
})
export class PromptDialogComponent extends DialogComponent<
  string,
  PromptDialogComponent,
  PromptDialogData
> {
  control = new FormControl(this.data.value, {
    nonNullable: true,
    validators: this.data.required ? [Validators.required] : [],
  });

  onSubmit() {
    if (this.control.valid) {
      return this.close(this.control.value);
    }

    this.control.markAsTouched();
  }
}
