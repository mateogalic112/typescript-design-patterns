interface Device {
  toggle(): void;
}

interface Audio {
  volumeUp(amount: number): void;
  volumeDown(amount: number): void;
}

export interface MultimediaDevice extends Device, Audio {}
