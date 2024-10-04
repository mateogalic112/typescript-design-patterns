export type HandleArgs = {
  amount: number;
  actions: string[];
};

interface Handler {
  setNext(handler: Handler): Handler;
  handle(args: HandleArgs): void;
}

export abstract class AmountHandler implements Handler {
  constructor(protected nextHandler: Handler | null = null) {}

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return this.nextHandler;
  }

  public handle({ amount, actions }: HandleArgs) {
    if (this.nextHandler) {
      return this.nextHandler.handle({ amount, actions });
    }
    throw new Error("Could not process request");
  }
}
