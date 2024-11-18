#!/bin/bash

# Verifica se o caminho do diretório foi passado como parâmetro
if [ -z "$1" ]; then
  echo "Por favor, forneça o caminho escopo."
  exit 1
fi

# Verifica se o diretório existe
if [ -d "packages/$1/feature-page" ]; then
  echo "O escopo fornecido já é um diretório."
  exit 1
fi

pnpm exec nx generate @nx/angular:library --directory="packages/$1/feature-page" --lazy=true --name="$1-feature-page" --parent=apps/devmx/src/app/app.routes.ts --routing=true --changeDetection=OnPush --importPath="@devmx/$1-feature-page" --linter=eslint --prefix=devmx --strict=true --style=scss --tags=type:feature --unitTestRunner=jest --flat $2
