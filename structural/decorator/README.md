# Decorator Design Pattern

![Decorator](../../assets/decorator_image.png)

## Table of Contents

- [Introduction](#introduction)
- [Goal](#goal)
- [When to Use](#when-to-use)
- [Example](#example)
  - [Component Interface](#component-interface)
  - [Concrete Component](#concrete-component)
  - [Decorator](#decorator)
  - [Concrete Decorators](#concrete-decorators)
  - [Client Code](#client-code)
- [Relationships with Other Patterns](#relationships-with-other-patterns)
- [How it Relates to SOLID Principles](#how-it-relates-to-solid-principles)
- [License](#license)

## Introduction

The Decorator pattern is a structural design pattern that allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class.

## Goal

The primary goal of the Decorator pattern is to extend the functionality of objects in a flexible and reusable way. It promotes the addition of new behaviors to objects without altering their structures.

## When to Use

Use the Decorator pattern when:

- You need to add responsibilities to objects dynamically and transparently.
- You want to avoid a permanent binding between the responsibilities and the objects.
- Extension by subclassing is impractical or not feasible.

## Example

Consider a scenario where we have a coffee shop that sells different types of coffee. The Decorator pattern allows us to add various condiments (decorators) to the base coffee to create different combinations.

### Component Interface

```typescript
// Component interface that declares a method for cost calculation
interface Coffee {
  cost(): number;
}
```

### Concrete Component

```typescript
// Concrete component representing a simple coffee
class SimpleCoffee implements Coffee {
  cost(): number {
    return 5;
  }
}
```

### Decorator

```typescript
// Decorator abstract class that implements the component interface
abstract class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  abstract cost(): number;
}
```

### Concrete Decorators

```typescript
// Concrete decorators representing different condiments
class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 2;
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 1;
  }
}
```

### Client Code

```typescript
// Client code creating a decorated coffee with condiments
const simpleCoffee = new SimpleCoffee();
const milkCoffee = new MilkDecorator(simpleCoffee);
const sweetMilkCoffee = new SugarDecorator(milkCoffee);

console.log("Cost of simple coffee:", simpleCoffee.cost());
console.log("Cost of milk coffee:", milkCoffee.cost());
console.log("Cost of sweet milk coffee:", sweetMilkCoffee.cost());
```

## Relationships with Other Patterns

- **Composite**: The Decorator pattern is similar to the Composite pattern in that they both involve compositions of objects. However, their intents differ. The Decorator pattern is focused on adding responsibilities to objects, while the Composite pattern is focused on treating individual objects and compositions uniformly.

- **Adapter**: While the Adapter pattern is used to make unrelated classes work together, the Decorator pattern enhances the responsibilities of a class without altering its interface.

- **Strategy**: The Decorator pattern is similar to the Strategy pattern in that both involve altering the behavior of an object. However, the Decorator pattern is more focused on extending responsibilities dynamically, while the Strategy pattern is focused on defining a family of algorithms, encapsulating each one, and making them interchangeable.

## How it Relates to SOLID Principles

- **Single Responsibility Principle (SRP)**: The Decorator pattern adheres to the SRP by allowing classes to have a single reason to change. Each decorator class has the responsibility of adding a specific behavior without affecting the core functionality.

- **Open/Closed Principle (OCP)**: The Decorator pattern follows the OCP as it allows for the extension of behavior without modifying existing code. New decorators can be added to introduce new functionalities without altering the existing component classes.

- **Liskov Substitution Principle (LSP)**: The Decorator pattern doesn't violate the LSP because decorators are designed to be substitutable for the wrapped components. Clients can use decorated objects in place of the original components without issues.

- **Interface Segregation Principle (ISP)**: The Decorator pattern aligns with the ISP by having a minimal interface that clients interact with (the component interface). Decorators provide additional functionalities through separate interfaces, avoiding unnecessary dependencies.

- **Dependency Inversion Principle (DIP)**: The Decorator pattern supports the DIP by allowing high-level modules to depend on abstractions (the component interface) rather than concrete classes. Clients depend on the abstract component, and decorators depend on the same abstraction.

## License

This project is licensed under the ISC License.
