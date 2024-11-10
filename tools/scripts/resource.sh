#!/bin/bash

# Verifica se o caminho do diretório foi passado como parâmetro
if [ -z "$1" ]; then
  echo "Por favor, forneça o caminho escopo."
  exit 1
fi

# Verifica se o diretório existe
if [ -d "packages/$1/resource" ]; then
  echo "O escopo fornecido já é um diretório."
  exit 1
fi


pnpm exec nx generate @nx/nest:library --name="$1-resource" --directory="packages/$1/resource" --linter=eslint --importPath="@devmx/$1-resource" --strict=true --tags=type:resource --testEnvironment=node --unitTestRunner=jest $2
