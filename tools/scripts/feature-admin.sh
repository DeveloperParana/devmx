#!/bin/bash

# Verifica se o caminho do diretório foi passado como parâmetro
if [ -z "$1" ]; then
  echo "Por favor, forneça o caminho escopo."
  exit 1
fi

# Verifica se o diretório existe
if [ -d "packages/$1/feature-admin" ]; then
  echo "O escopo fornecido já é um diretório."
  exit 1
fi

pnpm exec nx generate @nx/angular:library --directory="packages/$1/feature-admin" --lazy=true --name="$1-feature-admin" --parent="packages/$1/feature-shell/src/lib/$1-feature-shell.routes.ts" --routing=true --changeDetection=OnPush --importPath="@devmx/$1-feature-admin" --linter=eslint --prefix=devmx --strict=true --style=scss --tags=type:feature --unitTestRunner=jest --flat $2
