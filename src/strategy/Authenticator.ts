import { LocalStrategy, TwitterStrategy } from "./Providers";

export interface AuthStrategy {
  authenticate(args: string[]): boolean;
}

export enum AuthProvider {
  TWITTER = "TWITTER",
  LOCAL = "LOCAL",
}

export class Authenticator {
  private strategies: Record<AuthProvider, AuthStrategy> = {
    [AuthProvider.TWITTER]: new TwitterStrategy(),
    [AuthProvider.LOCAL]: new LocalStrategy(),
  };

  authenticate(provider: AuthProvider, args: string[]) {
    if (!this.strategies[provider]) {
      console.error("Authentication policy has not been set!");
      return false;
    }
    return this.strategies[provider].authenticate.apply(null, [args]);
  }
}
