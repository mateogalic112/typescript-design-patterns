import { MultimediaDevice } from "./Device";

interface Command {
  execute(device: MultimediaDevice): void;
}

export class Remote {
  constructor(private readonly device: MultimediaDevice) {
    this.device = device;
  }

  execute(command: Command) {
    command.execute(this.device);
  }
}

export class ToggleCommand implements Command {
  execute(device: MultimediaDevice) {
    device.toggle();
  }
}

const VOLUME_STEP = 1;
export class VolumeUpCommand implements Command {
  execute(device: MultimediaDevice) {
    device.volumeUp(VOLUME_STEP);
  }
}

export class VolumeDownCommand implements Command {
  execute(device: MultimediaDevice) {
    device.volumeDown(VOLUME_STEP);
  }
}
