#!/bin/bash

if [ -e ".env" ]; then
  echo ".env já foi renomeado"
else
  echo "Renomeando .env"
  mv .env-example .env
fi

if command -v docker &>/dev/null; then
  echo "Docker detectado"

  if docker --version &>/dev/null; then
    echo "Docker em execução"
    docker compose up -d
  else
    echo "Inicializa seu docker"
  fi
else
  echo "Docker não está instalado"
fi

version_less_than() {
  [ "$(printf '%s\n' "$1" "$2" | sort -V | head -n1)" = "$1" ]
}

if command -v node &>/dev/null; then

  node_version=$(node --version 2>/dev/null)

  node_version=${node_version#v}

  echo "NodeJS instalado: $node_version"

  if version_less_than "$node_version" "22.5.1"; then
    echo "Versão não compatível 22.5.1"
    echo "Atualizando Node.js para a versão 22"
    if command -v nvm &>/dev/null; then
      echo "NVM detectado. Instalando Node.js versão 22.5"
      nvm install 22.5
      nvm use 22.5
      echo "Node.js atualizado para a versão 22.5"
    else
      echo "Você pode instalar diretamente o Node.js (22): https://nodejs.org/pt/download"
      echo "Ou instalar via NVM: https://github.com/nvm-sh/nvm"
    fi
  else
    if ! command -v pnpm &>/dev/null; then
      echo "pnpm não está instalado."
      npm install -g pnpm
    else
      echo "pnpm instalado: $(pnpm --version)"
      pnpm install
    fi
  fi
else
  echo "Node.js não está instalado."
  echo "https://nodejs.org/pt/download"
fi

cat assets/ascii/logo-devparana.txt
echo "
"
cat assets/ascii/comunidade-devparana.txt
