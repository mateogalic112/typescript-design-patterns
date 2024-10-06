import { Authenticator } from "./Authenticator";
import { LocalStrategy, TwitterStrategy } from "./Providers";

describe("Authenticator functionality", () => {
  describe("Local login strategy", () => {
    const localLogin = new Authenticator(new LocalStrategy());
    test("Should fail if username or password not match", () => {
      expect(localLogin.authenticate(["matteoo.eth", "123"])).toBeFalsy();

      expect(localLogin.authenticate(["matt.eth", "eth"])).toBeFalsy();
    });

    test("Should succeed when username and password are correct", () => {
      expect(localLogin.authenticate(["matteoo.eth", "eth"])).toBeTruthy();
    });
  });

  describe("Twitter login strategy", () => {
    const twitterLogin = new Authenticator(new TwitterStrategy());

    test("Should fail if token do not match", () => {
      expect(twitterLogin.authenticate(["faketoken"])).toBeFalsy();
    });

    test("Should succeed when token is correct", () => {
      expect(twitterLogin.authenticate(["tw123"])).toBeTruthy();
    });
  });
});
