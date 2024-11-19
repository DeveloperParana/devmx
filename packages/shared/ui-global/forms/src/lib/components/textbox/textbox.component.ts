import { input, Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { KeyValuePipe } from '@angular/common';
import { Textbox } from '../../fields';

@Component({
    selector: 'devmx-textbox',
    templateUrl: './textbox.component.html',
    styleUrl: './textbox.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        TextFieldModule,
        MatInputModule,
        KeyValuePipe,
    ]
})
export class TextboxComponent<T> {
  field = input.required<Textbox<T>>();

  name = input.required<string>();

  control = input.required<FormControl<T>>();
}
