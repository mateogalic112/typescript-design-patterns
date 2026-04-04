import { PaymentProcessor } from "./PaymentProcessor";

export class PayPal {
  sendPayment(amount: number): void {
    console.log(`Paypal sent ${amount}`);
  }
}

export class PayPalAdapter implements PaymentProcessor {
  constructor(private readonly paypal: PayPal) {}

  pay(amount: number): void {
    // PayPal already uses dollars
    this.paypal.sendPayment(amount);
  }
}
