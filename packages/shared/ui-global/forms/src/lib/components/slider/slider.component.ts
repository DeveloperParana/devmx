import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { Slider } from '../../fields';

@Component({
    selector: 'devmx-slider',
    templateUrl: './slider.component.html',
    styleUrl: './slider.component.scss',
    imports: [ReactiveFormsModule, MatSliderModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent<T> {
  field = input.required<Slider<T>>();

  control = input.required<FormControl<T>>();
}
