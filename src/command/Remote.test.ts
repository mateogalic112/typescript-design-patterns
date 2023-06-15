import { Remote } from "./Remote";
import { Television } from "./Television";
import {
  ToggleCommand,
  VolumeDownCommand,
  VolumeUpCommand,
} from "./TelevisionCommands";

describe("Remote functionality", () => {
  let television: Television;
  let remote: Remote;

  beforeEach(() => {
    television = new Television();
    const toggleCommand = new ToggleCommand(television);
    const volumeUpCommand = new VolumeUpCommand(television);
    const volumeDownCommand = new VolumeDownCommand(television);

    remote = new Remote(toggleCommand, volumeUpCommand, volumeDownCommand);
    remote.redButtonClick();
  });

  test("Volume functionality", () => {
    expect(television.isOn).toBe(true);
    expect(television.volume).toBe(0);

    for (let i = 0; i < 50; ++i) {
      remote.volumeUpButtonClick();
    }
    expect(television.volume).toBe(50);

    for (let i = 0; i < 100; ++i) {
      remote.volumeUpButtonClick();
    }
    expect(television.volume).toBe(100);

    for (let i = 0; i < 50; ++i) {
      remote.volumeDownButtonClick();
    }
    expect(television.volume).toBe(50);

    for (let i = 0; i < 150; ++i) {
      remote.volumeDownButtonClick();
    }
    expect(television.volume).toBe(0);
  });
});
