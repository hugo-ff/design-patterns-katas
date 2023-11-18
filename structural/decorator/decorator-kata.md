# Kata: Task Priority Decorator

## Description

You are tasked with extending a system for managing project tasks within an organization. Each task in the organization has different attributes, including a unique ID, a description, and a status (e.g., "Not Started," "In Progress," "Completed"). Now, you need to introduce a new feature: task priorities.

## Problem

1. Create an interface called `Task` that declares common methods for tasks, such as `displayDetails`.

2. Implement a concrete class `BaseTask` that implements the `Task` interface. This class should represent a basic task with attributes for ID, description, and status.

3. Introduce a new decorator called `PriorityDecorator` that also implements the `Task` interface. This decorator should have a constructor that takes a `Task` instance and a priority level (e.g., "High," "Medium," "Low"). The `displayDetails` method in the decorator should extend the details of the original task to include the priority.

4. Create a class `TaskManager` that contains a list of `Task` instances representing the tasks in the project.

5. Create instances of `BaseTask` and apply the `PriorityDecorator` to some of them to add priority information.

6. Implement a method `displayDetails` in the `TaskManager` class to show the details of all tasks, including their priorities.

## Hints

- Use TypeScript to take advantage of static typing and facilitate interface and class management.
- Apply the Decorator pattern to dynamically add priority information to tasks.
- Consider how to implement the decorator in a way that allows for easy extension with other decorators in the future.

## Notes

This kata simulates a real-world scenario where you need to extend an existing system to introduce a new feature (task priorities) using the Decorator pattern.
