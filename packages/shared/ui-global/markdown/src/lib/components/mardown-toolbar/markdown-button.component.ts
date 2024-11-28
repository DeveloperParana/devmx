import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type MarkdownButtonCommand = 'bold' | 'italic' | 'code';

@Component({
  selector: 'button[devmx-markdown-button]',
  template: `<ng-content select="devmx-icon" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkdownButtonComponent {
  command = input.required<MarkdownButtonCommand>();
}
