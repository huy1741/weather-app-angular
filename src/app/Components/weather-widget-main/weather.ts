export class Weather {
    constructor(
      public icon: string,
      public temp: number,
      public temp_min: number,
      public temp_max: number,
      public currentWeather: string,
      public temp_feels_like: number,
      public sign: string,
      public humidity: string,
      public name: string,
    ) {}
  }
  