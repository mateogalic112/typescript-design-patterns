import { PaymentProcessor } from "./PaymentProcessor";

export class Stripe {
  makePayment(amountInCents: number): void {
    console.log(`Stripe charged ${amountInCents / 100}`);
  }
}

export class StripeAdapter implements PaymentProcessor {
  constructor(private readonly stripe: Stripe) {}

  pay(amount: number): void {
    // Stripe expects cents, convert dollars → cents
    this.stripe.makePayment(amount * 100);
  }
}
