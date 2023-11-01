import { VendingMachine } from './StateKata';

describe('State pattern', () => {
  let vendingMachine: VendingMachine;

  beforeEach(() => {
    vendingMachine = new VendingMachine();
  })

  describe('Idle State', () => {
    it('should display "Please insert a coin first." when selecting an item', () => {
      vendingMachine.selectItem();
      expect(vendingMachine.displayMessage()).toBe('Please insert a coin first.');
    });

    it('should transition to Selecting state when inserting a coin', () => {
      vendingMachine.insertCoin();
      expect(vendingMachine.displayMessage()).toBe('Coin inserted. Please select an item.');
    });

    it('should display "Please select an item first." when dispensing an item', () => {
      vendingMachine.dispenseItem();
      expect(vendingMachine.displayMessage()).toBe('Please select an item first.');
    });
  });

  describe('Selecting State', () => {
    beforeEach(() => {
      vendingMachine.insertCoin();
    });

    it('should display "Coin already inserted. Please select an item." when inserting another coin', () => {
      vendingMachine.insertCoin();
      expect(vendingMachine.displayMessage()).toBe('Coin already inserted. Please select an item.');
    });

    it('should transition to Dispensing state when selecting an item', () => {
      vendingMachine.selectItem();
      expect(vendingMachine.displayMessage()).toBe('Item selected. Please wait for dispensing.');
    });

    it('should display "No item selected. Please select an item first." when dispensing an item', () => {
      vendingMachine.dispenseItem();
      expect(vendingMachine.displayMessage()).toBe('No item selected. Please select an item first.');
    });
  });

  describe('Dispensing State', () => {
    beforeEach(() => {
      vendingMachine.insertCoin();
      vendingMachine.selectItem();
    });

    it('should display "Coin already inserted. Please wait for dispensing." when inserting another coin', () => {
      vendingMachine.insertCoin();
      expect(vendingMachine.displayMessage()).toBe('Coin already inserted. Please wait for dispensing.');
    });

    it('should display "Item already selected. Please wait for dispensing." when selecting another item', () => {
      vendingMachine.selectItem();
      expect(vendingMachine.displayMessage()).toBe('Item already selected. Please wait for dispensing.');
    });

    it('should transition back to Idle state when dispensing an item', () => {
      vendingMachine.dispenseItem();
      expect(vendingMachine.displayMessage()).toBe('Item dispensed. Thank you!');
    });
  });
})