import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Component, inject } from '@angular/core';
import { CrumbsService } from './crumbs.service';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'devmx-crumbs',
  templateUrl: './crumbs.component.html',
  styleUrl: './crumbs.component.scss',
  imports: [RouterLink, MatButtonModule, MatIconModule, AsyncPipe],
  standalone: true,
})
export class CrumbsComponent {
  crumbsService = inject(CrumbsService);
}
