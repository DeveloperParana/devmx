#!/bin/bash

# Verifica se o caminho do diretório foi passado como parâmetro
if [ -z "$1" ]; then
  echo "Por favor, forneça o caminho escopo."
  exit 1
fi

# Verifica se o diretório existe
if [ -d "packages/$1/data-source" ]; then
  echo "O escopo fornecido já é um diretório."
  exit 1
fi

pnpm exec nx generate @nx/js:library --name="$1-data-source" --directory="packages/$1/data-source" --importPath="@devmx/$1-data-source" --linter=eslint --minimal=true --strict=true --testEnvironment=node --tags=type:data --bundler=tsc --unitTestRunner=jest $2
