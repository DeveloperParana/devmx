import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
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
  Component,
  viewChild,
  Renderer2,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  exportAs: 'markdownEditor',
  selector: 'devmx-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrl: './markdown-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    TextFieldModule,
    MatInputModule,
    MatTabsModule,
  ],
})
export class MarkdownEditorComponent extends DefaultValueAccessor {
  textareaRef = viewChild<ElementRef<HTMLTextAreaElement>>('textareaRef');

  get textarea() {
    const ref = this.textareaRef();
    return ref ? ref.nativeElement : null;
  }

  label = input('');

  hint = input('');

  error = input('');

  minRows = input(5);
  maxRows = input(10);

  get control() {
    return (this.ngControl.control as FormControl) ?? new FormControl();
  }

  constructor(
    renderer: Renderer2,
    elementRef: ElementRef,
    @Optional() @Self() public ngControl: NgControl
  ) {
    super(renderer, elementRef, true);
    this.ngControl.valueAccessor = this;
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.textarea) {
      const { selectionStart, value } = this.textarea;
      const currentLineStart = value.lastIndexOf('\n', selectionStart - 1) + 1;
      const currentLine = value.slice(currentLineStart, selectionStart);

      const orderedListItem = currentLine.match(/^(\d+)\.\s/);

      if (orderedListItem) {
        if (currentLine.match(/^(\d+)\.\s$/)) return;

        event.preventDefault();

        this.handleOrderedList(orderedListItem, value, selectionStart);
      }

      const unorderedListItem = currentLine.match(/^-\s/);

      if (unorderedListItem) {
        if (currentLine.match(/^-\s$/)) return;

        event.preventDefault();

        this.handleUnorderedList(value, selectionStart);
      }
    }
  }

  handleOrderedList(
    currentItem: RegExpMatchArray,
    value: string,
    selectionStart: number
  ) {
    const currentNumber = parseInt(currentItem[1], 10);
    const nextNumber = currentNumber + 1;

    const beforeCursor = value.slice(0, selectionStart);
    const afterCursor = value.slice(selectionStart);

    const newText = `${beforeCursor}\n${nextNumber}. ${afterCursor}`;
    this.control.setValue(newText);

    queueMicrotask(() => {
      if (this.textarea) {
        const newCursorPosition = selectionStart + `\n${nextNumber}. `.length;
        this.textarea.setSelectionRange(newCursorPosition, newCursorPosition);
      }
    });
  }

  handleUnorderedList(value: string, selectionStart: number) {
    const beforeCursor = value.slice(0, selectionStart);
    const afterCursor = value.slice(selectionStart);

    // Adiciona uma nova linha com `- `
    const newText = `${beforeCursor}\n- ${afterCursor}`;
    this.control.setValue(newText);

    queueMicrotask(() => {
      if (this.textarea) {
        const newCursorPosition = selectionStart + `\n- `.length;
        this.textarea.setSelectionRange(newCursorPosition, newCursorPosition);
      }
    });
  }
}
