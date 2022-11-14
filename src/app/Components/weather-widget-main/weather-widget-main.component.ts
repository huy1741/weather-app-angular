import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coords } from 'src/app/services/service';
import { Weather } from './weather';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit {
  @Input() currentUnitSystem: string;
  @Input() currentCity: string;
  @Input() currentCoords: Coords;
  @Output() changeCoords: EventEmitter<Coords> = new EventEmitter();
  WeatherData: Weather;
  errorMessage: boolean;
  arrayOfCities: [];
  api: string;
  constructor() { }

  ngOnInit() {
    this.WeatherData = {
      icon: '',
      temp: '',
      temp_min: '',
      temp_max: '',
      currentWeather: '',
      temp_feels_like: '',
      sign: '',
      humidity: '',
      name: '',
    };
    this.api = this.currentCity != null ? 
    `https://api.openweathermap.org/data/2.5/find?q=${this.currentCity}&units=${this.currentUnitSystem}&appid=1cb6ace31e50401f28b864f0b23fdc68` :
    `https://api.openweathermap.org/data/2.5/weather?lat=${this.currentCoords.lat}&lon=${this.currentCoords.long}&units=${this.currentUnitSystem}&appid=1cb6ace31e50401f28b864f0b23fdc68`;
    this.getWeatherData();
    this.errorMessage = false;
  }
//https://api.openweathermap.org/data/2.5/weather?q=${this.currentCity}&units=${this.currentUnitSystem}&appid=1cb6ace31e50401f28b864f0b23fdc68
//data=>{this.setWeatherData(data);}
//https://api.openweathermap.org/data/2.5/find?q=London&appid=1cb6ace31e50401f28b864f0b23fdc68
//data.list && data.list.length > 1 ? this.handleMultipleCities(data) : this.setWeatherData(data)
  getWeatherData(){
    fetch(this.api)
    .then(response => response.json())
    .then(data => {if (data.list && data.list.length > 0) {
      data.list.length > 1 ? this.handleMultipleCities(data) : this.setWeatherData(data.list[0])
    } else {
      this.setWeatherData(data)
    }})
    .catch((error) => {
      console.error('Error:', error);
      this.errorMessage = true
    });
  }
  
  handleMultipleCities(data){
    this.arrayOfCities = data.list
  }

  resetArray(){
    this.arrayOfCities = []
  }

  setWeatherData(data: any){
    this.WeatherData.currentWeather = data.weather ? data.weather[0].description : null;
    this.WeatherData.icon = data.weather ? `../../../assets/img/${data.weather[0].icon.slice(0, -1)}.svg` : null;
    this.WeatherData.temp = data.main.temp;
    this.WeatherData.temp_min = data.main.temp_min;
    this.WeatherData.temp_max = data.main.temp_max;
    this.WeatherData.temp_feels_like = data.main.feels_like;
    this.WeatherData.sign = this.currentUnitSystem == 'metric' ? 'C' : 'F';
    this.WeatherData.humidity = data.main.humidity;
    this.WeatherData.name = data.name
  }

  handleChangeCoords(coords: Coords): void{
    this.changeCoords.emit(coords)
  }
}