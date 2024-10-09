import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { BehaviorSubject } from 'rxjs';

export class Layout {
  #component = new BehaviorSubject<ComponentPortal<unknown> | null>(null);
  component$ = this.#component.asObservable();

  constructor(component: ComponentType<unknown> | null) {
    if (component) this.setComponent(component);
  }

  setComponent<T>(component: ComponentType<T>) {
    this.#component.next(new ComponentPortal(component));
  }
}
