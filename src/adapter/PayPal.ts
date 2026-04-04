import { PaymentProcessor } from "./PaymentProcessor";

class PayPal {
  sendPayment(amount: number): void {
    console.log(`Paypal sent ${amount}`);
  }
}

class PayPalAdapter implements PaymentProcessor {
  constructor(private readonly paypal: PayPal) {}

  pay(amount: number): void {
    // PayPal already uses dollars
    this.paypal.sendPayment(amount);
  }
}

export const paypalAdapter = new PayPalAdapter(new PayPal());
