# Composite Design Pattern

![Composite](../../assets/composite_image.png)

## Table of Contents

- [Introduction](#introduction)
- [Goal](#goal)
- [When to Use](#when-to-use)
- [Example](#example)
  - [Component Interface](#component-interface)
  - [Leaf Class](#leaf-class)
  - [Composite Class](#composite-class)
  - [Client Code](#client-code)
- [Relationships with Other Patterns](#relationships-with-other-patterns)
- [License](#license)

## Introduction

The Composite pattern is a structural design pattern used to treat both individual objects and compositions of objects uniformly. It allows clients to treat individual objects and compositions of objects uniformly.

## Goal

The main goal of the Composite pattern is to compose objects into tree structures to represent part-whole hierarchies. Clients can then treat individual objects and compositions of objects uniformly, making it easier to work with complex object structures.

## When to Use

Use the Composite pattern when:

- You want clients to treat individual objects and compositions of objects uniformly.
- You need to represent part-whole hierarchies of objects.

## Example

Consider a scenario where we have a graphic system that can consist of simple shapes (leaves) or complex shapes that are compositions of simpler shapes. The Composite pattern allows us to treat both individual shapes and compositions of shapes uniformly.

### Component Interface

```typescript
// Component interface that declares common methods for shapes
interface Shape {
  draw(): void;
}

```

### Leaf Class

```typescript
// Leaf class representing a simple shape
class Circle implements Shape {
  draw(): void {
    console.log('Drawing a circle');
  }
}
```

### Composite Class

```typescript
// Composite class representing a complex shape, which is a composition of simpler shapes
class CompoundShape implements Shape {
  private shapes: Shape[] = [];

  addShape(shape: Shape): void {
    this.shapes.push(shape);
  }

  draw(): void {
    console.log('Drawing a compound shape');
    this.shapes.forEach((shape) => shape.draw());
  }
}
```

### Client Code

```typescript
// Client code treating individual shapes and compositions of shapes uniformly
function drawShape(shape: Shape): void {
  shape.draw();
}

// Creating individual shapes
const circle = new Circle();

// Creating a composition of shapes
const compoundShape = new CompoundShape();
compoundShape.addShape(new Circle());
compoundShape.addShape(new Circle());

// Drawing individual shapes and compositions of shapes
drawShape(circle);
drawShape(compoundShape);
```

## Relationships with Other Patterns

- **Decorator**: The Composite pattern is similar to the Decorator pattern in that they both involve compositions of objects. However, their intents differ. The Composite pattern is focused on part-whole hierarchies, while the Decorator pattern is focused on adding responsibilities to objects.

- **Visitor**: The Composite pattern can work together with the Visitor pattern to define operations on complex structures of objects. Visitors can traverse the Composite structure and perform operations on individual components.

- **Chain of Responsibility**: The Composite pattern can be used in combination with the Chain of Responsibility pattern to represent hierarchies of handlers. Each component in the Composite can act as a handler and pass requests along the chain.

## License

This project is licensed under the ISC License.
