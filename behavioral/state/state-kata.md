# Kata: Vending Machine State

## Problem Statement

You are tasked with implementing the state logic for a vending machine. The vending machine can be in different states based on user interactions, such as inserting a coin, selecting an item, and dispensing an item.

### Requirements

1. The vending machine has three states: `Idle`, `Selecting`, and `Dispensing`.

2. When the vending machine is in the `Idle` state:
   - If a user inserts a coin, the state should transition to `Selecting`.
   - If a user selects an item without inserting a coin, display a message: "Please insert a coin first."
   - If a user tries to dispense an item without selecting one, display a message: "Please select an item first."

3. When the vending machine is in the `Selecting` state:
   - If a user inserts another coin, display a message: "Coin already inserted. Please select an item."
   - If a user selects an item, the state should transition to `Dispensing`.
   - If a user tries to dispense an item without selecting one, display a message: "No item selected. Please select an item first."

4. When the vending machine is in the `Dispensing` state:
   - If a user inserts another coin, display a message: "Coin already inserted. Please wait for dispensing."
   - If a user selects another item, display a message: "Item already selected. Please wait for dispensing."
   - If a user tries to dispense an item, display a message: "Item dispensed. Thank you!" and transition back to the `Idle` state.

### Constraints

- Use TypeScript to implement the vending machine and its state logic.
- Create classes for the vending machine and its states (`Idle`, `Selecting`, `Dispensing`).
- Implement state transition methods for inserting a coin, selecting an item, and dispensing an item.

## Example

```typescript
// Creating a VendingMachine instance
const vendingMachine = new VendingMachine();

// Initial state is Idle
vendingMachine.selectItem(); // Output: "Please insert a coin first."

// Inserting a coin transitions to Selecting state
vendingMachine.insertCoin(); // Output: "Coin inserted. Please select an item."

// Selecting an item transitions to Dispensing state
vendingMachine.selectItem(); // Output: "Item selected. Please wait for dispensing."

// Dispensing an item transitions back to Idle state
vendingMachine.dispenseItem(); // Output: "Item dispensed. Thank you!"

// Inserting a coin when already in Dispensing state
vendingMachine.insertCoin(); // Output: "Coin already inserted. Please wait for dispensing."
```

## Test Cases

Write test cases to ensure that the vending machine and its state logic work as expected. Test different scenarios, such as inserting a coin, selecting an item, and dispensing an item in various states.
