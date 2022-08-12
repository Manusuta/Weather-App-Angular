
import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
 title='WeatherApp';
 
 todayDate = new Date();

  
 

  //[x: string]: any;
 
  constructor(private weatherService: WeatherService){
   

  }
 
  cityName:string ='Delhi';
  weatherData?:WeatherData;
 
 
 
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
   // throw new Error('Method not implemented.');
  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName= '';


  }
  private getWeatherData(cityName:string){
   
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next:(response)=>{
        this.weatherData = response;
        console.log(response);
        

      }
    });
  }
}
