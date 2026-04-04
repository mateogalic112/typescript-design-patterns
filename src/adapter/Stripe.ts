import { PaymentProcessor } from "./PaymentProcessor";

export class Stripe {
  makePayment(amountInCents: number): void {
    console.log(`Stripe charged ${amountInCents / 100}`);
  }
}

export class StripeAdapter implements PaymentProcessor {
  private transactionId = 0;

  constructor(private readonly stripe: Stripe) {}

  pay(amount: number) {
    // Stripe expects cents, convert dollars → cents
    this.stripe.makePayment(amount * 100);
    return this.generateTransaction();
  }

  private generateTransaction() {
    this.transactionId++;
    return {
      transactionId: `stripe:${this.transactionId}`,
      success: true,
    };
  }
}
