import { Command } from "./types";

export class Remote {
  constructor(
    private toggleCommand: Command,
    private volumeUpCommand: Command,
    private volumeDownCommand: Command
  ) {}

  redButtonClick() {
    this.toggleCommand.execute();
  }

  volumeUpButtonClick() {
    this.volumeUpCommand.execute();
  }

  volumeDownButtonClick() {
    this.volumeDownCommand.execute();
  }
}
