import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Presentation } from '@devmx/shared-api-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { PresentationForm } from '../../forms';

@Component({
  selector: 'devmx-editable-presentation',
  templateUrl: './editable-presentation.component.html',
  styleUrl: './editable-presentation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    DragDropModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    TextFieldModule,
  ],
  standalone: true,
})
export class EditablePresentationComponent {
  form = new PresentationForm();

  submitted = output<Presentation>();

  dropTags(event: CdkDragDrop<FormControl<string>[]>) {
    moveItemInArray(
      this.form.tags.controls,
      event.previousIndex,
      event.currentIndex
    );
  }

  dropResources(event: CdkDragDrop<FormControl<string>[]>) {
    moveItemInArray(
      this.form.resources.controls,
      event.previousIndex,
      event.currentIndex
    );
  }

  onSubmit() {
    if (this.form.valid) {
      return this.submitted.emit(this.form.getRawValue());
    }

    this.form.markAllAsTouched();
  }
}
