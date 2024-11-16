export const percent = (loaded: number, total: number) => {
  return Math.round((loaded / total) * 100);
};
