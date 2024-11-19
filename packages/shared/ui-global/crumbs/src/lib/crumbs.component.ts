import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { Component, inject } from '@angular/core';
import { CrumbsService } from './crumbs.service';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'devmx-crumbs',
    templateUrl: './crumbs.component.html',
    styleUrl: './crumbs.component.scss',
    imports: [RouterLink, MatButtonModule, IconComponent, AsyncPipe]
})
export class CrumbsComponent {
  crumbsService = inject(CrumbsService);
}
