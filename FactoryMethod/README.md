# Factory Method Design Pattern

![Factory Method](factory_method_image.png)

## Table of Contents

- [Introduction](#introduction)
- [Goal](#goal)
- [When to Use](#when-to-use)
- [Example](#example)
  - [Product Interface](#product-interface)
  - [Concrete Products](#concrete-products)
  - [Creator Interface](#creator-interface)
  - [Concrete Creators](#concrete-creators)
  - [Client Code](#client-code)
- [Pros and Cons](#pros-and-cons)
- [Related Patterns](#related-patterns)
- [Relationships with Other Patterns](#relationships-with-other-patterns)
- [License](#license)

## Introduction

The Factory Method pattern is a creational design pattern used to define an interface for creating an object but leaves the choice of its type to the subclasses. It provides one of the best ways to create an object.

## Goal

The main goal of the Factory Method pattern is to define an interface for creating objects, but let subclasses alter the type of objects that will be created.

## When to Use

Use the Factory Method pattern when:

- An object has a complex creation process.
- Subclasses should alter the type of objects being created.
- A class cannot anticipate the class of objects it must create.

## Example

Consider a scenario where different document types (e.g., `Report` and `Resume`) need to be created, but the specific implementation details are left to subclasses.

### Product Interface

```typescript
// Product interface
interface Document {
  create(): string;
}
```

### Concrete Products

```typescript
// Concrete Products implementing the Document interface
class Report implements Document {
  create(): string {
    return 'Report Document Created';
  }
}

class Resume implements Document {
  create(): string {
    return 'Resume Document Created';
  }
}
```

### Creator Interface

```typescript
// Creator interface declaring the Factory Method
interface DocumentCreator {
  createDocument(): Document;
}
```

### Concrete Creators

```typescript
// Concrete Creators implementing the Factory Method
class ReportCreator implements DocumentCreator {
  createDocument(): Document {
    return new Report();
  }
}

class ResumeCreator implements DocumentCreator {
  createDocument(): Document {
    return new Resume();
  }
}
```

### Client Code

```typescript
// Client code using the Factory Method
function clientCode(creator: DocumentCreator) {
  const document = creator.createDocument();
  return document.create();
}

const reportCreator = new ReportCreator();
const resumeCreator = new ResumeCreator();

clientCode(reportCreator); // Output: 'Report Document Created'
clientCode(resumeCreator); // Output: 'Resume Document Created'
```

## Pros and Cons

**Pros:**

- Decouples client code from concrete classes, allowing easy introduction of new document types.
- Follows the open/closed principle by enabling the introduction of new document creators without modifying existing code.

**Cons:**

- Can increase code complexity as it introduces multiple classes and hierarchies.
- Factory Method code may become complex if there are many product types.

## Related Patterns

- **Abstract Factory, Builder, and Prototype:** All can be implemented as Factory Methods.

## License

This project is licensed under the ISC License.
