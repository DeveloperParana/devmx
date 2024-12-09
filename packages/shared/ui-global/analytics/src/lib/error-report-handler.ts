import { ErrorHandler, Injectable } from '@angular/core';
import { AnalyticsService } from './analytics.service';
import { formatErrorForAnalytics } from './utils';

@Injectable()
export class AnalyticsErrorReportHandler extends ErrorHandler {
  constructor(private _analytics: AnalyticsService) {
    super();
  }

  override handleError(error: ErrorHandler) {
    super.handleError(error);

    // Report the error in Google Analytics.
    if (error instanceof Error) {
      this._analytics.reportError(formatErrorForAnalytics(error));
    } else {
      this._analytics.reportError(error.toString());
    }
  }
}
