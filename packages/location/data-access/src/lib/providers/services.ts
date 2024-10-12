import { createServiceProvider, HttpClient } from '@devmx/shared-data-access';
import { AddressService, CityService } from '@devmx/location-domain/client';
import { AddressServiceImpl, CityServiceImpl } from '../services';
import { Env } from '@devmx/shared-api-interfaces/client';

export function provideCityService() {
  return createServiceProvider(CityService, CityServiceImpl, [HttpClient, Env]);
}

export function provideAddressService() {
  return createServiceProvider(AddressService, AddressServiceImpl, [
    HttpClient,
  ]);
}

export function provideServices() {
  return [provideCityService(), provideAddressService()];
}
