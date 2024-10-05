import { Command } from "./TelevisionCommands";

export enum RemoteControls {
  TOGGLE = "toggle",
  VOLUME_UP = "volumeUp",
  VOLUME_DOWN = "volumeDown",
}

export class Remote {
  constructor(
    private commands: Partial<Record<RemoteControls, Command>> = {}
  ) {}

  register(commandName: RemoteControls, command: Command): void {
    this.commands[commandName] = command;
  }

  execute(commandName: RemoteControls): void {
    if (commandName in this.commands) {
      this.commands[commandName]!.execute();
    }
  }
}
