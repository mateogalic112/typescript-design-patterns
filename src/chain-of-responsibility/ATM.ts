import { Bill, DollarBill } from "./DollarBill";

export class ATM {
  constructor(
    private fiftyDollarBill = new DollarBill(Bill.FIFTY, 0),
    private twentyDollarBill = new DollarBill(Bill.TWENTY, 0),
    private tenDollarBill = new DollarBill(Bill.TEN, 0),
    private totalAmount = 0
  ) {
    this.fiftyDollarBill
      .setNext(this.twentyDollarBill)
      .setNext(this.tenDollarBill);
  }

  public fill(bills: Record<Bill, number>) {
    this.fiftyDollarBill.setQuantity(bills[Bill.FIFTY]);
    this.twentyDollarBill.setQuantity(bills[Bill.TWENTY]);
    this.tenDollarBill.setQuantity(bills[Bill.TEN]);
    this.totalAmount = this.calculateTotal(bills);
  }

  private calculateTotal(bills: Record<Bill, number>) {
    return Object.entries(bills).reduce((total, [bill, quantity]) => {
      return total + +bill * quantity;
    }, 0);
  }

  public withdraw(amount: number) {
    if (amount < Bill.TEN) {
      throw new Error(this.errors.WITHDRAW_INPUT_TOO_SMALL);
    }

    if (amount % Bill.TEN !== 0) {
      throw new Error(this.errors.WITHDRAW_INPUT_WRONG_FORMAT);
    }

    if (amount > this.totalAmount) {
      throw new Error(this.errors.INSUFFICIENT_FUNDS);
    }

    // process the request
    const result = this.fiftyDollarBill.handle({
      amount,
      actions: [],
    });
    this.totalAmount -= amount;

    return result;
  }

  public getTotal() {
    return this.totalAmount;
  }

  public errors = {
    WITHDRAW_INPUT_TOO_SMALL: `Input amount too small, should be at least ${Bill.TEN}`,
    WITHDRAW_INPUT_WRONG_FORMAT: "Invalid input format",
    INSUFFICIENT_FUNDS:
      "ATM does not have enough funds to process this request",
  };
}
