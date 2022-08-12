import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
 getWeatherData(cityName:string):Observable<WeatherData> {
    //Api call here
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
     // headers: new HttpHeaders()
     // .set(environment.XRapidAPIHostLabelHeaderName,environment.XRapidAPIHostLabelHeaderValue)
     //   .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('q', cityName)
        .set('appid','90a4a52ee95e598113a6e987918f1725')
       .set('units', 'metric')
        .set('mode', 'json')
      
    })
  }

}
