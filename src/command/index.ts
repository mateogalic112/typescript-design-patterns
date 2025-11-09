import { Remote } from "./Remote";
import { Television } from "./Television";
import {
  ToggleCommand,
  VolumeDownCommand,
  VolumeUpCommand,
} from "./TelevisionCommands";

function main() {
  const TV = new Television();

  const remote = new Remote(TV);

  console.log("Television state:", TV.getIsOn() ? "On" : "Off");
  remote.execute(new ToggleCommand());
  console.log("Television state:", TV.getIsOn() ? "On" : "Off");

  for (let i = 0; i < 50; ++i) {
    remote.execute(new VolumeUpCommand());
  }
  console.log("Television volume:", TV.getVolume());

  for (let i = 0; i < 20; ++i) {
    remote.execute(new VolumeDownCommand());
  }
  console.log("Television volume:", TV.getVolume());
}

main();
