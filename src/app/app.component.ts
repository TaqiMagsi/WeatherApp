import { Component } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { Weather } from './modules/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherApp';
  
 
}
