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
    if (amount > this.totalAmount) {
      throw new Error("ATM insufficient funds");
    }

    if (amount < Bill.TEN || amount % Bill.TEN !== 0) {
      throw new Error("Invalid input amount");
    }

    // process the request
    const result = this.fiftyDollarBill.handle({ amount, actions: [] });
    this.totalAmount -= amount;

    return result;
  }

  public getTotal() {
    return this.totalAmount;
  }
}
