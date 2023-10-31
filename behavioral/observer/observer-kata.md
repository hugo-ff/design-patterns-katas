# Observer Design Pattern Kata

## Problem

You are tasked with implementing a real-time weather monitoring system. The system should allow multiple weather stations to report weather updates, and any connected display units should receive and display the latest weather information.

## Requirements

1. Implement a `WeatherStation` class that represents a weather station. Each weather station should be able to:

   - Report the current temperature.
   - Report the current humidity.
   - Report the current wind speed.

2. Implement a `WeatherDisplay` class that represents a display unit for weather information. Each display unit should be able to:

   - Subscribe to a weather station to receive updates.
   - Display the latest weather information, including temperature, humidity, and wind speed.

3. Ensure that when a weather station reports an update, all connected weather displays receive and display the latest information.

## Constraints

- Use TypeScript for implementation.
- Use the Observer pattern to establish the relationship between `WeatherStation` and `WeatherDisplay`.
- Write test cases to validate the functionality of your implementation.
