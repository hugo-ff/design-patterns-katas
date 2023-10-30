# Kata: Online Course Platform

## Goal

Design a simple Online Course Platform that supports various types of courses, such as Programming, Design, and Language courses. Implement the Factory Method pattern to create course instances based on their types.

## Problem Statement

You are tasked with building an Online Course Platform that caters to different types of courses. Each course has its own specialization, and the platform should be able to create instances of these courses dynamically.

### Requirements

1. Implement a base class `Course` that has properties like `title`, `duration`, and `price`.

2. Create three different course types: `ProgrammingCourse`, `DesignCourse`, and `LanguageCourse`, each inheriting from the `Course` base class. Each specialized course should have additional properties specific to its type.

3. Implement a `CourseFactory` interface with a method `createCourse` that takes a course type and returns an instance of the corresponding course.

4. Implement concrete classes `ProgrammingCourseFactory`, `DesignCourseFactory`, and `LanguageCourseFactory`, each implementing the `CourseFactory` interface. These factories should know how to create instances of their respective courses.

### Constraints

- The platform should support the addition of new course types without modifying existing code.
- The course factories should encapsulate the logic for creating instances of their respective courses.
