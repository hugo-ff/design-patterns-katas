interface VendingState {
  insertCoin(): void;
  selectItem(): void;
  dispenseItem(): void;
}

class Idle implements VendingState {
  private vendingMachine: VendingMachine;

  constructor(vendingMachine: VendingMachine) {
    this.vendingMachine = vendingMachine;
  }

  insertCoin() {
    this.vendingMachine.setDisplayMessage('Coin inserted. Please select an item.');
    this.vendingMachine.setState(new Selecting(this.vendingMachine));
  };
  selectItem() {
    this.vendingMachine.setDisplayMessage('Please insert a coin first.');
  };
  dispenseItem() {
    this.vendingMachine.setDisplayMessage('Please select an item first.');
  };
}

class Selecting implements VendingState {
  private vendingMachine: VendingMachine;

  constructor(vendingMachine: VendingMachine) {
    this.vendingMachine = vendingMachine;
  }

  insertCoin() {
    this.vendingMachine.setDisplayMessage('Coin already inserted. Please select an item.');
  };
  selectItem() {
    this.vendingMachine.setDisplayMessage('Item selected. Please wait for dispensing.');
    this.vendingMachine.setState(new Dispensing(this.vendingMachine));
  };
  dispenseItem() {
    this.vendingMachine.setDisplayMessage('No item selected. Please select an item first.');
  };
}

class Dispensing implements VendingState {
  private vendingMachine: VendingMachine;

  constructor(vendingMachine: VendingMachine) {
    this.vendingMachine = vendingMachine;
  }

  insertCoin() {
    this.vendingMachine.setDisplayMessage('Coin already inserted. Please wait for dispensing.');
  };
  selectItem() {
    this.vendingMachine.setDisplayMessage('Item already selected. Please wait for dispensing.');
  };
  dispenseItem() {
    this.vendingMachine.setDisplayMessage('Item dispensed. Thank you!');
    this.vendingMachine.setState(new Idle(this.vendingMachine));
  };
}

export class VendingMachine {
  private state: VendingState;
  private message: string;

  constructor() {
    this.state = new Idle(this);
    this.message = '';
  }

  setState(newState: VendingState): void {
    this.state = newState;
  }

  setDisplayMessage(message: string): void {
    this.message = message;
  }

  displayMessage(): string {
    return this.message;
  }

  insertCoin(): void {
    this.state.insertCoin();
  };
  selectItem(): void {
    this.state.selectItem();
  };
  dispenseItem(): void {
    this.state.dispenseItem();
  };
}

const vendingMachine = new VendingMachine();

// Initial state is Idle
vendingMachine.selectItem();
vendingMachine.displayMessage(); // Output: "Please insert a coin first."

// Inserting a coin transitions to Selecting state
vendingMachine.insertCoin();
vendingMachine.displayMessage(); // Output: "Coin inserted. Please select an item."

// Selecting an item transitions to Dispensing state
vendingMachine.selectItem();
vendingMachine.displayMessage(); // Output: "Item selected. Please wait for dispensing."

// Dispensing an item transitions back to Idle state
vendingMachine.dispenseItem();
vendingMachine.displayMessage(); // Output: "Item dispensed. Thank you!"

// Inserting a coin when already in Dispensing state
vendingMachine.insertCoin();
vendingMachine.displayMessage(); // Output: "Coin already inserted. Please wait for dispensing."
