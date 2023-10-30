import { PaymentProcessor, CreditCardPayment, PayPalPayment, CryptocurrencyPayment } from './StrategyKata';

describe('Strategy Pattern - Payment Processor', () => {
  test('Credit Card Payment should be processed correctly', () => {
    const paymentProcessor = new PaymentProcessor(new CreditCardPayment());
    const paymentDetails = 120;
    const result = paymentProcessor.process(paymentDetails);
    expect(result).toEqual(`Credit card payment in 3 monthly installments of $${paymentDetails / 3} each one.`);
  });

  test('PayPal Payment should be processed correctly', () => {
    const paymentProcessor = new PaymentProcessor(new PayPalPayment());
    const paymentDetails = 50;
    const result = paymentProcessor.process(paymentDetails);
    expect(result).toEqual(`A payment of $${paymentDetails} will be debited from your PayPal account.`);
  });

  test('CryptocurrencyPayment Payment should be processed correctly', () => {
    const paymentProcessor = new PaymentProcessor(new CryptocurrencyPayment());
    const paymentDetails = 150;
    const result = paymentProcessor.process(paymentDetails);
    expect(result).toEqual(`A payment of $${paymentDetails} will be paid with Bitcoin.`);
  });
});
