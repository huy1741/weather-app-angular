import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { Coords } from './services/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  unitSystem: string;
  currentCity: string;
  currentCoords: Coords;
  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.unitSystem = this.appService.getUnitSystem();
    this.currentCity = this.appService.getCity();
    this.currentCoords = this.appService.getCoords();
  }

  changeUnit(unitSystem: string) {
    this.appService.updateUnitSystem(unitSystem);
  }

  changeCity(city: string){
    this.appService.updateCity(city);
  }

  changeCoords(coords: Coords){
    this.appService.updateCoords(coords);
  }
}
