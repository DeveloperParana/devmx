export async function SHA256(buffer: ArrayBuffer) {
  return await crypto.subtle.digest('SHA-256', buffer);
}
