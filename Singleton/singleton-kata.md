# Kata: Unique Global Configuration

## Problem Description

Imagine you have a TypeScript application that needs global configuration. This configuration should be accessible from any part of your application and must be unique throughout the program's execution.

Create a Config class that implements the Singleton pattern to manage the global configuration. The configuration should include at least one parameter, such as the application's language.

Next, create an *App* class that simulates being a part of your application. The App class should be able to access and modify the global configuration through the unique instance of Config.

Finally, write unit tests to ensure that the global configuration is unique and accessible from different parts of your application.

## Requirements

1. Implement the Config class as a Singleton that stores the global configuration.
2. Add at least one parameter to the configuration (e.g., the application's language).
3. Implement the App class that can access and modify the global configuration through the unique instance of Config.
4. Write unit tests to ensure the global configuration is unique and accessible.

This Kata will help you practice implementing the Singleton pattern in a practical context and understand how it can be used to efficiently manage global configurations. Have fun solving it!
