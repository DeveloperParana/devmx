import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe } from '@angular/common';
import {
  Self,
  Optional,
  Renderer2,
  Component,
  ElementRef,
} from '@angular/core';
import {
  NgControl,
  FormControl,
  ReactiveFormsModule,
  DefaultValueAccessor,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { City } from '@devmx/shared-api-interfaces';

@Component({
  selector: 'devmx-select-city',
  templateUrl: './select-city.component.html',
  styleUrl: './select-city.component.scss',
  imports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    AsyncPipe,
  ],
  standalone: true,
})
export class SelectCityComponent extends DefaultValueAccessor {



  get control() {
    return this.ngControl.control as FormControl;
  }

  constructor(
    renderer: Renderer2,
    elementRef: ElementRef,
    @Optional() @Self() public ngControl: NgControl
  ) {
    super(renderer, elementRef, true);
    this.ngControl.valueAccessor = this;
  }

  displayFn = (option: City) => {
    return option && option.name ? option.name : '';
  };
}
