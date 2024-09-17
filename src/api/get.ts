import { WeatherRoot } from "@/types/types";

export async function fetchWeather(lat:number, long:number): Promise<WeatherRoot> {
  
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${
        import.meta.env.VITE_OPEN_WEATHER_API_KEY
      }&lang=es`
    );
  
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
  
    return await res.json();
  }