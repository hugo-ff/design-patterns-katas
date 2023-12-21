# Facade Design Pattern

![Facade](../../assets/facade_image.png)

## Table of Contents

- [Introduction](#introduction)
- [Goal](#goal)
- [When to Use](#when-to-use)
- [Example](#example)
  - [Facade](#facade)
  - [Subsystems](#subsystems)
  - [Client Code](#client-code)
- [Relationships with Other Patterns](#relationships-with-other-patterns)
- [How it Relates to SOLID Principles](#how-it-relates-to-solid-principles)
- [License](#license)

## Introduction

The Facade pattern is a structural design pattern that provides a simplified interface to a set of interfaces in a subsystem. It hides the complexities of the subsystem and provides a single unified interface for the client.

## Goal

The primary goal of the Facade pattern is to simplify and unify the interface to a complex system of classes, making it easier for clients to interact with the subsystem. It promotes loose coupling between the client code and the subsystem, enhancing maintainability and reducing dependencies.

## When to Use

Use the Facade pattern when:

- You want to provide a simple and unified interface to a complex subsystem.
- There are many dependencies between clients and the subsystem, and you want to decouple them.
- You need to organize a subsystem into layers to improve its manageability.

## Example

Let's consider an example of a home theater system. The Facade pattern can be used to create a simple interface for controlling the different components of the system.

### Facade

```typescript
// Facade that provides a simplified interface to the home theater system
class HomeTheaterFacade {
  private dvdPlayer: DVDPlayer;
  private projector: Projector;
  private soundSystem: SoundSystem;

  constructor() {
    this.dvdPlayer = new DVDPlayer();
    this.projector = new Projector();
    this.soundSystem = new SoundSystem();
  }

  public watchMovie(movie: string): void {
    console.log("Get ready to watch a movie...");
    this.projector.turnOn();
    this.projector.setInput(this.dvdPlayer);
    this.dvdPlayer.turnOn();
    this.dvdPlayer.playMovie(movie);
    this.soundSystem.turnOn();
    this.soundSystem.setSource(this.dvdPlayer);
  }

  public endMovie(): void {
    console.log("Shutting down the home theater...");
    this.projector.turnOff();
    this.dvdPlayer.turnOff();
    this.soundSystem.turnOff();
  }
}
```

### Subsystems

```typescript
// Subsystem class representing a DVD player
class DVDPlayer {
  public turnOn(): void {
    console.log("DVD Player is on");
  }

  public turnOff(): void {
    console.log("DVD Player is off");
  }

  public playMovie(movie: string): void {
    console.log(`Playing ${movie}`);
  }
}

// Subsystem class representing a projector
class Projector {
  public turnOn(): void {
    console.log("Projector is on");
  }

  public turnOff(): void {
    console.log("Projector is off");
  }

  public setInput(input: any): void {
    console.log("Setting projector input to", input);
  }
}

// Subsystem class representing a sound system
class SoundSystem {
  public turnOn(): void {
    console.log("Sound System is on");
  }

  public turnOff(): void {
    console.log("Sound System is off");
  }

  public setSource(source: any): void {
    console.log("Sound System source is set to", source);
  }
}
```

### Client Code

```typescript
// Client code using the home theater facade
const homeTheater = new HomeTheaterFacade();

homeTheater.watchMovie("The Avengers");
homeTheater.endMovie();
```

## Relationships with Other Patterns

- **Adapter**: The Facade pattern can be seen as an adapter for a complex subsystem, providing a simplified interface to it. However, while an adapter typically works with a single class, a facade can coordinate multiple subsystem classes.

- **Singleton**: A Facade can often be implemented as a Singleton to ensure a single point of access to the subsystem.

- **Composite**: The Facade can work with a composite structure of subsystem objects, treating them uniformly through a simplified interface.

## How it Relates to SOLID Principles

- **Single Responsibility Principle (SRP)**: The Facade pattern adheres to SRP by providing a single entry point to a subsystem, ensuring that it has only one reason to change – when the subsystem's interface changes.

- **Open/Closed Principle (OCP)**: The Facade pattern promotes OCP by allowing you to add new subsystem classes without modifying the existing client code. Clients depend on the facade interface, not the concrete subsystem classes.

- **Liskov Substitution Principle (LSP)**: The Facade pattern doesn't directly impact LSP as it focuses on simplifying the interface to a subsystem. However, it indirectly supports LSP by isolating the subsystem changes from the client code.

- **Interface Segregation Principle (ISP)**: The Facade pattern aligns with ISP by providing a client-specific interface that doesn't impose unnecessary methods on clients. Clients only interact with the methods they need in the facade.

- **Dependency Inversion Principle (DIP)**: The Facade pattern promotes DIP by allowing clients to depend on the high-level facade interface rather than the low-level subsystem classes, reducing direct dependencies and promoting loose coupling.

## License

This project is licensed under the ISC License.
