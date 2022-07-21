import {
  Component,
  OnInit,
  ElementRef,
  AfterViewInit,
  OnDestroy,
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

@Component({
  selector: 'app-openlayermap',
  templateUrl: './openlayermap.component.html',
  styleUrls: ['./openlayermap.component.scss'],
})
export class OpenlayermapComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    /*Marker Rosso Nettuno*/
    const iconFeature = new Feature({
      geometry: new Point(fromLonLat([12.656944173001229, 41.45767489956531])),
      name: 'Coaster Nettuno',
      apertura: '18:00 - 19:00',
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
      apertura: '18:00 - 19:00',
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

    const map = new Map({
      target: document.getElementById('map')!,
      layers: [rasterLayer, vectorLayer],
      view: view,
    });
    map.setTarget(document.getElementById('map')!);

    const element: any = document.getElementById('popup');
    const popup = new Overlay({
      element: element,
      positioning: 'bottom-center',
      stopEvent: false,
    });
    map.addOverlay(popup);
    map.on('click', function (evt) {
      const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
        return feature;
      });
      if (feature) {
        popup.setPosition(evt.coordinate);
        element.popover({
          placement: 'top',
          html: true,
          content: feature.get('name'),
        });
        element.popover('show');
      } else {
        element.popover('dispose');
      }
    });

    // map.on('pointermove', function (e) {
    //   const pixel = map.getEventPixel(e.originalEvent);
    //   const hit = map.hasFeatureAtPixel(pixel);
    //   map.getTarget().style.cursor = hit ? 'pointer' : '';
    // });

    // map.on('movestart', function () {
    //   element.popover('dispose');
    // });
  }
}
