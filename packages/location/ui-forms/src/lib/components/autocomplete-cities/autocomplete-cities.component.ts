import { AutocompleteCitiesService } from './autocomplete-cities.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { City } from '@devmx/shared-api-interfaces';
import { AsyncPipe } from '@angular/common';
import { debounceTime, map } from 'rxjs';
import {
  NgControl,
  FormControl,
  ReactiveFormsModule,
  DefaultValueAccessor,
} from '@angular/forms';
import {
  Self,
  inject,
  OnInit,
  Optional,
  Component,
  Renderer2,
  ElementRef,
  DestroyRef,
} from '@angular/core';

@Component({
  selector: 'devmx-autocomplete-cities',
  templateUrl: './autocomplete-cities.component.html',
  styleUrl: './autocomplete-cities.component.scss',
  imports: [
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    AsyncPipe,
  ],
  standalone: true,
})
export class AutocompleteCitiesComponent
  extends DefaultValueAccessor
  implements OnInit
{
  service = inject(AutocompleteCitiesService);

  #destroyRef = inject(DestroyRef);

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

  ngOnInit() {
    this.control.valueChanges
      .pipe(
        debounceTime(600),
        map((value) => (typeof value === 'string' ? value : value?.name)),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe((name) => this.service.search(name));
  }

  clearIfString() {
    if (typeof this.control.value === 'string') {
      this.control.reset();
    }
  }

  displayFn(city: City): string {
    return city && city.name ? city.name : '';
  }
}
