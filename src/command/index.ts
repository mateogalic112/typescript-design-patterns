import { Remote, RemoteControls } from "./Remote";
import { Television } from "./Television";
import {
  ToggleCommand,
  VolumeDownCommand,
  VolumeUpCommand,
} from "./TelevisionCommands";

function main() {
  const TV = new Television();

  const remote = new Remote();
  remote.register(RemoteControls.TOGGLE, new ToggleCommand(TV));
  remote.register(RemoteControls.VOLUME_UP, new VolumeUpCommand(TV));
  remote.register(RemoteControls.VOLUME_DOWN, new VolumeDownCommand(TV));

  console.log("Television state:", TV.isOn ? "On" : "Off");
  remote.execute(RemoteControls.TOGGLE);
  console.log("Television state:", TV.isOn ? "On" : "Off");

  for (let i = 0; i < 50; ++i) {
    remote.execute(RemoteControls.VOLUME_UP);
  }
  console.log("Television volume:", TV.volume);
}

main();
