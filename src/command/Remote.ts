import { Device } from "./Television";

interface Command {
  execute(device: Device): void;
}

export class Remote {
  constructor(private readonly device: Device) {
    this.device = device;
  }

  execute(command: Command) {
    command.execute(this.device);
  }
}

export class ToggleCommand implements Command {
  execute(device: Device) {
    device.toggle();
  }
}

const VOLUME_STEP = 1;
export class VolumeUpCommand implements Command {
  execute(device: Device) {
    device.volumeUp(VOLUME_STEP);
  }
}

export class VolumeDownCommand implements Command {
  execute(device: Device) {
    device.volumeDown(VOLUME_STEP);
  }
}
