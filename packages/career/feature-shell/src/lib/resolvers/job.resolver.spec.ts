import { JobOut } from '@devmx/shared-api-interfaces';
import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { jobResolver } from './job.resolver';

describe('jobResolver', () => {
  const executeResolver: ResolveFn<JobOut> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => jobResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
