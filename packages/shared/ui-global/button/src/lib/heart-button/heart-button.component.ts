import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { IconComponent } from '@devmx/shared-ui-global/icon';

@Component({
  selector: 'devmx-heart-button',
  template: `
    <button
      mat-icon-button
      (click)="onClick()"
      [disabled]="disabled()"
      [ngClass]="{ active: loved() }"
    >
      <devmx-icon name="heart" />
    </button>
  `,
  imports: [MatIconButton, IconComponent, NgClass],
})
export class HeartButtonComponent {
  loved = input(false);

  loveChange = output<boolean>();

  disabled = input<boolean | ''>(false);

  isDisabled() {
    if (this.disabled() === '') {
      return true;
    }

    return this.disabled();
  }

  onClick() {
    this.loveChange.emit(!this.loved());
  }
}
