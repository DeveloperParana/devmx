import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {
  Self,
  output,
  Optional,
  Component,
  Renderer2,
  ElementRef,
  ChangeDetectionStrategy,
  input,
} from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
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
  imports: [ReactiveFormsModule, MatButtonToggleModule, MatTooltipModule],
})
export class RSVPButtonComponent extends DefaultValueAccessor {
  attendees = input<number>(0);
  maxAttendees = input<number>(0);
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
