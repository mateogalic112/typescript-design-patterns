import { AmountHandler, HandleArgs } from "./AmountHandler";

export enum Bill {
  TEN = 10,
  TWENTY = 20,
  FIFTY = 50,
}

export class DollarBill extends AmountHandler {
  constructor(
    private readonly bill: Bill,
    private quantity: number
  ) {
    super();
  }

  handle({ amount, actions }: HandleArgs) {
    if (this.quantity === 0 || amount < this.bill) {
      return super.handle({ amount, actions });
    }

    const requiredBillCount = Math.floor(amount / this.bill);
    const dispenseAmount = Math.min(requiredBillCount, this.quantity);

    const newActions = [...actions, this.logDispense(dispenseAmount)];

    if (requiredBillCount > this.quantity) {
      const remainder = amount - this.quantity * this.bill;
      this.quantity = 0;
      return super.handle({
        amount: remainder,
        actions: newActions,
      });
    }

    this.quantity -= requiredBillCount;
    const remainder = amount % this.bill;
    if (remainder !== 0) {
      return super.handle({
        amount: remainder,
        actions: newActions,
      });
    }
    return newActions;
  }

  setQuantity(qtyAmount: number) {
    this.quantity = qtyAmount;
  }

  getQuantity() {
    return this.quantity;
  }

  increaseQuantity(by: number) {
    this.quantity = this.quantity + by;
  }

  getValue(): number {
    return this.bill;
  }

  private logDispense(amount: number) {
    return `Dispensing ${amount} $${this.bill} bill`;
  }
}
