import { AmountHandler } from "./AmountHandler";
import { Bill, HandleArgs } from "./types";

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

    const requiredBillCount = Math.floor(amount / this.bill);
    if (requiredBillCount > this.quantity) {
      return this.processWithdrawWithInsufficientBills({ amount, actions });
    }

    return this.processWithdraw({ amount, actions, requiredBillCount });
  }

  public setQuantity(qtyAmount: number) {
    this.quantity = qtyAmount;
  }

  private processWithdrawWithInsufficientBills({
    amount,
    actions,
  }: HandleArgs) {
    const newAction = `Dispensing ${this.quantity} £${this.bill} bill`;
    const newActions = [...actions, newAction];

    const remainder = amount - this.quantity * this.bill;

    this.setQuantity(0);
    return super.handle({
      amount: remainder,
      actions: newActions,
    });
  }

  private processWithdraw({
    amount,
    actions,
    requiredBillCount,
  }: HandleArgs & { requiredBillCount: number }) {
    const newAction = `Dispensing ${requiredBillCount} £${this.bill} bill`;
    const newActions = [...actions, newAction];

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
