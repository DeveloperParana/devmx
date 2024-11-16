export function create<
  K extends keyof HTMLElementTagNameMap,
  A extends HTMLElementTagNameMap[K]
>(name: K, attrs: Partial<A> = {}, ...children: (string | Node)[]) {
  const el = document.createElement(name);

  el.append(...children);

  return Object.assign(el, attrs);
}
