import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { env } from './envs/env';
import './app/utils/google-tag';

if (env.prod) {
  document.body.appendChild(
    document.createElement('script', { is: 'google-tag' })
  );
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
