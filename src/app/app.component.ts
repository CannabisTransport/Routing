import { Component } from '@angular/core';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [MapComponent],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
