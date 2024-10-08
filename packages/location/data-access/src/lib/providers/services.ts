import { CityService } from '@devmx/location-domain/client';
import { Env } from '@devmx/shared-api-interfaces/client';
import { HttpClient } from '@devmx/shared-data-access';
import { CityServiceImpl } from '../services';

export function provideCityService() {
  return {
    provide: CityService,
    useFactory(http: HttpClient, env: Env) {
      return new CityServiceImpl(http, env);
    },
    deps: [HttpClient, Env],
  };
}
