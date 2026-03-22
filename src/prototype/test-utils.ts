import { Sniper } from "./Sniper";

export const noOp = () => {};

export const createSniper = (
  overrides?: Partial<{ speed: number; strength: number; range: number }>
) =>
  new Sniper({ speed: 5, strength: 10, range: 250, init: noOp, ...overrides });
