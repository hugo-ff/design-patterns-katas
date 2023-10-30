export class PaymentProcessor {
  private paymentStrategy: PaymentStrategy;

  constructor(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  setStrategy(paymentStrategy: PaymentStrategy): void {
    this.paymentStrategy = paymentStrategy;
  }

  process(amount: number): string {
    return this.paymentStrategy.processPayment(amount);
  }
}

interface PaymentStrategy {
  processPayment(amount: number): string;
}

export class CreditCardPayment implements PaymentStrategy {
  processPayment(amount: number): string {
    return `Credit card payment in 3 monthly installments of $${amount / 3} each one.`;
  }
}

export class PayPalPayment implements PaymentStrategy {
  processPayment(amount: number): string {
    return `A payment of $${amount} will be debited from your PayPal account.`;
  }
}

export class CryptocurrencyPayment implements PaymentStrategy {
  processPayment(amount: number): string {
    return `A payment of $${amount} will be paid with Bitcoin.`;
  }
}

const paymentContext = new PaymentProcessor(new CreditCardPayment());
const paymentAmount = 1800;
paymentContext.process(paymentAmount); // Output: Credit card payment in 3 monthly installments of $600 each one.
paymentContext.setStrategy(new CryptocurrencyPayment());
paymentContext.process(paymentAmount); // Output: A payment of $1800 will be paid with Bitcoin.
