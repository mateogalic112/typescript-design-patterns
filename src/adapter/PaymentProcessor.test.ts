import { PaymentProcessor } from "./PaymentProcessor";
import { StripeAdapter, Stripe } from "./Stripe";
import { PayPalAdapter, PayPal } from "./PayPal";

describe("PaymentProcessor functionality", () => {
  describe("Stripe processor", () => {
    let stripeProcessor: PaymentProcessor;

    beforeEach(() => {
      stripeProcessor = new StripeAdapter(new Stripe());
    });

    test("should create a valid stripe payment", () => {
      stripeProcessor.pay(100);
      expect(stripeProcessor.pay(100)).toMatchObject({
        transactionId: "stripe:2",
      });
    });
  });

  describe("PayPal processor", () => {
    let paypalProcessor: PaymentProcessor;

    beforeEach(() => {
      paypalProcessor = new PayPalAdapter(new PayPal());
    });

    test("should create a valid paypal payment", () => {
      paypalProcessor.pay(100);
      expect(paypalProcessor.pay(100)).toMatchObject({
        transactionId: "paypal:2",
      });
    });
  });
});
