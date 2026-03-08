import { ATM } from "./ATM";
import { Bill } from "./DollarBill";

function main() {
  const atm = new ATM();

  atm.fill({
    [Bill.FIFTY]: 1,
    [Bill.TWENTY]: 100,
    [Bill.TEN]: 100,
  });

  try {
    console.log({ atmPreTotal: atm.getTotalAmount() });
    console.log({ result: atm.withdraw(330) });
    console.log({ atmPostTotal: atm.getTotalAmount() });
  } catch (e) {
    console.log(e);
  }
}

main();
