import { MarkedPipe, SafeHtmlPipe } from '@devmx/shared-ui-global/editor';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from '../dialog.component';
import { DialogModule } from '@angular/cdk/dialog';
import {
  Component,
  ElementRef,
  viewChild,
  afterRender,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-readme-dialog',
  templateUrl: './read-me-dialog.component.html',
  styleUrl: '../dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DialogModule, MatButtonModule, MarkedPipe, SafeHtmlPipe],
})
export class ReadMeDialogComponent extends DialogComponent<
  boolean,
  ReadMeDialogComponent,
  string
> {
  contentRef = viewChild<ElementRef<HTMLElement>>('contentRef');

  constructor() {
    super();

    afterRender(() => {
      const article = this.contentRef()?.nativeElement;
      queueMicrotask(() => {
        if (article) article.scrollTop = 0;
      });
    });
  }
}
