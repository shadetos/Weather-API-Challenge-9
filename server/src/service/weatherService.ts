import fs from 'node:fs/promises';
import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lat: number;
  lon: number;
}
// TODO: Define a class for the Weather object
class Weather {
  private id: number;
  private main: string;
  private description: string;
  private icon: string;


  constructor(id: number, main: string, description: string, icon: string) {
    this.id = id;
    this.main = main;
    this.description = description;
    this.icon = icon;
  }
}

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  private baseURL?: string;
  private apiKey?: string;
  private cityName = '';

  constructor() { 
    this.baseURL = process.env.API_BASE_URL || '';
    this.apiKey = process.env.API_KEY || '';

  }

  // TODO: Create fetchLocationData method
  // private async fetchLocationData(query: string) {}
async fetchLocationData(query: string) {
  try {
    const response = await fetch(`${this.baseURL}/geo/1.0/direct?q=${query}&limit=1&appid=${this.apiKey}`);
    const locationData = await response.json();





    return locationData; //means that function will exit
  }catch (err) {
  console.log('Error:', err);
  return err;
}
};

  // TODO: Create destructureLocationData method
  // private destructureLocationData(locationData: Coordinates): Coordinates {}
destructureLocationData(locationData: any): Coordinates {
  console.log(locationData);
  const { lat, lon } = locationData[0];
  return { lat, lon };
}


  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
buildGeocodeQuery(): string {
  return `${this.cityName}`;
}
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  buildWeatherQuery(coordinates: Coordinates): string {
    return `lat=${coordinates.lat}&lon=${coordinates.lon}`;
  }

  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}
async fetchAndDestructureLocationData() {
  const query = this.buildGeocodeQuery();
  const locationData = await this.fetchLocationData(query);
  return this.destructureLocationData(locationData);
}

  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
async fetchWeatherData(coordinates: Coordinates) {
  const query = this.buildWeatherQuery(coordinates);
  const response = await fetch(`${this.baseURL}/data/2.5/forecast?${query}&limit=1&appid=${this.apiKey}`);
  return response.json();
  //const data = await response.json( city, date, icon, iconDescription, tempF, windSpeed, humidity );
  //return data; 
}

  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
parseCurrentWeather(response: any) {
  console.log(response);
  const { id, main, description, icon } = response.list[0];
  return new Weather(id, main, description, icon);
}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
buildForecastArray(currentWeather: Weather, weatherData: any) { 
  console.log(weatherData);
  const forecastArray = weatherData.list.map((data: any) => {
    console.log(data);
    const { dt, main:{temp, humidity}, wind:{speed} } = data;
    return {dt, tempF:temp, humidity, windSpeed:speed};
  });
  return [ currentWeather,...forecastArray ];
}

  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}

  async getWeatherForCity(city: string) {
    this.cityName = city;
    const coordinates = await this.fetchAndDestructureLocationData();
    const currentWeather = await this.fetchWeatherData(coordinates);
    //const parsedWeather = this.parseCurrentWeather(currentWeather);
    //console.log(parsedWeather);
    //console.log(currentWeather);
    return currentWeather;
  }
}

export default new WeatherService();
