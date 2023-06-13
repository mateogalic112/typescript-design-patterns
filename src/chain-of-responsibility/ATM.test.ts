import { ATM } from "./ATM";
import { Bill } from "./types";

describe("ATM functionality", () => {
  let atm: ATM;

  beforeEach(() => {
    atm = new ATM();

    const bills = {
      [Bill.FIFTY]: 2,
      [Bill.TWENTY]: 5,
      [Bill.TEN]: 10,
    };

    atm.fill(bills);
  });

  describe("Withdraw funds", () => {
    test("Revert if withdraw amount is greater than total ATM amount", () => {
      const withdrawAmount = 310;
      expect(atm.getTotal()).toBe(300);

      try {
        atm.withdraw(withdrawAmount);
      } catch (e: unknown) {
        expect((e as Error).message).toBe("ATM insufficient funds");
      }
    });

    test("Revert if withdraw amount is not multipler of 10", () => {
      const withdrawAmount = 16;
      try {
        atm.withdraw(withdrawAmount);
      } catch (e: unknown) {
        expect((e as Error).message).toBe("Invalid input amount");
      }
    });

    test("Successful withdrawals return proper actions", () => {
      expect(atm.getTotal()).toBe(300);

      const withdrawAmount = 130;
      const result = atm.withdraw(withdrawAmount);
      expect(result).toMatchObject([
        `Dispensing 2 £50 bill`,
        `Dispensing 1 £20 bill`,
        `Dispensing 1 £10 bill`,
      ]);

      const withdrawAmount2 = 100;
      const result2 = atm.withdraw(withdrawAmount2);
      expect(result2).toMatchObject([
        `Dispensing 4 £20 bill`,
        `Dispensing 2 £10 bill`,
      ]);

      const withdrawAmount3 = 60;
      const result3 = atm.withdraw(withdrawAmount3);
      expect(result3).toMatchObject([`Dispensing 6 £10 bill`]);

      expect(atm.getTotal()).toBe(10);
    });
  });
});
