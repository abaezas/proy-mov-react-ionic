
export interface WeatherRoot {
    weather: WeatherType[];
    main: Main;
    name: string;
  }
  
  export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  }
  
  export interface WeatherType {
    id: number;
    main: string;
    description: string;
    icon: string;
  }