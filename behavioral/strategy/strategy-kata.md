# Kata: Payment Processing Strategies

## Goal

Design a system that processes payments using different payment strategies. Implement the Strategy pattern to allow the flexibility of choosing and switching between payment strategies.

## Problem Statement

You are tasked with building a payment processing system that supports different payment methods, such as credit card, PayPal, and cryptocurrency. Each payment method has its own processing logic, and the system should be able to switch between these payment strategies at runtime.

### Requirements

1. Implement a base class `PaymentStrategy` with a method `processPayment` that takes payment details and performs the payment processing.

2. Create three different payment strategies: `CreditCardPayment`, `PayPalPayment`, and `CryptocurrencyPayment`, each inheriting from the `PaymentStrategy` base class. Each payment strategy should have its own processing logic specific to its type.

3. Implement a `PaymentProcessor` class that uses the Strategy pattern to perform payments. It should have a method `process` that takes a payment strategy and payment details, and it calls the `processPayment` method of the chosen strategy.

4. The system should support adding new payment methods without modifying existing code.

## Additional Challenges

1. Implement a mechanism to allow users to switch between payment methods dynamically.

2. Extend the system to support additional payment methods without modifying the existing code.

3. Implement a logging mechanism to track payment transactions using the Strategy pattern.

## Constraints

- The payment strategies should encapsulate the logic for processing payments and should be easily extendable for new payment methods.
