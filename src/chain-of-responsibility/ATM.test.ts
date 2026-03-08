import { ATM } from "./ATM";
import { Bill } from "./DollarBill";

describe("ATM functionality", () => {
  let atm: ATM;

  const bills = {
    [Bill.FIFTY]: 2,
    [Bill.TWENTY]: 5,
    [Bill.TEN]: 10,
  };

  beforeEach(() => {
    atm = new ATM();
    atm.fill(bills);
  });

  describe("Withdraw funds", () => {
    test("should revert if withdraw amount is greater than total ATM amount", () => {
      const withdrawAmount = 310;
      expect(atm.getTotal()).toBe(300);

      try {
        atm.withdraw(withdrawAmount);
      } catch (e: unknown) {
        expect((e as Error).message).toBe(atm.errors.INSUFFICIENT_FUNDS);
      }
    });

    test("should revert if withdraw amount is 0", () => {
      const withdrawAmount = 0;

      try {
        atm.withdraw(withdrawAmount);
      } catch (e: unknown) {
        expect((e as Error).message).toBe(atm.errors.WITHDRAW_INPUT_TOO_SMALL);
      }
    });

    test("should revert if withdraw amount is negative", () => {
      const withdrawAmount = -10;

      try {
        atm.withdraw(withdrawAmount);
      } catch (e: unknown) {
        expect((e as Error).message).toBe(atm.errors.WITHDRAW_INPUT_TOO_SMALL);
      }
    });

    test("Revert if withdraw amount is not multipler of 10", () => {
      const withdrawAmount = 16;
      try {
        atm.withdraw(withdrawAmount);
      } catch (e: unknown) {
        expect((e as Error).message).toBe(
          atm.errors.WITHDRAW_INPUT_WRONG_FORMAT
        );
      }
    });

    test("Revert if amount cannot be withdrawn with current bills", () => {
      atm.withdraw(300);
      expect(atm.getTotal()).toBe(0);

      const bills = {
        [Bill.FIFTY]: 2,
        [Bill.TWENTY]: 0,
        [Bill.TEN]: 0,
      };
      atm.fill(bills);
      const withdrawAmount = 90;

      try {
        atm.withdraw(withdrawAmount);
      } catch (e: unknown) {
        expect((e as Error).message).toBe("Could not process request");
      }
    });

    test("Successful withdrawals return proper actions", () => {
      expect(atm.getTotal()).toBe(300);

      const withdrawAmount = 130;
      const result = atm.withdraw(withdrawAmount);
      expect(result).toMatchObject([
        `Dispensing 2 $50 bill`,
        `Dispensing 1 $20 bill`,
        `Dispensing 1 $10 bill`,
      ]);

      const withdrawAmount2 = 100;
      const result2 = atm.withdraw(withdrawAmount2);
      expect(result2).toMatchObject([
        `Dispensing 4 $20 bill`,
        `Dispensing 2 $10 bill`,
      ]);

      const withdrawAmount3 = 60;
      const result3 = atm.withdraw(withdrawAmount3);
      expect(result3).toMatchObject([`Dispensing 6 $10 bill`]);

      expect(atm.getTotal()).toBe(10);
    });
  });
});
