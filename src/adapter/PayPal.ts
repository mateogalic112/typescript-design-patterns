import { PaymentProcessor } from "./PaymentProcessor";

export class PayPal {
  sendPayment(amount: number): void {
    console.log(`Paypal sent ${amount}`);
  }
}

export class PayPalAdapter implements PaymentProcessor {
  private transactionId = 0;

  constructor(private readonly paypal: PayPal) {}

  pay(amount: number) {
    // PayPal already uses dollars
    this.paypal.sendPayment(amount);
    return this.generateTransaction();
  }

  private generateTransaction() {
    this.transactionId++;
    return {
      transactionId: `paypal:${this.transactionId}`,
      success: true,
    };
  }
}
