export interface UseCasesGeneratorSchema {
  name: string;
  scope: string;
}

export interface NormalizedUseCasesGeneratorSchema
  extends EntityGeneratorSchema {
  constantName: string;
  propertyName: string;
  className: string;
  fileName: string;
  namePlural: string;
  classNamePlural: string;
  fileNamePlural: string;
  propertyNamePlural: string;
  constantNamePlural: string;
}
