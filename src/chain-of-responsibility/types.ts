export enum Bill {
  TEN = 10,
  TWENTY = 20,
  FIFTY = 50,
}

export interface Handler {
  setNext(handler: Handler): Handler;
  handle({ amount, actions }: HandleArgs): string[] | void;
}

export type HandleArgs = {
  amount: number;
  actions: string[];
};
