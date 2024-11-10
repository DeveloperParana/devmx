#!/bin/bash

# Verifica se o caminho do diretório foi passado como parâmetro
if [ -z "$1" ]; then
  echo "Por favor, forneça o caminho escopo."
  exit 1
fi

# Verifica se o diretório existe
if [ -d "packages/$1/ui-shared" ]; then
  echo "O escopo fornecido já é um diretório."
  exit 1
fi

pnpm exec nx generate @nx/angular:library --directory="packages/$1/ui-shared" --name="$1-ui-shared" --changeDetection=OnPush --importPath="@devmx/$1-ui-shared" --linter=eslint --prefix=devmx --strict=true --style=scss --tags=type:ui --unitTestRunner=jest --buildable --flat $2
