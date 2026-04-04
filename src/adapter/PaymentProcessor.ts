export interface PaymentProcessor {
  pay(amount: number): void;
}
