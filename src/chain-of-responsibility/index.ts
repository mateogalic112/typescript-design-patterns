import { ATM } from "./ATM";
import { Bill } from "./types";

function main() {
  const atm = new ATM();

  atm.fill({
    [Bill.FIFTY]: 1,
    [Bill.TWENTY]: 100,
    [Bill.TEN]: 100,
  });

  try {
    const atmPreTotal = atm.getTotal();
    console.log({ atmPreTotal });

    const result = atm.withdraw(330);
    console.log({ result });

    const atmPostTotal = atm.getTotal();
    console.log({ atmPostTotal });
  } catch (e) {
    console.log(e);
  }
}

main();
