import { Env } from '@devmx/shared-api-interfaces/client';
import { formatErrorEventForAnalytics } from './utils';
import { Injectable } from '@angular/core';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?(...args: unknown[]): void;
  }
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private previousUrl: string | undefined;

  constructor(private env: Env) {
    if (env.prod) {
      this.#installGlobalSiteTag();
      this.#installWindowErrorHandler();
    }
  }

  reportError(description: string, fatal = true) {
    // Limit descriptions to maximum of 150 characters.
    // See: https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#exd.
    description = description.substring(0, 150);

    this.#gtag('event', 'exception', { description: description, fatal });
  }

  locationChanged(url: string) {
    this.#sendPage(url);
  }

  #sendPage(url: string) {
    if (url === this.previousUrl) {
      return;
    }
    this.previousUrl = url;

    this.#gtag('event', 'page_view', {
      page_location: location.href,
      page_path: this.previousUrl,
      page_title: document.title,
    });
  }

  #gtag(...args: unknown[]) {
    if (window.gtag) {
      window.gtag(...args);
    }
  }

  #installGlobalSiteTag() {
    const url = `https://www.googletagmanager.com/gtag/js?id=${this.env.googleTag}`;

    // Note: This cannot be an arrow function as `gtag.js` expects an actual `Arguments`
    // instance with e.g. `callee` to be set. Do not attempt to change this and keep this
    // as much as possible in sync with the tracking code snippet suggested by the Google
    // Analytics 4 web UI under `Data Streams`.
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...params: unknown[]) {
      window.dataLayer?.push(params);
    };
    window.gtag('js', new Date());

    // Configure properties before loading the script. This is necessary to avoid
    // loading multiple instances of the gtag JS scripts.
    window.gtag('config', this.env.googleTag);

    if (!this.env.prod) {
      return;
    }

    const el = window.document.createElement('script');
    el.async = true;
    el.src = url;
    window.document.head.appendChild(el);
  }

  #installWindowErrorHandler() {
    window.addEventListener('error', (event) =>
      this.reportError(formatErrorEventForAnalytics(event), true)
    );
  }
}
