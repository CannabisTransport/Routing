import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
  standalone: true
})
export class MapComponent implements OnInit {
  private map: any;

  ngOnInit(): void {
    console.log('hi');
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    const marker = L.marker([50.446355, 30.467319])
      .addTo(this.map)
      .bindPopup('<b>Hello world!</b><br />I am a popup.')
      .openPopup();

    const circle = L.circle([51.508, -0.11], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500,
    })
      .addTo(this.map)
      .bindPopup('I am a circle.');

    const polygon = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047],
    ])
      .addTo(this.map)
      .bindPopup('I am a polygon.');

    const popup = L.popup()
      .setLatLng([51.513, -0.09])
      .setContent('I am a standalone popup.')
      .openOn(this.map);

    this.map.on('click', (e: any) => {
      popup
        .setLatLng(e.latlng)
        .setContent(`You clicked the map at ${e.latlng.toString()}`)
        .openOn(this.map);
    });
  }
}
