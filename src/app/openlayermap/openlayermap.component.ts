import {
  Component,
  OnInit,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { fromLonLat } from 'ol/proj';

import Feature from 'ol/Feature';
import Map from 'ol/Map';
import Overlay from 'ol/Overlay';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import { Icon, Style } from 'ol/style';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import OSM from 'ol/source/OSM';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-openlayermap',
  templateUrl: './openlayermap.component.html',
  styles: [':host { width: 100%; height: 100%; display: block; }'],
})
export class OpenlayermapComponent implements OnInit, AfterViewInit {
  @Input() map!: Map;
  @ViewChild('popup') public popup: ElementRef = {} as ElementRef;
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    /*Marker Rosso Nettuno*/
    const iconFeature = new Feature({
      geometry: new Point(fromLonLat([12.656944173001229, 41.45767489956531])),
      name: 'Coaster Nettuno',
      //apertura: '18:00 - 19:00',
    });
    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 36],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: '/assets/icons8-location-40.png',
      }),
    });
    iconFeature.setStyle(iconStyle);
    /*Marker Blu Anzio*/
    const iconFeature2 = new Feature({
      geometry: new Point(fromLonLat([12.629966404426181, 41.445772795509285])),
      name: 'Coaster Anzio',
      //apertura: '18:00 - 19:00',
    });
    const iconStyle2 = new Style({
      image: new Icon({
        anchor: [0.5, 36],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: '/assets/icons8-location-40-blue.png',
      }),
    });
    iconFeature2.setStyle(iconStyle2);
    const vectorSource = new VectorSource({
      features: [iconFeature, iconFeature2],
    });
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    const rasterLayer = new TileLayer({
      source: new OSM(),
    });
    // View and map
    const view = new View({
      center: fromLonLat([12.656944173001229, 41.45767489956531]),
      zoom: 14,
    });

    this.map.setView(view);
    this.map.setLayers([rasterLayer, vectorLayer]);

    // const popupOverlay = new Overlay({
    //   element: this.popup.nativeElement,
    //   positioning: 'bottom-center',
    //   stopEvent: false,
    // });
    // this.map.addOverlay(popupOverlay);
    // this.map.on('click', (evt) => {
    //   console.log(evt);
    //   const feature = this.map.forEachFeatureAtPixel(
    //     evt.pixel,
    //     function (feature) {
    //       return feature;
    //     }
    //   );
    //   if (feature) {
    //     popupOverlay.setPosition(evt.coordinate);
    //     // this.popup.nativeElement.popover({
    //     //   placement: 'top',
    //     //   html: true,
    //     //   content: feature.get('name'),
    //     // });

    //     this.popup.nativeElement.click();
    //   } else {
    //     this.popup.nativeElement.click();
    //   }
    // });
    // map.on('pointermove', function (e) {
    //   const pixel = map.getEventPixel(e.originalEvent);
    //   const hit = map.hasFeatureAtPixel(pixel);
    //   map.getTarget().style.cursor = hit ? 'pointer' : '';
    // });
    // map.on('movestart', function () {
    //   element.popover('dispose');
    // });
  }
  ngOnInit(): void {
    this.map.setTarget(this.elementRef.nativeElement);
  }
  // togglePopover(
  //   popover: any,
  //   coasterTitle: string,
  //   viaCoaster: string,
  //   orariCoaster: string
  // ) {
  //   console.log(this.elementRef.nativeElement);
  //   console.log(popover);
  //   if (popover.isOpen()) {
  //     popover.close();
  //   } else {
  //     popover.open({ coasterTitle, viaCoaster, orariCoaster });
  //   }
  // }
}
