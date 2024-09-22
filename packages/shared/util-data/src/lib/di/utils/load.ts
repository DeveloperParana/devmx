export const load = async <T>(generator: AsyncGenerator<T>) => {
  const providers = [];
  for await (const provider of generator) {
    providers.push(provider);
  }
  return providers;
};
