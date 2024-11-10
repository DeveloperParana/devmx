#!/bin/bash

# Verifica se o caminho do diretório foi passado como parâmetro
if [ -z "$1" ]; then
  echo "Por favor, forneça o caminho escopo."
  exit 1
fi

# Verifica se o diretório existe
if [ -d "packages/$1" ]; then
  echo "O escopo fornecido já é um diretório."
  exit 1
fi

pnpm exec nx generate @nx/js:library --directory="packages/$1/domain" --bundler=tsc --linter=eslint --name="$1-domain" --importPath="@devmx/$1-domain" --unitTestRunner=jest --minimal=true --strict=true --tags=type:domain --testEnvironment=jsdom $2
