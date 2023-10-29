interface Configuration {
  set(key: string, value: string): void;
  get(key: string): string;
}


export class Config implements Configuration {
  private static instance: Config | null = null;
  private config: Record<string, string> = {};

  private constructor () {}

  public static getInstance() {
    if (!Config.instance) {
      Config.instance = new Config()
    }
    return Config.instance;
  }

  public set(key: string, value: string): void {
    this.config[key] = value;
  }

  public get(key: string): string {
    return this.config[key];
  }
}

export class App {
  private config: Configuration;

  constructor (config: Configuration) {
    this.config = config;
  }

  setConfig(key: string, value: string): void {
    this.config.set(key, value);
  }

  getConfig(key: string): string {
    return this.config.get(key);
  }
}

const appConfig = Config.getInstance();
const app = new App(appConfig);
app.setConfig('language', 'ES');
app.getConfig('language'); // 'ES'
app.setConfig('language', 'EN');
app.getConfig('language'); // 'EN'
