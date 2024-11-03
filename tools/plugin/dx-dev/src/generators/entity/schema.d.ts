export interface EntityGeneratorSchema {
  name: string;
  scope: string
}

export interface NormalizedEntityGeneratorSchema extends EntityGeneratorSchema {
  constantName: string
  propertyName: string
  className: string
  fileName: string
}

export interface Barrel {
  path: string
  file: string
}
