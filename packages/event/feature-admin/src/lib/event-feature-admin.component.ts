import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'devmx-event-feature-admin',
    templateUrl: './event-feature-admin.component.html',
    styleUrl: './event-feature-admin.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet]
})
export class EventFeatureAdminComponent {}
