import { PresentationComment } from '@devmx/presentation-data-access';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PresentationCommentForm } from '../../forms';
import { ReactiveFormsModule } from '@angular/forms';
import {
  input,
  output,
  Component,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-presentation-comment',
  templateUrl: './presentation-comment.component.html',
  styleUrl: './presentation-comment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
  standalone: true,
})
export class PresentationCommentComponent implements AfterViewInit {
  form = new PresentationCommentForm();

  presentation = input<string>();

  submitted = output<PresentationComment>();

  ngAfterViewInit() {
    const presentation = this.presentation();
    console.log('presentation', presentation);

    this.form.patchValue({ presentation });
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.getRawValue());
      return this.form.controls.text.reset('');
    }
  }
}
