# Kata: Organization Hierarchy

## Description

You are tasked with designing a system to represent the hierarchy of an organization. The organization consists of different types of entities, including individual employees and departments. Each employee has a unique ID, a name, and a job title. Departments have a unique ID, a name, and can contain employees or other sub-departments.

## Problem

1. Create an interface `OrganizationUnit` that declares common methods for both employees and departments, such as `displayDetails`.

2. Implement concrete classes for two types of entities: `Employee` and `Department`. These entities should implement the `OrganizationUnit` interface.

3. The `Employee` class should have attributes for ID, name, and job title. The `Department` class should have attributes for ID, name, and a list of `OrganizationUnit` instances representing either employees or sub-departments.

4. Implement a method `displayDetails` in each class to show the details of the entity. For employees, it should display the ID, name, and job title. For departments, it should display the ID, name, and a list of details for the contained entities (employees or sub-departments).

5. Create a class `Organization` that contains a list of `OrganizationUnit` instances representing the top-level entities in the organization.

6. Implement a method `displayDetails` in the `Organization` class to show the details of the entire organization, including all employees and nested departments.

### Hints

- Use TypeScript to take advantage of static typing and facilitate interface and class management.
- Apply the Composite pattern to represent part-whole hierarchies of entities in the organization.
- Consider how to traverse the hierarchy to display details for the entire organization.

This kata simulates a real-world scenario where you need to design a system to represent the hierarchy of an organization, ensuring flexibility to include both individual employees and nested departments.
