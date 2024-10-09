import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { Radio } from '../../fields';

@Component({
  selector: 'devmx-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
  imports: [ReactiveFormsModule, MatRadioModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RadioComponent<T> {
  field = input.required<Radio<T>>();

  control = input.required<FormControl<T>>();
}
