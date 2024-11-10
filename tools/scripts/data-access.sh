#!/bin/bash

# Verifica se o caminho do diretório foi passado como parâmetro
if [ -z "$1" ]; then
  echo "Por favor, forneça o caminho escopo."
  exit 1
fi

# Verifica se o diretório existe
if [ -d "packages/$1/data-access" ]; then
  echo "O escopo fornecido já é um diretório."
  exit 1
fi

pnpm exec nx generate @nx/js:library --name="$1-data-access" --directory="packages/$1/data-access" --importPath="@devmx/$1-data-access" --linter=eslint --minimal=true --strict=true --testEnvironment=jsdom --tags=type:data --projectNameAndRootFormat=as-provided --bundler=tsc --unitTestRunner=jest $2
