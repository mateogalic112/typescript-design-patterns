import { AuthStrategy } from "./Authenticator";

export class TwitterStrategy implements AuthStrategy {
  authenticate(args: [string]) {
    const [token] = args;
    if (token === "tw123") {
      console.log("Twitter login successful");
      return true;
    }
    console.log("Twitter login failed");
    return false;
  }
}

export class LocalStrategy implements AuthStrategy {
  authenticate(args: [string, string]) {
    const [username, password] = args;
    if (username === "matteoo.eth" && password === "eth") {
      console.log("Local login successful");
      return true;
    }
    console.log("Local login failed");
    return false;
  }
}
