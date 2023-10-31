import { WeatherStation, WeatherDisplay } from "./ObserverKata";
describe('Observer pattern', () => {
  let station: WeatherStation;
  let display1: WeatherDisplay;
  let display2: WeatherDisplay;

  beforeEach(() => {
    station = new WeatherStation('Test Station 1');
    display1 = new WeatherDisplay('Test Display 1');
    display2 = new WeatherDisplay('Test Display 2');
  });

  test('Observer should receive notifications when weather updates in the subject', () => {
    const spyUpdateMethodOnDisplay1 = jest.spyOn(display1, 'update');
    const spyUpdateMethodOnDisplay2 = jest.spyOn(display2, 'update');

    station.addObserver(display1);
    station.addObserver(display2);

    const newWeather = {
      temperature: 21,
      humidity: '60%',
      windSpeed: '8 km/h'
    }

    station.setWeather(newWeather);
    expect(spyUpdateMethodOnDisplay1).toHaveBeenCalledWith(newWeather);
    expect(spyUpdateMethodOnDisplay2).toHaveBeenCalledWith(newWeather);
  });

  test('Observer should not longer receive updates after unsubscribe from notifier', () => {
    const spyUpdateMethodOnDisplay1 = jest.spyOn(display1, 'update');
    const spyUpdateMethodOnDisplay2 = jest.spyOn(display2, 'update');

    station.addObserver(display1);
    station.addObserver(display2);

    station.removeObserver(display2);

    const newWeather = {
      temperature: 21,
      humidity: '60%',
      windSpeed: '8 km/h'
    }

    station.setWeather(newWeather);

    expect(spyUpdateMethodOnDisplay1).toHaveBeenCalledWith(newWeather);
    expect(spyUpdateMethodOnDisplay2).not.toHaveBeenCalled();
  });
})