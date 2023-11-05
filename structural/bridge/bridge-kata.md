# Kata: Smart Home Devices Bridge

## Description

Imagine that you are developing a system to manage devices in a smart home. These devices could be lights, thermostats, or any other connected device. Each type of device has its own characteristics and specific methods.

The challenge is to implement a system that allows devices to interact with different smart home platforms. For example, you might have a platform for Apple HomeKit devices and another for Google Home devices. Each platform has its own set of APIs and ways to interact with devices.

## Problem

1. Create an interface `Device` that declares common methods for all devices, such as `turnOn`, `turnOff`, and `getStatus`.

2. Implement concrete classes for two types of devices: `LightDevice` and `ThermostatDevice`. These devices should implement the `Device` interface and have specific methods, such as `changeBrightness` for lights and `setTemperature` for thermostats.

3. Implement an interface `DeviceRemote` that allows a user to interact with a device without knowing the underlying platform.

### Hints

- Use TypeScript to take advantage of static typing and facilitate interface and class management.
- Apply the Bridge pattern to decouple the abstraction (user interface) from the implementation (smart home platforms).
- Consider how to manage differences in device APIs between platforms.

This kata simulates a real-world scenario where you need to design a system to handle devices in a smart home, ensuring flexibility to add new platforms and types of devices in the future.
