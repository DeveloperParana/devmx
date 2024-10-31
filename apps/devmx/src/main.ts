import { bootstrapApplication } from '@angular/platform-browser';
import { GoogleTagElement } from './app/utils/google-tag';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { env } from './envs/env';

if (env.prod) {
  document.body.appendChild(new GoogleTagElement());
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
