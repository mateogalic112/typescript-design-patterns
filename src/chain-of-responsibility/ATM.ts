import { Bill, DollarBill } from "./DollarBill";

export class ATM {
  constructor(
    private fiftyDollarBill = new DollarBill(Bill.FIFTY, 0),
    private twentyDollarBill = new DollarBill(Bill.TWENTY, 0),
    private tenDollarBill = new DollarBill(Bill.TEN, 0)
  ) {
    this.fiftyDollarBill
      .setNext(this.twentyDollarBill)
      .setNext(this.tenDollarBill);
  }

  fill(bills: Record<Bill, number>) {
    Object.entries(bills).forEach(([bill, newAmount]) => {
      switch (bill) {
        case Bill.FIFTY.toString():
          this.fiftyDollarBill.increaseQuantity(newAmount);
          break;
        case Bill.TWENTY.toString():
          this.twentyDollarBill.increaseQuantity(newAmount);
          break;
        case Bill.TEN.toString():
          this.tenDollarBill.increaseQuantity(newAmount);
          break;
        default:
          throw new Error(this.errors.UNSUPPORTED_BILL(bill));
      }
    });
  }

  getTotalAmount() {
    return [
      this.fiftyDollarBill,
      this.twentyDollarBill,
      this.tenDollarBill,
    ].reduce((total, bill) => {
      return total + bill.getValue() * bill.getQuantity();
    }, 0);
  }

  public withdraw(amount: number) {
    if (amount < Bill.TEN) {
      throw new Error(this.errors.WITHDRAW_INPUT_TOO_SMALL);
    }
    if (amount % Bill.TEN !== 0) {
      throw new Error(this.errors.WITHDRAW_INPUT_WRONG_FORMAT);
    }
    if (amount > this.getTotalAmount()) {
      throw new Error(this.errors.INSUFFICIENT_FUNDS);
    }

    return this.fiftyDollarBill.handle({
      amount,
      actions: [],
    });
  }

  public errors = {
    WITHDRAW_INPUT_TOO_SMALL: `Input amount too small, should be at least ${Bill.TEN}`,
    WITHDRAW_INPUT_WRONG_FORMAT: "Invalid input format",
    INSUFFICIENT_FUNDS:
      "ATM does not have enough funds to process this request",
    UNSUPPORTED_BILL: (bill: string) => `Bill ${bill} is not supported`,
  };
}
