import { createUseCaseProvider } from '@devmx/shared-data-source';
import {
  CoursesService,
  CreateCourseUseCase,
  CreateInstitutionUseCase,
  CreateSubjectUseCase,
  DeleteCourseUseCase,
  DeleteInstitutionUseCase,
  DeleteSubjectUseCase,
  FindCourseByIDUseCase,
  FindCoursesUseCase,
  FindInstitutionByIDUseCase,
  FindInstitutionsUseCase,
  FindSubjectByIDUseCase,
  FindSubjectsUseCase,
  InstitutionsService,
  SubjectsService,
  UpdateCourseUseCase,
  UpdateInstitutionUseCase,
  UpdateSubjectUseCase,
} from '@devmx/academy-domain/server';

export function provideCreateInstitutionUseCase() {
  return createUseCaseProvider(CreateInstitutionUseCase, [InstitutionsService]);
}

export function provideFindInstitutionsUseCase() {
  return createUseCaseProvider(FindInstitutionsUseCase, [InstitutionsService]);
}

export function provideFindInstitutionByIDUseCase() {
  return createUseCaseProvider(FindInstitutionByIDUseCase, [
    InstitutionsService,
  ]);
}

export function provideUpdateInstitutionUseCase() {
  return createUseCaseProvider(UpdateInstitutionUseCase, [InstitutionsService]);
}

export function provideDeleteInstitutionUseCase() {
  return createUseCaseProvider(DeleteInstitutionUseCase, [InstitutionsService]);
}

/**
 *  ____        _     _           _
 * / ___| _   _| |__ (_) ___  ___| |_
 * \___ \| | | | '_ \| |/ _ \/ __| __|
 *  ___) | |_| | |_) | |  __/ (__| |_
 * |____/ \__,_|_.__// |\___|\___|\__|
 *                 |__/
 */
export function provideCreateSubjectUseCase() {
  return createUseCaseProvider(CreateSubjectUseCase, [SubjectsService]);
}

export function provideFindSubjectsUseCase() {
  return createUseCaseProvider(FindSubjectsUseCase, [SubjectsService]);
}

export function provideFindSubjectByIDUseCase() {
  return createUseCaseProvider(FindSubjectByIDUseCase, [SubjectsService]);
}

export function provideUpdateSubjectUseCase() {
  return createUseCaseProvider(UpdateSubjectUseCase, [SubjectsService]);
}

export function provideDeleteSubjectUseCase() {
  return createUseCaseProvider(DeleteSubjectUseCase, [SubjectsService]);
}

/**
 *   ____
 *  / ___|___  _   _ _ __ ___  ___
 * | |   / _ \| | | | '__/ __|/ _ \
 * | |__| (_) | |_| | |  \__ \  __/
 *  \____\___/ \__,_|_|  |___/\___|
 */
export function provideCreateCourseUseCase() {
  return createUseCaseProvider(CreateCourseUseCase, [CoursesService]);
}

export function provideFindCoursesUseCase() {
  return createUseCaseProvider(FindCoursesUseCase, [CoursesService]);
}

export function provideFindCourseByIDUseCase() {
  return createUseCaseProvider(FindCourseByIDUseCase, [CoursesService]);
}

export function provideUpdateCourseUseCase() {
  return createUseCaseProvider(UpdateCourseUseCase, [CoursesService]);
}

export function provideDeleteCourseUseCase() {
  return createUseCaseProvider(DeleteCourseUseCase, [CoursesService]);
}

export function provideUseCases() {
  return [
    provideCreateInstitutionUseCase(),
    provideFindInstitutionsUseCase(),
    provideFindInstitutionByIDUseCase(),
    provideUpdateInstitutionUseCase(),
    provideDeleteInstitutionUseCase(),

    provideCreateSubjectUseCase(),
    provideFindSubjectsUseCase(),
    provideFindSubjectByIDUseCase(),
    provideUpdateSubjectUseCase(),
    provideDeleteSubjectUseCase(),

    provideCreateCourseUseCase(),
    provideFindCoursesUseCase(),
    provideFindCourseByIDUseCase(),
    provideUpdateCourseUseCase(),
    provideDeleteCourseUseCase(),
  ];
}
