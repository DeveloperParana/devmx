import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';
import { Attachment } from './attachment';

@Component({
  selector: 'devmx-drop-files',
  templateUrl: './drop-files.component.html',
  styleUrl: './drop-files.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  standalone: true,
})
export class DropFilesComponent {
  destroyRef = inject(DestroyRef);

  directory = input(false);

  fileAttachmentAccept = output<{ attachments: Attachment[] }>();
  fileAttachmentAccepted = output<{ attachments: Attachment[] }>();
  fileInput = viewChild<ElementRef<HTMLInputElement>>('fileInput');

  // @Output() fileAttachmentAccept = new EventEmitter<{ attachments: Attachment[] }>();
  // @Output() fileAttachmentAccepted = new EventEmitter<{ attachments: Attachment[] }>();

  // @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  private draggingTimeout?: number;

  constructor(private el: ElementRef) {
    this.destroyRef.onDestroy(() => {
      clearTimeout(this.draggingTimeout);
    });
  }

  async attach(
    transferred: File[] | Attachment[] | FileList | DataTransfer
  ): Promise<void> {
    const attachments =
      transferred instanceof DataTransfer
        ? await Attachment.traverse(transferred, this.directory())
        : Attachment.from(transferred);

    const acceptedEvent = this.fileAttachmentAccept.emit({ attachments });

    // if (acceptedEvent && attachments.length) {
    //   this.fileAttachmentAccepted.emit({ attachments });
    // }
  }

  private hasFile(transfer: DataTransfer): boolean {
    return Array.from(transfer.types).includes('Files');
  }

  private pastedFile(items: DataTransferItemList): File | null {
    const images = /^image\/(gif|png|jpeg)$/;
    for (const item of Array.from(items)) {
      if (item.kind === 'file' && images.test(item.type)) {
        return item.getAsFile();
      }
    }
    return null;
  }

  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event'])
  onDragenter(event: DragEvent): void {
    if (this.draggingTimeout) {
      clearTimeout(this.draggingTimeout);
    }

    const transfer = event.dataTransfer;
    if (!transfer || !this.hasFile(transfer)) return;

    transfer.dropEffect = 'copy';
    this.el.nativeElement.setAttribute('hover', '');

    event.preventDefault();
  }

  @HostListener('dragleave', ['$event'])
  onDragleave(event: DragEvent): void {
    this.el.nativeElement.removeAttribute('hover');
    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  async onDrop(event: DragEvent): Promise<void> {
    this.el.nativeElement.removeAttribute('hover');

    const transfer = event.dataTransfer;
    if (!transfer || !this.hasFile(transfer)) return;

    await this.attach(transfer);
    event.preventDefault();
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent): void {
    if (!event.clipboardData || !event.clipboardData.items) return;

    const file = this.pastedFile(event.clipboardData.items);
    if (!file) return;

    this.attach([file]);
    event.preventDefault();
  }

  @HostListener('change', ['$event'])
  onChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input || !input.files || input.files.length === 0) return;

    this.attach(Array.from(input.files));
    input.value = '';
  }
}
