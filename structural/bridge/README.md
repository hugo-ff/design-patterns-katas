# Bridge Design Pattern

![Bridge](../../assets/bridge_image.png)

## Table of Contents

- [Introduction](#introduction)
- [Goal](#goal)
- [When to Use](#when-to-use)
- [Example](#example)
  - [Abstraction](#abstraction)
  - [Implementor](#implementor)
  - [Concrete Implementors](#concrete-implementors)
  - [Refined Abstraction](#refined-abstraction)
  - [Client Code](#client-code)
- [Relationships with Other Patterns](#relationships-with-other-patterns)
- [License](#license)

## Introduction

The Bridge pattern is a structural design pattern used to separate abstraction from implementation, allowing them to vary independently. It involves creating a bridge interface that provides a way to connect an abstraction with multiple implementations.

## Goal

The main goal of the Bridge pattern is to decouple abstraction and implementation so that they can evolve independently. This enables the client to choose different implementations of an abstraction without modifying the client code.

## When to Use

Use the Bridge pattern when:

- You want to avoid a permanent binding between an abstraction and its implementation.
- Both the abstraction and its implementation should be independently extensible.

## Example

Consider a scenario where you have different shapes (abstraction) and rendering methods (implementation). The Bridge pattern allows you to create various shapes and render them using different rendering methods.

### Abstraction

```typescript
// Abstraction interface
interface Shape {
  draw(): void;
}
```

### Implementor

```typescript
// Implementor interface
interface DrawingAPI {
  drawCircle(x: number, y: number, radius: number): void;
  drawSquare(x: number, y: number, side: number): void;
}
```

### Concrete Implementors

```typescript
// Concrete Implementor 1
class DrawingAPI1 implements DrawingAPI {
  drawCircle(x: number, y: number, radius: number): void {
    console.log(`API1: Drawing a circle at (${x}, ${y}) with radius ${radius}`);
  }

  drawSquare(x: number, y: number, side: number): void {
    console.log(`API1: Drawing a square at (${x}, ${y}) with side ${side}`);
  }
}

// Concrete Implementor 2
class DrawingAPI2 implements DrawingAPI {
  drawCircle(x: number, y: number, radius: number): void {
    console.log(`API2: Drawing a circle at (${x}, ${y}) with radius ${radius}`);
  }

  drawSquare(x: number, y: number, side: number): void {
    console.log(`API2: Drawing a square at (${x}, ${y}) with side ${side}`);
  }
}
```

### Refined Abstraction

```typescript
// Refined Abstraction
class Circle implements Shape {
  constructor(private x: number, private y: number, private radius: number, private api: DrawingAPI) {}

  draw(): void {
    this.api.drawCircle(this.x, this.y, this.radius);
  }
}

// Refined Abstraction
class Square implements Shape {
  constructor(private x: number, private y: number, private side: number, private api: DrawingAPI) {}

  draw(): void {
    this.api.drawSquare(this.x, this.y, this.side);
  }
}
```

### Client Code

```typescript
// Client Code
function clientCode(shape: Shape): void {
  shape.draw();
}

// Creating shapes with different rendering methods
const circle1 = new Circle(1, 2, 3, new DrawingAPI1());
const circle2 = new Circle(4, 5, 6, new DrawingAPI2());

const square1 = new Square(7, 8, 9, new DrawingAPI1());
const square2 = new Square(10, 11, 12, new DrawingAPI2());

// Drawing shapes using different rendering methods
clientCode(circle1);
clientCode(circle2);
clientCode(square1);
clientCode(square2);
```

## Relationships with Other Patterns

- **Adapter**: While the Bridge pattern focuses on separating abstraction and implementation, the Adapter pattern is used to make an existing interface compatible with another. They both involve classes serving as intermediaries but have different intents.

- **Decorator**: The Bridge pattern is similar to the Decorator pattern in that both work as wrappers. However, the Bridge pattern separates abstraction from implementation, while the Decorator pattern enhances an object's behavior without changing its interface.

- **Proxy**: The Bridge pattern is often confused with the Proxy pattern because both involve a class serving as an intermediary. However, their purposes differ. A Proxy controls access to an object, while a Bridge makes one interface compatible with another.

## License

This project is licensed under the ISC License.