import { Authenticator } from "./Authenticator";
import { LocalStrategy, TwitterStrategy } from "./Providers";

function main() {
  const twitterLogin = new Authenticator(new TwitterStrategy());
  twitterLogin.authenticate(["token123"]);

  const localLogin = new Authenticator(new LocalStrategy());
  localLogin.authenticate(["matteoo.eth", "eth"]);
}

main();
