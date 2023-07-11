import { AuthProvider, Authenticator } from "./Authenticator";

describe("Authenticator functionality", () => {
  let authenticator: Authenticator;

  beforeEach(() => {
    authenticator = new Authenticator();
  });

  describe("Local login strategy", () => {
    test("Should fail if username or password not match", () => {
      expect(
        authenticator.authenticate(AuthProvider.LOCAL, ["matteoo.eth", "123"])
      ).toBeFalsy();

      expect(
        authenticator.authenticate(AuthProvider.LOCAL, ["matt.eth", "eth"])
      ).toBeFalsy();
    });

    test("Should succeed when username and password are correct", () => {
      expect(
        authenticator.authenticate(AuthProvider.LOCAL, ["matteoo.eth", "eth"])
      ).toBeTruthy();
    });
  });

  describe("Twitter login strategy", () => {
    test("Should fail if token do not match", () => {
      expect(
        authenticator.authenticate(AuthProvider.TWITTER, ["faketoken"])
      ).toBeFalsy();
    });

    test("Should succeed when token is correct", () => {
      expect(
        authenticator.authenticate(AuthProvider.TWITTER, ["tw123"])
      ).toBeTruthy();
    });
  });
});
