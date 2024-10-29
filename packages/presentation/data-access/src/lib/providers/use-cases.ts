import { createUseCaseProvider } from '@devmx/shared-data-access';
import {
  PresentationService,
  CreatePresentationUseCase,
  FindPresentationByIDUseCase,
  FindPresentationsUseCase,
  DeletePresentationUseCase,
  UpdatePresentationUseCase,
} from '@devmx/presentation-domain/client';

export function provideCreatePresentationUseCase() {
  return createUseCaseProvider(CreatePresentationUseCase, [
    PresentationService,
  ]);
}

export function provideFindPresentationsUseCase() {
  return createUseCaseProvider(FindPresentationsUseCase, [PresentationService]);
}

export function provideFindPresentationByIDUseCase() {
  return createUseCaseProvider(FindPresentationByIDUseCase, [
    PresentationService,
  ]);
}

export function provideUpdatePresentationUseCase() {
  return createUseCaseProvider(UpdatePresentationUseCase, [
    PresentationService,
  ]);
}

export function provideDeletePresentationUseCase() {
  return createUseCaseProvider(DeletePresentationUseCase, [
    PresentationService,
  ]);
}

// export function provideUploadCoverUseCase() {
//   return createUseCaseProvider(UploadCoverUseCase, [PresentationService]);
// }

export function provideUseCases() {
  return [
    provideCreatePresentationUseCase(),
    provideFindPresentationsUseCase(),
    provideFindPresentationByIDUseCase(),
    provideUpdatePresentationUseCase(),
    provideDeletePresentationUseCase(),
  ];
}
