import { Remote, RemoteControls } from "./Remote";
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
    remote = new Remote();
  });

  test("Toggle functionality", () => {
    expect(TV.isOn).toBe(false);
    remote.execute(RemoteControls.TOGGLE);
    // Remote command is not registered, so TV state should not change
    expect(TV.isOn).toBe(false);

    remote.register(RemoteControls.TOGGLE, new ToggleCommand(TV));
    remote.execute(RemoteControls.TOGGLE);
    expect(TV.isOn).toBe(true);

    remote.execute(RemoteControls.TOGGLE);
    expect(TV.isOn).toBe(false);
  });

  test("TV full functionality", () => {
    expect(TV.isOn).toBe(false);
    expect(TV.volume).toBe(0);

    remote.register(RemoteControls.TOGGLE, new ToggleCommand(TV));
    remote.execute(RemoteControls.TOGGLE);
    expect(TV.isOn).toBe(true);

    remote.register(RemoteControls.VOLUME_UP, new VolumeUpCommand(TV));
    remote.register(RemoteControls.VOLUME_DOWN, new VolumeDownCommand(TV));

    for (let i = 0; i < 50; ++i) {
      remote.execute(RemoteControls.VOLUME_UP);
    }
    expect(TV.volume).toBe(50);

    // Volume should not go above 100
    for (let i = 0; i < 100; ++i) {
      remote.execute(RemoteControls.VOLUME_UP);
    }
    expect(TV.volume).toBe(100);

    for (let i = 0; i < 50; ++i) {
      remote.execute(RemoteControls.VOLUME_DOWN);
    }
    expect(TV.volume).toBe(50);

    // Volume should not go below 0
    for (let i = 0; i < 150; ++i) {
      remote.execute(RemoteControls.VOLUME_DOWN);
    }
    expect(TV.volume).toBe(0);
  });
});
