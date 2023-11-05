interface Device {
  turnOn(): void;
  turnOff(): void;
  isEnabled(): boolean;
  getStatus(): string;
  setAdjustment(value: number): void;
  getAdjustment(): number;
}

export class LightDevice implements Device {
  private enabled: boolean;
  private brightness: number;

  constructor() {
    this.enabled = false;
    this.brightness = 100;
  }

  turnOn(): void {
    this.enabled = true;
  }

  turnOff(): void {
    this.enabled = false;
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  getStatus(): string {
    return `Light brightness: ${this.brightness}, is on: ${this.enabled}`;
  }

  setAdjustment(value: number): void {
    this.brightness = value;
  }

  getAdjustment(): number {
    return this.brightness;
  }
}

export class ThermostatDevice implements Device {
  private enabled: boolean;
  private temperature: number;

  constructor() {
    this.enabled = false;
    this.temperature = 24;
  }

  turnOn(): void {
    this.enabled = true;
  }

  turnOff(): void {
    this.enabled = false;
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  getStatus(): string {
    return `Temperature: ${this.temperature}°C, is on: ${this.enabled}`;
  }

  setAdjustment(value: number): void {
    this.temperature = value;
  }

  getAdjustment(): number {
    return this.temperature;
  }
}

export class DeviceRemote {
  private device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  togglePower(): void {
    if (this.device.isEnabled()) {
      this.device.turnOff();
    } else {
      this.device.turnOn();
    }
  };

  displayStatus(): void {
    console.log(this.device.getStatus());
  }

  adjustUp(): void {
    this.device.setAdjustment(this.device.getAdjustment() + 1);
  }

  adjustDown(): void {
    this.device.setAdjustment(this.device.getAdjustment() - 1);;
  }
}

const light = new LightDevice();
const remote = new DeviceRemote(light);
remote.togglePower();
remote.adjustUp();
remote.displayStatus();

const thermostat = new ThermostatDevice();
const remote2 = new DeviceRemote(thermostat);
remote2.togglePower();
remote2.adjustUp();
remote2.displayStatus();
remote2.adjustDown();
remote2.displayStatus();