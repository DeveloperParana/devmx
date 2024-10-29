import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { SelectCover } from './dialogs';
import { DropFilesComponent } from './components';
import { Attachment } from './components/drop-files/attachment';

@Component({
  selector: 'devmx-event-feature-admin',
  templateUrl: './event-feature-admin.component.html',
  styleUrl: './event-feature-admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatDialogModule,
    IconComponent,
    DropFilesComponent,
  ],
  standalone: true,
})
export class EventFeatureAdminComponent {
  selectCover = inject(SelectCover);

  onAttachment(value: { attachments: Attachment[] }) {
    console.log(value);
  }

  onFileChange(files: FileList | null) {
    console.log(files);
    if (files && files.length > 0) {
      const [file] = Array.from(files);

      this.selectCover.open(file);
    }
  }
}
