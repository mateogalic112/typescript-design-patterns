import { MultimediaDevice } from "./Device";

export class Television implements MultimediaDevice {
  private readonly MAX_VOLUME = 100;
  private readonly MIN_VOLUME = 0;

  constructor(
    private isOn: boolean = false,
    private volume: number = 0
  ) {}

  getIsOn() {
    return this.isOn;
  }

  getVolume() {
    return this.volume;
  }

  toggle() {
    this.isOn = !this.isOn;
  }

  volumeUp(amount: number) {
    if (!this.isOn) return;
    this.volume = Math.min(this.MAX_VOLUME, this.volume + amount);
  }

  volumeDown(amount: number) {
    if (!this.isOn) return;
    this.volume = Math.max(this.MIN_VOLUME, this.volume - amount);
  }
}
