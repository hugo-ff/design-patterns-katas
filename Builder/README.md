# Builder Design Pattern

![Builder](builder_image.png)

## Table of Contents

- [Introduction](#introduction)
- [Goal](#goal)
- [When to Use](#when-to-use)
- [Example](#example)
  - [Builder Interface](#builder-interface)
  - [Product Class](#product-class)
  - [ConcreteBuilder Implementation](#concretebuilder-implementation)
  - [Director Class](#director-class)
  - [Usage](#usage)
- [Relationships with Other Patterns](#relationships-with-other-patterns)
- [License](#license)

## Introduction

The Builder pattern is a creational design pattern used to construct a complex object step by step. It allows constructing different representations of an object using the same construction process.

## Goal

The main goal of the Builder pattern is to separate the construction of a complex object from its representation so that the same construction process can create different representations.

For example: Imagine you're building a car. The Builder pattern would help you construct a car step by step, allowing you to customize its features and create different models with the same building process.

## When to Use

Use the Builder pattern when:

- An object has a complex construction.
- There is a need for a flexible way to build different representations of the same object.

## Example

Consider building a complex object like a `Meal`. A `Meal` can consist of various components like a burger, a drink, and a dessert. Different restaurants might offer different combinations of these components.

### Builder Interface

```typescript
// Builder interface
interface MealBuilder {
  reset(): void;
  buildMainCourse(): void;
  buildSideDish(salad: string): void;
  buildDrink(drink: string): void;
}
```

### Product Class

```typescript
// Final product
class ItalianMeal {
  private mainCourse: string = '';
  private sideDish: string = '';
  private drink: string = '';

  setMainCourse(mainCourse: string): void {
    this.mainCourse = mainCourse;
  }

  setSideDish(sideDish: string): void {
    this.sideDish = sideDish;
  }

  setDrink(drink: string): void {
    this.drink = drink;
  }

  describe(): string {
    return `Main Course: ${this.mainCourse}, Side Dish: ${this.sideDish}, Drink: ${this.drink}`;
  }
}
```

### ConcreteBuilder Implementation

```typescript
// ConcreteBuilder implements the Builder interface
class ItalianMealBuilder implements MealBuilder {
  private meal: ItalianMeal;

  constructor() {
    this.meal = new ItalianMeal();
  }

  reset() {
    this.meal = new ItalianMeal();
  }

  buildMainCourse(): void {
    this.meal.setMainCourse('Spaghetti Bolognese');
  }

  buildSideDish(salad: string): void {
    this.meal.setSideDish(salad);
  }

  buildDrink(drink: string): void {
    this.meal.setDrink(drink);
  }

  getMeal(): ItalianMeal {
    return this.meal;
  }
}
```

### Director Class

```typescript
// Director uses the Builder to construct the product
class Chef {
  constructItalianMeal(mealBuilder: MealBuilder): void {
    mealBuilder.reset();
    mealBuilder.buildMainCourse();
    mealBuilder.buildSideDish('Caprese Salad');
    mealBuilder.buildDrink('Red wine');
  }
}
```

### Usage

```typescript
// Using the Builder
const chef = new Chef();
const italianMealBuilder = new ItalianMealBuilder();

chef.constructItalianMeal(italianMealBuilder);

const italianMeal = italianMealBuilder.getResult();
italianMeal.describe(); // Output: Main Course: Spaghetti Bolognese, Side Dish: Caprese Salad, Drink: Red wine
```

## Relationships with Other Patterns

- **Abstract Factory, Factory Method, and Prototype**: The Builder pattern can be implemented using any of these patterns. An Abstract Factory may have a Builder as a part, and a Factory Method may return different builders. The Prototype pattern can be used to copy existing complex objects, which can serve as prototypes for builders.
- **Composite**: The Builder pattern constructs a complex object step by step. If the product being constructed is a composite, the Builder pattern can be used in conjunction with the Composite pattern.
- **Decorator**: The Builder pattern focuses on constructing a complex object, while the Decorator pattern focuses on adding new functionalities to an object. In some cases, they can be combined to construct and decorate objects in a flexible way.

## License

This project is licensed under the ISC License.
