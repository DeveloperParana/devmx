import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { PresentationForm } from './presentation.form';
import { ReactiveFormsModule } from '@angular/forms';
import { Component, output } from '@angular/core';
import { Presentation } from '@devmx/shared-api-interfaces';

@Component({
  selector: 'devmx-presentation',
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    TextFieldModule,
  ],
  standalone: true,
})
export class PreesntationComponent {
  form = new PresentationForm();

  submitted = output<Presentation>();

  addTag(event: Event) {
    event.preventDefault();

    if (this.form.currentTag.valid) {
      this.form.addTag(this.form.currentTag.value);
      return this.form.currentTag.setValue('');
    }

    this.form.currentTag.markAsTouched();
  }

  addResource(event: Event) {
    event.preventDefault();

    if (this.form.currentResource.valid) {
      this.form.addResource(this.form.currentResource.value);
      return this.form.currentResource.reset('');
    }

    this.form.currentResource.markAsTouched();
  }

  onSubmit() {
    console.log(this.form.valid);
    console.log(this.form.errors);
    console.log(this.form.value);

    if (this.form.valid) {
      return this.submitted.emit(this.form.getRawValue());
    }

    this.form.markAllAsTouched();
  }
}
