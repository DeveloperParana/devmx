import { MarkdownPipe, HtmlPipe } from '../../pipes';
import {
  input,
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-markdown-view',
  template: `<div
    class="markdown-view"
    [innerHTML]="content() | markdown | html"
  ></div>`,
  styleUrl: './markdown-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [MarkdownPipe, HtmlPipe],
})
export class MarkdownViewComponent {
  content = input.required<string>();
}
