# Builder Design Pattern Kata

## Problem: Building a Custom Computer

### Goal

Practice implementing the Builder design pattern to construct custom computers with different specifications.

### Problem Description

You are tasked with creating a system to build custom computers based on specific requirements. Implement the Builder design pattern to allow flexible and customizable construction of computers with varying components.

### Requirements

1. Create a `ComputerBuilder` interface with methods for building different components of a computer.
2. Implement concrete builders for different computer types (e.g., GamingComputerBuilder, BusinessComputerBuilder).
3. Allow customizing the CPU, RAM, storage, and graphics card independently for each computer.
4. Ensure that constructing a computer does not require specifying all components at once.
5. Implement a `ComputerDirector` class to orchestrate the construction process.

### Constraints

- Use the Builder design pattern to encapsulate the construction of complex computer objects.
- Ensure that the client code is not tightly coupled to specific computer configurations.
- Write test cases to validate the correctness of the builder implementation.

### Tips

- Use the Builder pattern to encapsulate the construction steps and allow variations in the final product.
- The client code should be able to construct computers with different configurations without knowing the specifics of the building process.

Happy coding! 💻
