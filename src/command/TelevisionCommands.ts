import { Device } from "./Television";

export interface Command {
  execute(device: Device): void;
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
