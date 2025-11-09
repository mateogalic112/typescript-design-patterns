import { Device } from "./Television";
import { Command } from "./TelevisionCommands";

export class Remote {
  constructor(private readonly device: Device) {
    this.device = device;
  }

  execute(command: Command) {
    command.execute(this.device);
  }
}
