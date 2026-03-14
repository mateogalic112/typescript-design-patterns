interface User {
  username: string;
}

export interface AuthStrategy {
  authenticate(args: string[]): User | null;
}

export class Authenticator {
  private authStrategy: AuthStrategy;

  constructor(authStrategy: AuthStrategy) {
    this.authStrategy = authStrategy;
  }

  authenticate(args: string[]) {
    return this.authStrategy.authenticate.apply(null, [args]);
  }
}
