import { createUseCaseProvider } from '@devmx/shared-data-access';
import {
  CourseService,
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
  InstitutionService,
  SubjectService,
  UpdateCourseUseCase,
  UpdateInstitutionUseCase,
  UpdateSubjectUseCase,
} from '@devmx/academy-domain/client';

export function provideCreateInstitutionUseCase() {
  return createUseCaseProvider(CreateInstitutionUseCase, [InstitutionService]);
}

export function provideFindInstitutionsUseCase() {
  return createUseCaseProvider(FindInstitutionsUseCase, [InstitutionService]);
}

export function provideFindInstitutionByIDUseCase() {
  return createUseCaseProvider(FindInstitutionByIDUseCase, [
    InstitutionService,
  ]);
}

export function provideUpdateInstitutionUseCase() {
  return createUseCaseProvider(UpdateInstitutionUseCase, [InstitutionService]);
}

export function provideDeleteInstitutionUseCase() {
  return createUseCaseProvider(DeleteInstitutionUseCase, [InstitutionService]);
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
  return createUseCaseProvider(CreateSubjectUseCase, [SubjectService]);
}

export function provideFindSubjectsUseCase() {
  return createUseCaseProvider(FindSubjectsUseCase, [SubjectService]);
}

export function provideFindSubjectByIDUseCase() {
  return createUseCaseProvider(FindSubjectByIDUseCase, [SubjectService]);
}

export function provideUpdateSubjectUseCase() {
  return createUseCaseProvider(UpdateSubjectUseCase, [SubjectService]);
}

export function provideDeleteSubjectUseCase() {
  return createUseCaseProvider(DeleteSubjectUseCase, [SubjectService]);
}

/**
 *   ____
 *  / ___|___  _   _ _ __ ___  ___
 * | |   / _ \| | | | '__/ __|/ _ \
 * | |__| (_) | |_| | |  \__ \  __/
 *  \____\___/ \__,_|_|  |___/\___|
 */

export function provideCreateCourseUseCase() {
  return createUseCaseProvider(CreateCourseUseCase, [CourseService]);
}

export function provideFindCoursesUseCase() {
  return createUseCaseProvider(FindCoursesUseCase, [CourseService]);
}

export function provideFindCourseByIDUseCase() {
  return createUseCaseProvider(FindCourseByIDUseCase, [CourseService]);
}

export function provideUpdateCourseUseCase() {
  return createUseCaseProvider(UpdateCourseUseCase, [CourseService]);
}

export function provideDeleteCourseUseCase() {
  return createUseCaseProvider(DeleteCourseUseCase, [CourseService]);
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
