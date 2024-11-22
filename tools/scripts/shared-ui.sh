#!/bin/bash

# Verifica se o caminho do diretório foi passado como parâmetro
if [ -z "$1" ]; then
  echo "Por favor, forneça o caminho escopo."
  exit 1
fi

# Verifica se o diretório existe
if [ -d "packages/shared/ui-$1" ]; then
  echo "O escopo fornecido já é um diretório."
  exit 1
fi

pnpm exec nx generate @nx/angular:library --directory="packages/shared/ui-$1" --name="shared-ui-$1" --changeDetection=OnPush --importPath="@devmx/shared-ui-$1" --linter=eslint --prefix=devmx --strict=true --style=scss --tags=type:ui --unitTestRunner=jest --buildable --flat $2
