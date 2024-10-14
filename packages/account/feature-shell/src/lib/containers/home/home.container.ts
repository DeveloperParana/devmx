import { Component } from "@angular/core";
import { CarouselComponent, CarouselItemDirective } from "@devmx/shared-ui-global/carousel";

@Component({
  selector: 'devmx-home',
  templateUrl: './home.container.html',
  styleUrl: './home.container.scss',
  imports: [CarouselComponent, CarouselItemDirective],
  standalone: true
})
export class HomeContainer {}
