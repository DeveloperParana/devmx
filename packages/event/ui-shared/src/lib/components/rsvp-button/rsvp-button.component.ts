import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {
  Self,
  output,
  Optional,
  Component,
  Renderer2,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  NgControl,
  FormControl,
  ReactiveFormsModule,
  DefaultValueAccessor,
} from '@angular/forms';

@Component({
  selector: 'devmx-rsvp-button',
  templateUrl: './rsvp-button.component.html',
  styleUrl: './rsvp-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, MatButtonToggleModule],
})
export class RSVPButtonComponent extends DefaultValueAccessor {
  statusChange = output<void>();

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
}
