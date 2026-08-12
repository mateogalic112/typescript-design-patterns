import { PaymentProcessor } from "./PaymentProcessor";
import { PayPal, PayPalAdapter } from "./processors/PayPal";
import { Stripe, StripeAdapter } from "./processors/Stripe";

function checkout(processor: PaymentProcessor) {
  processor.pay(100);
}

function main() {
  checkout(new StripeAdapter(new Stripe()));
  checkout(new PayPalAdapter(new PayPal()));
}

main();
