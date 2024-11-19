import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'devmx-settings',
    templateUrl: './settings.container.html',
    styleUrl: './settings.container.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatListModule,
        MatCardModule,
        IconComponent,
        RouterLinkActive,
        RouterOutlet,
        RouterLink,
    ]
})
export class SettingsContainer {}
