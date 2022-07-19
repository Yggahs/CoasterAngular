import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ElementRef,
} from '@angular/core';

import Map from 'ol/Map';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import XyzSource from 'ol/source/XYZ';
import TileLayer from 'ol/layer/Tile';
import { Icon, Style } from 'ol/style';
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-map',
  template: ``,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit {
  @Input()
  map!: Map;
  vectorSource!: VectorSource;
  vectorLayer!: VectorLayer<any>;
  xyzSource!: XyzSource;
  tileLayer!: TileLayer<any>;
  view!: View;
  marker!: Feature;
  marker2!: Feature;

  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 36],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: '/assets/icons8-location-40.png',
      }),
    });

    const iconStyle2 = new Style({
      image: new Icon({
        anchor: [0.5, 36],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: '/assets/icons8-location-40-blue.png',
      }),
    });

    // Feature and vector
    this.marker = new Feature({
      geometry: new Point(fromLonLat([12.656944173001229, 41.45767489956531])),
      name: 'Coaster Nettuno',
    });

    this.marker.setStyle(iconStyle);
    this.marker2 = new Feature({
      geometry: new Point(fromLonLat([12.629966404426181, 41.445772795509285])),
      name: 'Coaster Anzio',
    });
    this.marker2.setStyle(iconStyle2);
    this.vectorSource = new VectorSource({
      features: [this.marker, this.marker2],
    });

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource,
    });

    // XYZ
    this.xyzSource = new XyzSource({
      url: 'http://tile.osm.org/{z}/{x}/{y}.png',
    });

    this.tileLayer = new TileLayer({
      source: this.xyzSource,
    });

    // View and map
    this.view = new View({
      center: fromLonLat([12.656944173001229, 41.45767489956531]),
      zoom: 14,
    });

    this.map = new Map({
      target: 'map',
      layers: [this.tileLayer, this.vectorLayer],
      view: this.view,
    });
    this.map.setTarget(this.elementRef.nativeElement);
  }
}
