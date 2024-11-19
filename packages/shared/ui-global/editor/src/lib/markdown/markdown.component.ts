import {
  ChangeDetectionStrategy,
  Component,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { MarkedPipe } from '../marked.pipe';
import { SafeHtmlPipe } from '../safe-html.pipe';

@Component({
  selector: 'devmx-markdown',
  template: `<div [innerHTML]="content() | marked | safeHtml"></div>`,
  styleUrl: './markdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [SafeHtmlPipe, MarkedPipe],
})
export class MarkdownComponent {
  content = input.required<string>();
}
