import { Component, OnInit } from '@angular/core';
import { Weather } from '../../weather';
import { WeatherService } from 'src/app/service/weather.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker'
import { filter, switchMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-weatherlogs',
  templateUrl: './weatherlogs.component.html',
  styleUrls: ['./weatherlogs.component.css']
})
export class WeatherlogsComponent implements OnInit {

  
  weather:Weather | undefined;
  constructor(private weatherService:WeatherService,private updates: SwUpdate, private snackbar: MatSnackBar){}

  ngOnInit(){
    this.updates.versionUpdates.pipe(
      filter((evt: any): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
      switchMap(() => 
        this.snackbar.open('A new version is available!', 'Update now').afterDismissed()
      ),
      filter((result: any) => result.dismissedByAction),
      switchMap(() => this.updates.activateUpdate()),
      tap(() => location.reload())
    ).subscribe();
    
  }

  getData(value:any){
   var city=value
   this.weatherService.getWeather(city).subscribe(r=>{
        this.weather=r;
        console.log(this.weather)
   })
  }

}
