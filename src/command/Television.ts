export class Television {
  private readonly MAX_VOLUME = 100;
  private readonly MIN_VOLUME = 0;

  constructor(public isOn: boolean = false, public volume: number = 0) {}

  toggle() {
    this.isOn = !this.isOn;
  }

  volumeUp(amount: number) {
    if (!this.isOn) return;
    this.volume = Math.min(this.MAX_VOLUME, this.volume + amount);
  }

  volumeDown(amount: number) {
    if (amount < 0 || !this.isOn) return;
    this.volume = Math.max(this.MIN_VOLUME, this.volume - amount);
  }
}
