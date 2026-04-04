interface PaymentResult {
  success: boolean;
  transactionId: string;
}

export interface PaymentProcessor {
  pay(amount: number): PaymentResult;
}
