import { input, Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { Range } from '../../fields';

@Component({
    selector: 'devmx-range',
    templateUrl: './range.component.html',
    styleUrl: './range.component.scss',
    imports: [
        ReactiveFormsModule,
        MatSliderModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RangeComponent<T> implements OnInit {
  field = input.required<Range<T>>();

  control = input.required<FormControl<T>>();

  ngOnInit() {
    console.log(this.control);

  }
}
