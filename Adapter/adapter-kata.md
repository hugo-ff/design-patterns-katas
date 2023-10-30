# Kata: External API Integration

## Goal

Create a system that integrates with an external API using the Adapter pattern. The external API has a specific interface, and you need to adapt it to work seamlessly with your internal system.

## Problem Statement

In your project, you are required to fetch data from an external API, but the API has a different interface than what your system expects. You cannot modify the API, and you need to integrate it into your system without disrupting your existing code.

### Requirements

1. Identify or create a simple representation of an external API with methods like `fetchData` and `processData`.

2. Implement an interface, `InternalSystem`, with methods like `getData` and `handleData`, that should be used by your internal system.

3. Create an adapter class, `ApiAdapter`, that makes an instance of the external API compatible with the `InternalSystem` interface. The adapter should delegate calls to `getData` and `handleData` to `fetchData` and `processData` of the external API.

4. Write client code that uses the `InternalSystem` interface to fetch and process data from the external API using the adapter.

### Constraints

- The external API cannot be modified.
- The adapter should not change the behavior of the external API but should make it usable in your internal system.
- Ensure that your internal system can seamlessly work with data from the external API.
