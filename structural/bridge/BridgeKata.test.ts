import { DeviceRemote, LightDevice, ThermostatDevice } from './BridgeKata';

describe("LightDevice", () => {
  let light: LightDevice;

  beforeEach(() => {
    light = new LightDevice();
  });

  it("should turn on and off", () => {
    light.turnOn();
    expect(light.isEnabled()).toBeTruthy();

    light.turnOff();
    expect(light.isEnabled()).toBeFalsy();
  });

  it("should set and get brightness", () => {
    light.setAdjustment(75);
    expect(light.getAdjustment()).toBe(75);
  });

  it("should display correct status", () => {
    light.turnOn();
    light.setAdjustment(50);
    expect(light.getStatus()).toBe("Light brightness: 50, is on: true");
  });
});

describe("ThermostatDevice", () => {
  let thermostat: ThermostatDevice;

  beforeEach(() => {
    thermostat = new ThermostatDevice();
  });

  it("should turn on and off", () => {
    thermostat.turnOn();
    expect(thermostat.isEnabled()).toBeTruthy();

    thermostat.turnOff();
    expect(thermostat.isEnabled()).toBeFalsy();
  });

  it("should set and get temperature", () => {
    thermostat.setAdjustment(22);
    expect(thermostat.getAdjustment()).toBe(22);
  });

  it("should display correct status", () => {
    thermostat.turnOn();
    thermostat.setAdjustment(25);
    expect(thermostat.getStatus()).toBe("Temperature: 25°C, is on: true");
  });
});

describe("DeviceRemote", () => {
  it("should toggle power", () => {
    const light = new LightDevice();
    const remote = new DeviceRemote(light);

    remote.togglePower();
    expect(light.isEnabled()).toBeTruthy();

    remote.togglePower();
    expect(light.isEnabled()).toBeFalsy();
  });

  it("should adjust up", () => {
    const light = new LightDevice();
    const remote = new DeviceRemote(light);

    remote.adjustUp();
    expect(light.getAdjustment()).toBe(101); // Assuming it can go above 100
  });

  it("should adjust down", () => {
    const light = new LightDevice();
    const remote = new DeviceRemote(light);

    remote.adjustDown();
    expect(light.getAdjustment()).toBe(99); // Assuming it can go below 100
  });

  it("should display status", () => {
    const light = new LightDevice();
    const remote = new DeviceRemote(light);

    light.turnOn();
    light.setAdjustment(75);

    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    remote.displayStatus();

    expect(consoleSpy).toHaveBeenCalledWith("Light brightness: 75, is on: true");

    consoleSpy.mockRestore();
  });
});
