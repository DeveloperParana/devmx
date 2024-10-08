import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MimeType } from '@devmx/shared-api-interfaces';

@Component({
  selector: 'devmx-file',
  templateUrl: './file.component.html',
  styleUrl: './file.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatIconModule],
  standalone: true,
})
export class FileComponent {
  icon = input<string>('add_photo_alternate');

  accept = input<MimeType[]>([]);

  selected = output<File>();

  onSelected(list: FileList | null) {
    if (list instanceof FileList) {
      const [file] = Array.from(list);
      this.selected.emit(file);
    }
  }
}
