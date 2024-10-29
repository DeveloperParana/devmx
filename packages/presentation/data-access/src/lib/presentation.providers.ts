import { provideFacades, provideServices, provideUseCases } from "./providers";

export function providePresentation() {
  return [
    ...provideServices(),

    ...provideUseCases(),

    ...provideFacades()
  ];
}
