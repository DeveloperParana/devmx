interface Options {
  stripListLeaders?: boolean;
  listUnicodeChar: string | boolean;
  gfm?: boolean;
  useImgAltText?: boolean;
  preserveLinks?: boolean;
}

export function markdownToText(
  markdown: string,
  options: Options = { listUnicodeChar: '' }
) {
  const {
    listUnicodeChar = false,
    stripListLeaders = true,
    useImgAltText = true,
    preserveLinks = false,
    gfm = true,
  } = options ?? {};

  let output = markdown ?? '';

  /**
   * Remove linhas horizontais (---)
   *
   * Como `stripListHeaders` entra em conflito com esta regra,
   * essa função precisou ser a primeira na ordem de execução
   */

  output = output.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm, '');

  try {
    if (stripListLeaders) {
      if (listUnicodeChar)
        output = output.replace(
          /^([\s\t]*)([\\*\-\\+]|\d+\.)\s+/gm,
          listUnicodeChar + ' $1'
        );
      else output = output.replace(/^([\s\t]*)([\\*\-\\+]|\d+\.)\s+/gm, '$1');
    }
    if (gfm) {
      output = output
        // Header
        .replace(/\n={2,}/g, '\n')
        // Fenced codeblocks
        .replace(/~{3}.*\n/g, '')
        // Strikethrough
        .replace(/~~/g, '')
        // Fenced codeblocks
        .replace(/`{3}.*\n/g, '');
    }
    if (preserveLinks) {
      /**
       * Remove links inline mantendo links
       */
      output = output.replace(/\[(.*?)\][\\[\\(](.*?)[\]\\)]/g, '$1 ($2)');
    }
    let previousOutput;
    do {
      previousOutput = output;

      // Remove tags HTML e decodifica entidades
      const parser = new DOMParser();
      const doc = parser.parseFromString(output, 'text/html');
      output = doc.body.textContent || '';

      output = output
        .replace(/^[=\\-]{2,}\s*$/g, '') // Remove cabeçalhos setext-style
        .replace(/\[\^.+?\](\\: .*?$)?/g, '') // Remove notas de rodapé
        .replace(/\s{0,2}\[.*?\]: .*?$/g, '')
        .replace(/\\!\[(.*?)\][\\[\\(].*?[\]\\)]/g, useImgAltText ? '$1' : '') // Remove imagens
        .replace(/\[(.*?)\][\\[\\(].*?[\]\\)]/g, '$1') // Remove links inline
        .replace(/^\s{0,3}>\s?/g, '') // Remove citações
        .replace(/(^|\n)\s{0,3}>\s?/g, '\n\n')
        .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, '') // Remove links de estilo de referência
        .replace(
          // Remove cabeçalhos atx-style
          /^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,
          '$1$2$3'
        )
        .replace(/([\\*_]{1,3})(\S.*?\S{0,1})\1/g, '$2') // Remove ênfases (linha duplicada para remover ênfase dupla)
        .replace(/([\\*_]{1,3})(\S.*?\S{0,1})\1/g, '$2')
        .replace(/(`{3,})(.*?)\1/gm, '$2') // Remove blocos de código
        .replace(/`(.+?)`/g, '$1') // Remove código inline
        .replace(/\n{1,}/g, ' '); // Substitui quebras de linha? Rever...
    } while (output !== previousOutput);
  } catch (e) {
    console.error(e);

    return markdown;
  }
  return output;
}
