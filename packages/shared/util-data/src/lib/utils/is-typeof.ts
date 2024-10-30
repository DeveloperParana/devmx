function isTypeof(value: unknown, type: 'string'): value is string;
function isTypeof(value: unknown, type: 'number'): value is number;
function isTypeof(value: unknown, type: 'boolean'): value is boolean;
function isTypeof(value: unknown, type: 'object'): value is object;
function isTypeof(
  value: unknown,
  type: 'string' | 'number' | 'boolean' | 'object'
) {
  return value && typeof value === type;
}

export { isTypeof };
