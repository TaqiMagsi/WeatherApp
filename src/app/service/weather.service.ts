import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../modules/weather';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 
  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = '609a13db7bb14c94ab169d8f17a96971';

  constructor(private http:HttpClient) { }

  getWeather(city:string):Observable<Weather> {
    const option = new HttpParams()
 .set('units', 'metric')
 .set('q', city)
 .set('appId', this.apiKey);
    return this.http.get<Weather>(this.apiUrl + 'weather', { params: 
      option });
  }
}
