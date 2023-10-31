interface Observer {
  update(weather: Weather): void;
}

interface Weather {
  temperature: number;
  humidity: string;
  windSpeed: string;
}

interface Notifier {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

export class WeatherStation implements Notifier {
  private observers: Observer[] = [];
  private weather: Weather = {
    temperature: 0,
    humidity: '',
    windSpeed: ''
  };

  constructor(private name: string) {}

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => {
      observer.update(this.weather);
    })
  }

  setWeather(weather: Weather): void {
    this.weather = weather;
    this.notifyObservers();
  }
}

export class WeatherDisplay implements Observer {
  constructor(private name: string) {}

  update(weather: Weather): void {
    console.log(`
      Temperature: ${weather.temperature} C
      Humidity: ${weather.humidity}
      Wind Speed: ${weather.windSpeed}
    `);
  }
}

const weatherStation1 = new WeatherStation('Station 1');
const weatherStation2 = new WeatherStation('Station 2');

const weatherDisplay1 = new WeatherDisplay('Display 1');
const weatherDisplay2 = new WeatherDisplay('Display 2');
const weatherDisplay3 = new WeatherDisplay('Display 3');

weatherStation1.addObserver(weatherDisplay1);
weatherStation1.addObserver(weatherDisplay2);
weatherStation2.addObserver(weatherDisplay3);

weatherStation1.setWeather({
  temperature: 18,
  humidity: '70%',
  windSpeed: '13 km/h'
}) /* 
  Output: 
      Temperature: 18 C
      Humidity: 70%
      Wind Speed: 13 km/h
*/

weatherStation2.setWeather({
  temperature: 20,
  humidity: '15%',
  windSpeed: '5 km/h'
}) /* 
  Output: 
      Temperature: 20 C
      Humidity: 15%
      Wind Speed: 5 km/h
*/
