import { CarouselElementDirective } from './carousel-element.directive';
import { style, animate, AnimationBuilder } from '@angular/animations';
import { CarouselItemDirective } from './carousel-item.directive';
import { TransitionDuration, TransitionTiming } from './types';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { NgStyle, NgTemplateOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Subscription, take, timer } from 'rxjs';
import {
  input,
  inject,
  Component,
  viewChild,
  ElementRef,
  viewChildren,
  HostListener,
  AfterViewInit,
  contentChildren,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
    selector: 'devmx-carousel',
    exportAs: 'devmxCarousel',
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CarouselElementDirective,
        CarouselItemDirective,
        NgTemplateOutlet,
        MatButtonModule,
        IconComponent,
        NgStyle,
    ]
})
export class CarouselComponent implements AfterViewInit {
  #builder = inject(AnimationBuilder);

  /**
   * Projections
   */
  items = contentChildren(CarouselItemDirective);

  elements = viewChildren<CarouselElementDirective, ElementRef<HTMLElement>>(
    CarouselElementDirective,
    { read: ElementRef }
  );

  carouselRef = viewChild<ElementRef<HTMLUListElement>>('carousel');

  /**
   * Inputs
   */

  duration = input<TransitionDuration>('250ms');

  timing = input<TransitionTiming>('ease-in-out');

  controls = input<boolean | ''>(true);

  auto = input<number>(0);

  /**
   * Locals
   */

  #width = 0;

  #currentSlide = 0;

  wrapperStyle: Partial<CSSStyleDeclaration> = {};

  #subscription?: Subscription;

  ngAfterViewInit() {
    const ref = this.carouselRef();

    if (!ref) return;

    const element = ref.nativeElement;

    const rect = element.getBoundingClientRect();

    console.log(rect);

    const { width } = rect;

    this.#width = width;

    if (this.auto() > 0) this.#startAuto();
  }

  next = () => {
    const nextSlide = this.#currentSlide + 1;

    this.#currentSlide = nextSlide % this.items().length;

    this.#execTransition();
  };

  prev = () => {
    const prevSlide = this.#currentSlide - 1 + this.items().length;

    this.#currentSlide = prevSlide % this.items().length;

    this.#execTransition();
  };

  #startAuto() {
    if (this.#subscription) {
      this.#subscription.unsubscribe();
    }
    const auto$ = timer(this.auto()).pipe(take(1));
    this.#subscription = auto$.subscribe(this.next);
  }

  @HostListener('window:resize')
  resizeCarousel() {
    const [first] = this.elements() ?? [];

    if (!first) return;

    const { width } = first.nativeElement.getBoundingClientRect();

    this.#width = width;
    this.wrapperStyle.width = `${this.#width}px`;

    this.#execTransition();
  }

  #execTransition() {
    const offset = this.#currentSlide * this.#width;
    const animation = this.#buildAnimation(offset);
    const carouselRef = this.carouselRef();

    if (!carouselRef) return;

    animation.create(carouselRef.nativeElement).play();

    if (this.auto() > 0) this.#startAuto();
  }

  #buildAnimation(offset: number) {
    const duration = this.duration();
    const timingFn = this.timing();

    const timing = `${duration} ${timingFn}`;
    const transform = `translateX(-${offset}px)`;

    return this.#builder.build([animate(timing, style({ transform }))]);
  }
}
