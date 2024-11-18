import { Inject, Injectable } from '@angular/core';
import { keys } from '@devmx/shared-util-data';
import {
  DOCUMENT,
  ɵgetDOM as getDOM,
  ɵDomAdapter as DomAdapter,
} from '@angular/common';

interface ScriptDefinition {
  type: string;
  src?: string;
  async?: boolean;
  defer?: boolean;
  nomodule?: boolean;
  crossorigin?: string;
  referrerpolicy?: string;
  fetchpriority?: string;
}

@Injectable({ providedIn: 'root' })
export class Script {
  private _dom: DomAdapter;

  constructor(@Inject(DOCUMENT) private _doc: Document) {
    this._dom = getDOM();
  }

  addScript(tag: ScriptDefinition, content = ''): HTMLScriptElement | null {
    if (!tag) return null;
    const element = this.#getOrCreateElement(tag);
    element.append(content);
    return element;
  }

  removeScriptElement(script: HTMLScriptElement): void {
    if (script) {
      this._dom.remove(script);
    }
  }

  #getOrCreateElement(script: ScriptDefinition) {
    const element = this._dom.createElement('script') as HTMLScriptElement;
    this.#setScriptElementAttributes(script, element);
    const head = this._doc.getElementsByTagName('head')[0];
    head.appendChild(element);
    return element;
  }

  #setScriptElementAttributes(tag: ScriptDefinition, el: HTMLScriptElement) {
    keys(tag).forEach((prop) => {
      if (tag[prop]) {
        const isBoolean = typeof tag[prop] === 'boolean';
        const value = isBoolean ? '' : tag[prop] + '';
        el.setAttribute(prop, value);
      }
    });

    return el;
  }
}
