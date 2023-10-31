# Observer Design Pattern

![Observer](../../assets/observer_image.png)

## Table of Contents

- [Introduction](#introduction)
- [Goal](#goal)
- [When to Use](#when-to-use)
- [Example](#example)
  - [Subject](#subject)
  - [Observer Interface](#observer-interface)
  - [Concrete Observers](#concrete-observers)
  - [Concrete Subject](#concrete-subject)
  - [Usage](#usage)
- [Relationships with Other Patterns](#relationships-with-other-patterns)
- [License](#license)

## Introduction

The Observer pattern is a behavioral design pattern that defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. It is also known as the Publish-Subscribe pattern.

## Goal

The main goal of the Observer pattern is to establish a communication mechanism between a subject (the object being observed, also known as *notifier*) and multiple observers (objects interested in the state changes of the subject). When the notifier's state changes, all registered observers are notified and updated.

## When to Use

Use the Observer pattern when:

- An object (the subject) has a one-to-many dependency relationship with other objects (observers), and changes to the state of the subject should notify and update all its dependents.
- You want to decouple the classes of the subject and its observers, allowing for a more flexible and maintainable design.

## Example

Consider a scenario where there is a `NewsAgency` that generates news, and multiple news outlets (observers) want to be notified whenever there is new news.

### Subject

```typescript
// Subject (Observable)
class NewsAgency {
  private news: string = '';
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.news);
    }
  }

  setNews(news: string): void {
    this.news = news;
    this.notifyObservers();
  }
}
```

### Observer Interface

```typescript
// Observer interface
interface Observer {
  update(news: string): void;
}
```

### Concrete Observers

```typescript
// Concrete Observers
class NewsOutlet implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(news: string): void {
    console.log(`${this.name} received news: ${news}`);
  }
}
```

### Concrete Subject

```typescript
// Concrete Subject
const bbc = new NewsOutlet('BBC');
const cnn = new NewsOutlet('CNN');

const newsAgency = new NewsAgency();
newsAgency.addObserver(bbc);
newsAgency.addObserver(cnn);

newsAgency.setNews('Breaking News: Important Event!');
```

### Usage

```typescript
// Changing the news in the NewsAgency will notify all registered observers
newsAgency.setNews('Latest Update: Weather Forecast!');
```

## Relationships with Other Patterns

- **Mediator**: The Observer pattern is often implemented using a Mediator. While the Observer pattern establishes a one-to-many dependency between objects, the Mediator pattern centralizes communication between objects, acting as a central hub for communication.

- **Singleton**: Observers can often be singletons, especially when the same observer is used by multiple subjects. Care should be taken to manage dependencies and avoid creating tightly coupled systems.

- **Command**: In some cases, the Command pattern can be combined with the Observer pattern. The Command pattern encapsulates requests as objects, and the Observer pattern allows a subject to notify observers about state changes using commands.

## License

This project is licensed under the ISC License.
