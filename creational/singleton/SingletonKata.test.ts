import { Config, App } from './SingletonKata';


describe('Singleton Pattern', () => {
  it('should create only one instance of Singleton', () => {
    const instance1 = Config.getInstance();
    const instance2 = Config.getInstance();

    expect(instance1).toBe(instance2);
  });

  it('should change the config from the App', () => {
    const config = Config.getInstance();
    const app = new App(config);
    app.setConfig('lang', 'ES');
    expect(app.getConfig('lang')).toBe('ES');
    app.setConfig('backgroundColor', '#fafafa');
    expect(app.getConfig('backgroundColor')).toBe('#fafafa');
    app.setConfig('lang', 'EN');
    expect(app.getConfig('lang')).toBe('EN');
  })
});