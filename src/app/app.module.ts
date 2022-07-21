import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { CarouselSectionComponent } from './carousel-section/carousel-section.component';
import { MinorCarouselOneComponent } from './minor-carousel-one/minor-carousel-one.component';
import { MinorCarouselTwoComponent } from './minor-carousel-two/minor-carousel-two.component';
import { TripleIconSectionComponent } from './triple-icon-section/triple-icon-section.component';
import { BrandsCarouselComponent } from './brands-carousel/brands-carousel.component';

import { FooterComponent } from './footer/footer.component';
import { OpenlayermapComponent } from './openlayermap/openlayermap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselSectionComponent,
    MinorCarouselOneComponent,
    MinorCarouselTwoComponent,
    TripleIconSectionComponent,
    BrandsCarouselComponent,
    FooterComponent,
    OpenlayermapComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, NgbCollapseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
