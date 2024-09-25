export interface ESLintRC {
  root: boolean;
  ignorePatterns: string[];
  plugins: string[];
  overrides: Override[];
}

export interface Override {
  files: string[];
  rules: Rules;
  extends?: string[];
  env?: Env;
}

export interface Env {
  jest: boolean;
}

export interface Rules {
  '@nx/enforce-module-boundaries'?: [string, NxEnforceModuleBoundaryClass];
}

export interface NxEnforceModuleBoundaryClass {
  enforceBuildableLibDependency: boolean;
  allow: any[];
  depConstraints: DepConstraint[];
}

export interface DepConstraint {
  sourceTag: string;
  onlyDependOnLibsWithTags: string[];
}
