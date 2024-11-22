#!/bin/bash

# Diretório com os arquivos Markdown (padrão: diretório atual)
DIR=${1:-.}

# Arquivo de saída do TOC
OUTPUT="docs/readme.md"

# Inicia o TOC
echo "# Documentação" >"$OUTPUT"

# Loop pelos arquivos Markdown
for file in "$DIR"/*.md; do
  [ -e "$file" ] || continue # Ignora se não houver arquivos .md

  # Ignora o arquivo readme.md (case insensitive)
  if [[ "$(basename "$file")" =~ ^readme\.md$ ]]; then
    continue
  fi

  # Remove barras duplicadas no caminho do arquivo
  normalized_file=$(echo "$file" | sed 's|//|/|g')

  # Extrai os cabeçalhos (linhas que começam com #)
  while IFS= read -r line; do
    if [[ $line =~ ^(#+)\ (.*) ]]; then
      # Determina o nível do cabeçalho pelo número de #
      level=${#BASH_REMATCH[1]}
      header=${BASH_REMATCH[2]}

      # Cria um link baseado no texto do cabeçalho
      anchor=$(echo "$header" | tr '[:upper:]' '[:lower:]' | tr -cd '[:alnum:]-' | sed 's/ /-/g')

      # Ajusta indentação com dois espaços por nível
      indent=$((level - 1))
      printf "%*s- [%s](%s#%s)\n" $((indent * 2)) "" "$header" "$normalized_file" "$anchor" >>"$OUTPUT"
    fi
  done <"$file"
done
