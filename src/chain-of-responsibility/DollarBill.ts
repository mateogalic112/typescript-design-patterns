import { AmountHandler, HandleArgs } from "./AmountHandler";

export enum Bill {
  TEN = 10,
  TWENTY = 20,
  FIFTY = 50,
}
export class DollarBill extends AmountHandler {
  constructor(private readonly bill: Bill, private quantity: number) {
    super();
  }

  handle({ amount, actions }: HandleArgs) {
    if (this.quantity === 0) {
      return super.handle({ amount, actions });
    }

    if (amount < this.bill) {
      return super.handle({ amount, actions });
    }

    return this.processWithdraw({ amount, actions });
  }

  public setQuantity(qtyAmount: number) {
    this.quantity = qtyAmount;
  }

  private processWithdraw({ amount, actions }: HandleArgs) {
    const requiredBillCount = Math.floor(amount / this.bill);
    const dispenseAmount = Math.min(requiredBillCount, this.quantity);

    const newAction = `Dispensing ${dispenseAmount} $${this.bill} bill`;
    const newActions = [...actions, newAction];

    if (requiredBillCount > this.quantity) {
      const remainder = amount - this.quantity * this.bill;
      this.setQuantity(0);
      return super.handle({
        amount: remainder,
        actions: newActions,
      });
    }

    this.setQuantity(this.quantity - requiredBillCount);
    const remainder = amount % this.bill;
    if (remainder !== 0) {
      return super.handle({
        amount: remainder,
        actions: newActions,
      });
    }
    return newActions;
  }
}
