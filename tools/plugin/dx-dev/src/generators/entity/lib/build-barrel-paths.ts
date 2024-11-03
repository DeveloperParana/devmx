import { Barrel } from "../schema";

export function buildBarrelPaths(scope: string, fileName: string): Barrel[] {
  return [
    { path: `packages/${scope}/data-access/src/lib/resolvers/index.ts`, file: `./${fileName}-wrapped.ts` },
    { path: `packages/${scope}/data-access/src/lib/application/index.ts`, file: `./${fileName}.facade.ts` },
    { path: `packages/${scope}/data-access/src/lib/infrastructure/index.ts`, file: `./${fileName}.http.service.impl.ts` },
    { path: `packages/${scope}/data-source/src/lib/application/index.ts`, file: `./${fileName}s.facade.ts` },
    { path: `packages/${scope}/data-source/src/lib/dtos/index.ts`, file: `./${fileName}.ts` },
    { path: `packages/${scope}/data-source/src/lib/dtos/index.ts`, file: `./create-${fileName}.ts` },
    { path: `packages/${scope}/data-source/src/lib/dtos/index.ts`, file: `./update-${fileName}.ts` },
    { path: `packages/${scope}/data-source/src/lib/infrastructure/index.ts`, file: `./${fileName}s.mongo.service.impl.ts` },
    { path: `packages/${scope}/data-source/src/lib/schemas/index.ts`, file: `./${fileName}.ts` },
    { path: `packages/${scope}/domain/src/client/services/index.ts`, file: `./${fileName}.ts` },
    { path: `packages/${scope}/domain/src/client/use-cases/index.ts`, file: `./create-${fileName}.ts` },
    { path: `packages/${scope}/domain/src/client/use-cases/index.ts`, file: `./delete-${fileName}.ts` },
    { path: `packages/${scope}/domain/src/client/use-cases/index.ts`, file: `./find-${fileName}-by-id.ts` },
    { path: `packages/${scope}/domain/src/client/use-cases/index.ts`, file: `./find-${fileName}s.ts` },
    { path: `packages/${scope}/domain/src/client/use-cases/index.ts`, file: `./update-${fileName}.ts` },
    { path: `packages/${scope}/domain/src/lib/dtos/index.ts`, file: `./create-${fileName}.ts` },
    { path: `packages/${scope}/domain/src/lib/dtos/index.ts`, file: `./update-${fileName}.ts` },
    { path: `packages/${scope}/domain/src/server/services/index.ts`, file: `./${fileName}s.ts` },
    { path: `packages/${scope}/domain/src/server/use-cases/index.ts`, file: `./create-${fileName}.ts` },
    { path: `packages/${scope}/domain/src/server/use-cases/index.ts`, file: `./delete-${fileName}.ts` },
    { path: `packages/${scope}/domain/src/server/use-cases/index.ts`, file: `./find-${fileName}-by-id.ts` },
    { path: `packages/${scope}/domain/src/server/use-cases/index.ts`, file: `./find-${fileName}s.ts` },
    { path: `packages/${scope}/domain/src/server/use-cases/index.ts`, file: `./update-${fileName}.ts` },
    { path: `packages/shared/api-interfaces/src/lib/dtos/index.ts`, file: `./editable-${fileName}.ts` },
    { path: `packages/shared/api-interfaces/src/lib/entities/index.ts`, file: `./${fileName}.ts` },
  ]
}
