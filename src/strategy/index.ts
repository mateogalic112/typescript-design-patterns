import { AuthProvider, Authenticator } from "./Authenticator";

function main() {
  const auth = new Authenticator();

  function login(provider: AuthProvider, ...args: string[]) {
    return auth.authenticate(provider, args);
  }

  login(AuthProvider.TWITTER, "token123");
  login(AuthProvider.LOCAL, "matteoo.eth", "eth");
}

main();
