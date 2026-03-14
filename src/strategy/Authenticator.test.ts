import { Authenticator } from "./Authenticator";
import { LocalStrategy, TwitterStrategy } from "./Providers";

describe("Authenticator functionality", () => {
  describe("Local login strategy", () => {
    const localLogin = new Authenticator(new LocalStrategy());

    test("should fail if username is not correct", () => {
      expect(localLogin.authenticate(["matt.eth", "eth"])).toBeNull();
    });
    test("should fail if password in not correct", () => {
      expect(localLogin.authenticate(["matteoo.eth", "123"])).toBeNull();
    });

    test("should succeed when username and password are correct", () => {
      expect(localLogin.authenticate(["matteoo.eth", "eth"])).toMatchObject({
        username: "matteoo.eth",
      });
    });
  });

  describe("Twitter login strategy", () => {
    const twitterLogin = new Authenticator(new TwitterStrategy());

    test("should fail if token do not match", () => {
      expect(twitterLogin.authenticate(["faketoken"])).toBeFalsy();
    });

    test("should succeed when token is correct", () => {
      expect(twitterLogin.authenticate(["tw123"])).toMatchObject({
        username: "matteoo.eth",
      });
    });
  });
});
