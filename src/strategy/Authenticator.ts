import { AuthStrategy } from "./types";

export class Authenticator {
  private authStrategy: AuthStrategy;

  constructor(authStrategy: AuthStrategy) {
    this.authStrategy = authStrategy;
  }

  authenticate(args: string[]) {
    return this.authStrategy.authenticate(args);
  }
}
