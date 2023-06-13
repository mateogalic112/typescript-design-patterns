import { HandleArgs, Handler } from "./types";

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
