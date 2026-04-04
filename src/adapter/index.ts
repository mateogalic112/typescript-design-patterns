import { paypalAdapter } from "./PayPal";
import { PaymentProcessor } from "./PaymentProcessor";
import { stripeAdapter } from "./Stripe";

function checkout(processor: PaymentProcessor) {
  processor.pay(100);
}

function main() {
  checkout(stripeAdapter);
  checkout(paypalAdapter);
}

main();
