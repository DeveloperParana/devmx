import { MatFormFieldModule } from '@angular/material/form-field';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { SafeHtmlPipe } from './safe-html.pipe';
import { marked } from 'marked';
import {
  NgControl,
  FormControl,
  ReactiveFormsModule,
  DefaultValueAccessor,
} from '@angular/forms';
import {
  Self,
  Optional,
  Renderer2,
  Component,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    TextFieldModule,
    MatInputModule,
    MatTabsModule,
    IconComponent,
    SafeHtmlPipe,
  ],
  standalone: true,
})
export class EditorComponent extends DefaultValueAccessor {
  get control() {
    return (
      this.ngControl ? this.ngControl.control : new FormControl()
    ) as FormControl;
  }

  constructor(
    renderer: Renderer2,
    elementRef: ElementRef,
    @Optional() @Self() public ngControl: NgControl
  ) {
    super(renderer, elementRef, true);

    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  get previewHTML() {
    return marked(this.control.value ?? '', { gfm: true, async: false });
  }
}
