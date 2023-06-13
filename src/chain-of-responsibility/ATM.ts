import { DollarBill } from "./DollarBill";
import { Bill } from "./types";

export class ATM {
  constructor(
    private totalAmount = 0,
    private fiftyDollarBill = new DollarBill(Bill.FIFTY, 0),
    private twentyDollarBill = new DollarBill(Bill.TWENTY, 0),
    private tenDollarBill = new DollarBill(Bill.TEN, 0)
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
    return Object.entries(bills).reduce((total, bill) => {
      const billValue: number = +bill[0];
      const billQuantity: number = bill[1];

      return total + billValue * billQuantity;
    }, this.totalAmount);
  }

  public withdraw(amount: number) {
    if (amount > this.totalAmount) {
      throw new Error("ATM insufficient funds");
    }

    if (amount < Bill.TEN || amount % Bill.TEN != 0) {
      throw new Error("Invalid input amount");
    }

    // process the request
    const result = this.fiftyDollarBill.handle({ amount, actions: [] });
    this.setTotal(this.totalAmount - amount);
    return result;
  }

  public getTotal() {
    return this.totalAmount;
  }

  private setTotal(newTotal: number) {
    this.totalAmount = newTotal;
  }
}
