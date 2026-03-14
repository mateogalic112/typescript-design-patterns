import { AuthStrategy } from "./Authenticator";

export class TwitterStrategy implements AuthStrategy {
  authenticate(args: [string]) {
    const [token] = args;
    if (token === "tw123") {
      return { username: "matteoo.eth" };
    }
    return null;
  }
}

export class LocalStrategy implements AuthStrategy {
  authenticate(args: [string, string]) {
    const [username, password] = args;
    if (username === "matteoo.eth" && password === "eth") {
      return { username: "matteoo.eth" };
    }
    return null;
  }
}
