import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [MatSliderModule, MatInputModule,FormsModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  disabled = false;
  max = 5;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
}
