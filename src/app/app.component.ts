import { Component } from '@angular/core';

import { MapComponent } from './map/map.component';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [MapComponent, SliderComponent],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

}
