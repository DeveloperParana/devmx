import { MarkdownEditorComponent } from '../mardown-editor/markdown-editor.component';
import { MarkdownViewComponent } from '../markdown-view/markdown-view.component';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  signal,
  Component,
  contentChild,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-markdown-toolbar',
  templateUrl: './markdown-toolbar.component.html',
  styleUrl: './markdown-toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatCheckboxModule, IconComponent],
})
export class MarkdownToolbarComponent {
  editor = contentChild(MarkdownEditorComponent);
  view = contentChild(MarkdownViewComponent);

  preview = signal(false);

  togglePreview() {
    this.preview.set(!this.preview());
  }

  applyFormat(startTag: string, endTag: string = startTag) {
    const editor = this.editor();

    if (!editor || !editor.textarea) return;

    const start = editor.textarea.selectionStart;
    const end = editor.textarea.selectionEnd;
    const selectedText = editor.control.value.slice(start, end);
    const beforeText = editor.control.value.slice(0, start);
    const afterText = editor.control.value.slice(end);

    const newText = `${beforeText}${startTag}${selectedText}${endTag}${afterText}`;
    editor.control.setValue(newText);

    queueMicrotask(() => {
      if (!editor.textarea) return;

      editor.textarea.setSelectionRange(
        start + startTag.length,
        end + startTag.length
      );
      editor.textarea.focus();
    });
  }
}
