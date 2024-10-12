import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Component, inject, OnInit } from '@angular/core';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateJobForm } from '../../forms';

@Component({
  selector: 'devmx-job',
  templateUrl: './job.container.html',
  styleUrl: './job.container.scss',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    TextFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule,
  ],
  standalone: true,
})
export class JobContainer implements OnInit {
  route = inject(ActivatedRoute);

  form = new UpdateJobForm();

  ngOnInit() {
    this.route.data.subscribe(({ job }) => {
      if (job) this.form.patchValue(job);
    });
  }
}
