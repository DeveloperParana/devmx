import { MimeType } from '@devmx/shared-api-interfaces';
import {
  input,
  inject,
  output,
  Directive,
  ElementRef,
  HostListener,
} from '@angular/core';
import { readMimeType } from '../utils/read-mime-type';

@Directive({
  selector: '[devmxDropZone]',
  standalone: true,
})
export class DropZoneDirective {
  elRef = inject<ElementRef<HTMLElement>>(ElementRef);

  get el() {
    return this.elRef.nativeElement;
  }

  accept = input<MimeType[]>([]);

  enter = output<DragEvent>();

  over = output<DragEvent>();

  leave = output<DragEvent>();

  files = output<File[]>();

  @HostListener('dragenter', ['$event'])
  onEnter(event: DragEvent) {
    if (event instanceof DragEvent) {
      event.preventDefault();

      this.el.classList.add('drag-over');

      this.enter.emit(event);
    }
  }

  @HostListener('dragover', ['$event'])
  onOver(event: DragEvent) {
    if (event instanceof DragEvent) {
      event.preventDefault();

      this.over.emit(event);
    }
  }

  @HostListener('dragleave', ['$event'])
  onLeave(event: DragEvent) {
    if (event instanceof DragEvent) {
      event.preventDefault();

      this.el.classList.remove('drag-over');

      this.leave.emit(event);
    }
  }

  @HostListener('drop', ['$event'])
  async onDrop(event: DragEvent) {
    if (event instanceof DragEvent) {
      event.preventDefault();

      this.el.classList.remove('drag-over');

      const fileList = event.dataTransfer?.files;

      if (fileList && fileList.length) {
        const list = Array.from(fileList);
        const files: File[] = [];

        for (const file of list) {
          const mimeType = await readMimeType(file);
          if (mimeType && this.accept().includes(mimeType)) {
            files.push(file);
          }
        }

        this.files.emit(files);
      }
    }
  }
}
