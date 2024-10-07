import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextboxFormField } from '../../form-field';
import {
  input,
  inject,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-textbox',
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.scss',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  standalone: true,
})
export class TextboxComponent<T extends string | number> {
  options = input.required<TextboxFormField<T>>();
}
