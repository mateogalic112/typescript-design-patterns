import { Remote } from "./Remote";
import { Television } from "./Television";
import {
  ToggleCommand,
  VolumeDownCommand,
  VolumeUpCommand,
} from "./TelevisionCommands";

function main() {
  const television = new Television();
  const toggleCommand = new ToggleCommand(television);
  const volumeUpCommand = new VolumeUpCommand(television);
  const volumeDownCommand = new VolumeDownCommand(television);

  const remote = new Remote(toggleCommand, volumeUpCommand, volumeDownCommand);

  console.log("Television state:", television.isOn);
  remote.redButtonClick();
  console.log("Television state:", television.isOn);

  for (let i = 0; i < 50; ++i) {
    remote.volumeUpButtonClick();
  }
  console.log("Television volume:", television.volume);
}

main();
