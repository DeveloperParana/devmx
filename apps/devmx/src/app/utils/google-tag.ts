export class GoogleTagElement extends HTMLScriptElement {
  connectedCallback() {
    this.setAttribute('async', '');
    this.setAttribute(
      'src',
      'https://www.googletagmanager.com/gtag/js?id=G-3562LSS0KB'
    );

    const script = document.createElement('script');
    script.innerHTML = `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-3562LSS0KB');`;

    document.body.appendChild(script);
  }
}
customElements.define('google-tag', GoogleTagElement, { extends: 'script' });
