export class Weather {
    constructor(
      public icon: string,
      public temp: string,
      public temp_min: string,
      public temp_max: string,
      public currentWeather: string,
      public temp_feels_like: string,
      public sign: string,
      public humidity: string,
      public name: string,
    ) {}
  }
  