import { Component, OnInit } from '@angular/core';
import { Weather } from '../../weather';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weatherlogs',
  templateUrl: './weatherlogs.component.html',
  styleUrls: ['./weatherlogs.component.css']
})
export class WeatherlogsComponent implements OnInit {

  
  weather:Weather | undefined;
  constructor(private weatherService:WeatherService){}

  ngOnInit(){
  
  }

  getData(value:any){
   var city=value
   this.weatherService.getWeather(city).subscribe(r=>{
        this.weather=r;
        console.log(this.weather)
   })
  }

}
