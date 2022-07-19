import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-brands-carousel',
  templateUrl: './brands-carousel.component.html',
  styleUrls: ['./brands-carousel.component.scss'],
  providers: [NgbCarouselConfig],
})
export class BrandsCarouselComponent implements OnInit {
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.pauseOnHover = true;
    config.pauseOnFocus = true;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }
  ngOnInit(): void {}
}
