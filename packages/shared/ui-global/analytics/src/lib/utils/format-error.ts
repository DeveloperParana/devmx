export function formatErrorEventForAnalytics(event: ErrorEvent): string {
  const { message, filename, colno, lineno, error } = event;

  if (error instanceof Error) {
    return formatErrorForAnalytics(error);
  }

  const info = `${filename}:${lineno || '?'}:${colno || '?'}`;
  return `${stripErrorMessagePrefix(message)} \n ${info}`;
}

export function formatErrorForAnalytics(error: Error): string {
  let stack = '<no-stack>';

  if (error.stack) {
    stack = stripErrorMessagePrefix(error.stack)
      // strip the message from the stack trace, if present
      .replace(error.message + '\n', '')
      // strip leading spaces
      .replace(/^ +/gm, '')
      // strip all leading "at " for each frame
      .replace(/^at /gm, '')
      // replace long urls with just the last segment: `filename:line:column`
      .replace(/(?: \(|@)http.+\/([^/)]+)\)?(?:\n|$)/gm, '@$1\n')
      // replace "eval code" in Edge
      .replace(/ *\(eval code(:\d+:\d+)\)(?:\n|$)/gm, '@???$1\n');
  }

  return `${error.message}\n${stack}`;
}

function stripErrorMessagePrefix(input: string): string {
  return input.replace(/^(Uncaught )?Error: /, '');
}
