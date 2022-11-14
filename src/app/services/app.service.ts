import { Injectable } from '@angular/core';

import { LocalStorageService } from './localstorage.service';
import { appConfig } from '../config';
import { Coords } from './service';

@Injectable()
export class AppService {
  private unitSystem: string;
  private currentCity: string
  private currentCoords: Coords
  constructor(private localStorageService: LocalStorageService) {
    this.unitSystem = this.localStorageService.get('unit') || appConfig.defaultUnit;
    this.currentCity = this.localStorageService.get('city');
    this.currentCoords = {lat: this.localStorageService.get('lat'), long: this.localStorageService.get('long')};
  }

  getUnitSystem(): string {
    return this.unitSystem;
  }

  updateUnitSystem(unitSystem: string): void {
    this.localStorageService.set('unit', unitSystem);

    setTimeout(() => window.location.reload(), 300);
  }

  getCity(): string {
    return this.currentCity;
  }

  updateCity(city: string): void {
    this.localStorageService.set('city', city);
    setTimeout(() => window.location.reload(), 300);
  }

  getCoords(): Coords {
    const intialCoords: Coords = this.localStorageService.get('lat') != null || this.localStorageService.get('long') != null ? this.currentCoords : appConfig.defaultCoords
    return intialCoords;
  }

  updateCoords(coords: Coords): void {
    this.localStorageService.set('lat', coords.lat);
    this.localStorageService.set('long', coords.long);
    this.localStorageService.set('city', null);
    setTimeout(() => window.location.reload(), 300);
  }
  
}
