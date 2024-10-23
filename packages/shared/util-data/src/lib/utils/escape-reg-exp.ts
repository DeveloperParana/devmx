const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reHasRegExpChar = RegExp(reRegExpChar.source);

export function escapeRegExp(str: RegExp | string | number) {
  str = str.toString();
  return str && reHasRegExpChar.test(str)
    ? str.replace(reRegExpChar, '\\$&')
    : str;
}
