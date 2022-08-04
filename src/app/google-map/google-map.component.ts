import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {
  constructor() {}

  toggleNettuno: boolean = true;
  toggleAnzio: boolean = false;
  // markers: any[] = [];
  // image =
  //   'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  // zoom = 14;
  // center!: google.maps.LatLngLiteral;
  // options: google.maps.MapOptions = {
  //   mapTypeId: 'roadmap',
  //   maxZoom: 25,
  //   minZoom: 10,
  // };

  ngOnInit(): void {
    // navigator.geolocation.getCurrentPosition((position) => {
    //   this.center = {
    //     lat: 41.458473062329546,
    //     lng: 12.656941,
    //   };
    // });
    // this.addMarker(41.45767859679663, 12.656939863928537, 'Coaster Nettuno');
    // this.addMarker(41.44552873781675, 12.62983396316154, 'Coaster Anzio');
  }
  // addMarker(lat: number, lng: number, title: string) {
  //   this.markers.push({
  //     position: {
  //       lat: lat,
  //       lng: lng,
  //     },
  //     title: title,
  //     options: { animation: google.maps.Animation.DROP },
  //     InfoWindow: {},
  //   });
  // }
  switchNettuno() {
    this.toggleNettuno = true;
    this.toggleAnzio = false;
  }
  switchAnzio() {
    this.toggleNettuno = false;
    this.toggleAnzio = true;
  }
}
