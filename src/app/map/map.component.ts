import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  standalone: true
})
export class MapComponent implements OnInit {
  private map: any;
  private cities = L.layerGroup();

  ngOnInit(): void {
    this.initMap();
    this.loadCustomLayer();
  }

  private initMap(): void {
    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    const osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
    });

    this.map = L.map('map', {
      center: [39.73, -104.99],
      zoom: 10,
      layers: [osm, this.cities]
    });

    const baseLayers = {
      'OpenStreetMap': osm,
      'OpenStreetMap.HOT': osmHOT
    };

    const overlays = {
      'Cities': this.cities
    };

    const layerControl = L.control.layers(baseLayers, overlays).addTo(this.map);

    const openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    layerControl.addBaseLayer(openTopoMap, 'OpenTopoMap');

    // Adding cities layer markers
    L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(this.cities);
    L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(this.cities);
    L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(this.cities);
    L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(this.cities);

    // Adding parks layer
    const parks = L.layerGroup([
      L.marker([39.75, -105.09]).bindPopup('This is Crown Hill Park.'),
      L.marker([39.68, -105.00]).bindPopup('This is Ruby Hill Park.')
    ]);

    layerControl.addOverlay(parks, 'Parks');
  }

  loadCustomLayer() {
    const customLayer = L.geoJSON()
  }
}
