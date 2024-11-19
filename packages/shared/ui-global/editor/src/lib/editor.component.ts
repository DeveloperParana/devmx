import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
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
  input,
  Optional,
  Renderer2,
  Component,
  viewChild,
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
    MatButtonToggleModule,
    TextFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    IconComponent,
    SafeHtmlPipe,
  ],
})
export class EditorComponent extends DefaultValueAccessor {
  textareaRef = viewChild<ElementRef<HTMLTextAreaElement>>('textareaRef');

  label = input('');

  hint = input('');

  autofocus = input<boolean | ''>();

  get autofocusEnabled() {
    return this.autofocus() || this.autofocus() === '';
  }

  get textarea() {
    const ref = this.textareaRef();
    return ref ? ref.nativeElement : null;
  }

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

  applyFormat(startTag: string, endTag: string = startTag) {
    if (!this.textarea) return;

    const start = this.textarea.selectionStart;
    const end = this.textarea.selectionEnd;
    const selectedText = this.control.value.slice(start, end);
    const beforeText = this.control.value.slice(0, start);
    const afterText = this.control.value.slice(end);

    const newText = `${beforeText}${startTag}${selectedText}${endTag}${afterText}`;
    this.control.setValue(newText);

    queueMicrotask(() => {
      if (!this.textarea) return;

      this.textarea.setSelectionRange(
        start + startTag.length,
        end + startTag.length
      );
      this.textarea.focus();
    });
  }

  applyBold() {
    this.applyFormat('**');
  }

  applyItalic() {
    this.applyFormat('_');
  }

  applyCode() {
    this.applyFormat('`');
  }
}
