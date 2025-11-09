import { Remote } from "./Remote";
import { Television } from "./Television";
import {
  ToggleCommand,
  VolumeDownCommand,
  VolumeUpCommand,
} from "./TelevisionCommands";

describe("Remote functionality", () => {
  let TV: Television;
  let remote: Remote;

  beforeEach(() => {
    TV = new Television();
    remote = new Remote(TV);
  });

  test("Toggle functionality", () => {
    expect(TV.getIsOn()).toBe(false);

    remote.execute(new ToggleCommand());
    expect(TV.getIsOn()).toBe(true);

    remote.execute(new ToggleCommand());
    expect(TV.getIsOn()).toBe(false);
  });

  test("TV full functionality", () => {
    expect(TV.getIsOn()).toBe(false);
    expect(TV.getVolume()).toBe(0);

    remote.execute(new ToggleCommand());
    expect(TV.getIsOn()).toBe(true);

    for (let i = 0; i < 50; ++i) {
      remote.execute(new VolumeUpCommand());
    }
    expect(TV.getVolume()).toBe(50);

    // Volume should not go above 100
    for (let i = 0; i < 100; ++i) {
      remote.execute(new VolumeUpCommand());
    }
    expect(TV.getVolume()).toBe(100);

    for (let i = 0; i < 50; ++i) {
      remote.execute(new VolumeDownCommand());
    }
    expect(TV.getVolume()).toBe(50);

    // Volume should not go below 0
    for (let i = 0; i < 150; ++i) {
      remote.execute(new VolumeDownCommand());
    }
    expect(TV.getVolume()).toBe(0);
  });
});
