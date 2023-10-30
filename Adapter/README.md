# Adapter Design Pattern

![Adapter](adapter_image.png)

## Table of Contents

- [Introduction](#introduction)
- [Goal](#goal)
- [When to Use](#when-to-use)
- [Example](#example)
  - [Target Interface](#target-interface)
  - [Adaptee Class](#adaptee-class)
  - [Adapter Class](#adapter-class)
  - [Client Code](#client-code)
- [Relationships with Other Patterns](#relationships-with-other-patterns)
- [License](#license)

## Introduction

The Adapter pattern is a structural design pattern used to enable the interface of a class to be used as another interface. It allows incompatible interfaces to work together.

## Goal

The main goal of the Adapter pattern is to allow a class with a different interface to be used as if it had the interface expected by the client.

For example: Imagine you have a legacy class with a specific interface, and you want to use it in a new system that expects a different interface. The Adapter pattern would help you create an adapter to make the legacy class compatible with the new system.

## When to Use

Use the Adapter pattern when:

- You need to use a class with an incompatible interface.
- You want to create a reusable class that cooperates with unrelated or unforeseen classes, that is, classes that don't necessarily have compatible interfaces.

## Example

Consider a scenario where there is an existing `OldSystemPrinter` class with a method `printMessage`, but the new system expects a class with a `showMessage` method. We can use the Adapter pattern to make `OldSystemPrinter` compatible with the new system.

### Target Interface

```typescript
// Target interface expected by the client
interface NewSystemPrinter {
  showMessage(): void;
}
```

### Adaptee Class

```typescript
// Existing class with an incompatible interface
class OldSystemPrinter {
  printMessage(): void {
    console.log('Printing a message in the old system.');
  }
}
```

### Adapter Class

```typescript
// Adapter class that makes OldSystemPrinter compatible with NewSystemPrinter
class PrinterAdapter implements NewSystemPrinter {
  private oldSystemPrinter: OldSystemPrinter;

  constructor(oldSystemPrinter: OldSystemPrinter) {
    this.oldSystemPrinter = oldSystemPrinter;
  }

  showMessage(): void {
    this.oldSystemPrinter.printMessage();
  }
}
```

### Client Code

```typescript
// Client code using the NewSystemPrinter interface
function clientCode(printer: NewSystemPrinter): void {
  printer.showMessage();
}

// Using the Adapter to make OldSystemPrinter compatible
const oldSystemPrinter = new OldSystemPrinter();
const adapter = new PrinterAdapter(oldSystemPrinter);

// Client code can now use OldSystemPrinter through the Adapter
clientCode(adapter);
```

## Relationships with Other Patterns

- **Decorator**: The Adapter pattern is similar to the Decorator pattern in that they both work as wrappers. However, the intent is different. While the Adapter pattern makes one class's interface compatible with another, the Decorator pattern enhances an object's behavior without changing its interface.

- **Proxy**: The Adapter pattern is often confused with the Proxy pattern because both involve a class serving as an intermediary. However, their purposes differ. A Proxy controls access to an object, while an Adapter makes one interface compatible with another.

- **Bridge**: The Adapter pattern is similar to the Bridge pattern in that both involve an interface. However, their intents are different. The Adapter pattern makes one interface compatible with another, while the Bridge pattern separates abstraction from implementation.

## License

This project is licensed under the ISC License.
