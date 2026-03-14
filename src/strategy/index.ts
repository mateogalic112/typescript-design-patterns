import { Authenticator } from "./Authenticator";
import { LocalStrategy, TwitterStrategy } from "./Providers";

function main() {
  const twitterLogin = new Authenticator(new TwitterStrategy());
  const twitterUser = twitterLogin.authenticate(["invalid_token"]); // null
  console.log(twitterUser);

  const localLogin = new Authenticator(new LocalStrategy());
  const localUser = localLogin.authenticate(["matteoo.eth", "eth"]); // { username: "matteoo.eth" }
  console.log(localUser);
}

main();
