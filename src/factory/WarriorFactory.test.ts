import { WarriorFactory, WarriorType } from "./WarriorFactory";
import { Knight } from "./Knight";
import { Archer } from "./Archer";

describe("WarriorFactory", () => {
  test("should create a Knight when given KNIGHT type", () => {
    const warrior = WarriorFactory.createWarrior(WarriorType.KNIGHT);
    expect(warrior).toBeInstanceOf(Knight);
    expect(warrior.getName()).toBe("Knight");
  });

  test("should create an Archer when given ARCHER type", () => {
    const warrior = WarriorFactory.createWarrior(WarriorType.ARCHER);
    expect(warrior).toBeInstanceOf(Archer);
    expect(warrior.getName()).toBe("Archer");
  });

  test("should create warriors with correct initial health", () => {
    const knight = WarriorFactory.createWarrior(WarriorType.KNIGHT);
    const archer = WarriorFactory.createWarrior(WarriorType.ARCHER);
    expect(knight.getHealth()).toBe(1000);
    expect(archer.getHealth()).toBe(1000);
  });

  test("should throw for an unsupported warrior type", () => {
    const fakeWarriorType = "Orc" as WarriorType;
    expect(() => WarriorFactory.createWarrior(fakeWarriorType)).toThrow(
      "Unsupported warrior type"
    );
  });
});
