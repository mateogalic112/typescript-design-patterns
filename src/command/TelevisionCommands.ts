import { Television } from "./Television";
import { Command } from "./types";

export class ToggleCommand implements Command {
  constructor(private readonly television: Television) {}

  execute() {
    this.television.toggle();
  }
}

const VOLUME_STEP = 1;
export class VolumeUpCommand implements Command {
  constructor(private readonly television: Television) {}

  execute() {
    this.television.volumeUp(VOLUME_STEP);
  }
}

export class VolumeDownCommand implements Command {
  constructor(private readonly television: Television) {}

  execute() {
    this.television.volumeDown(VOLUME_STEP);
  }
}
