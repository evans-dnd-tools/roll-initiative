export interface TrackerCharacter {
  name: string;
  ally: boolean;

  currentHP: number;
  maxHP: number;

  armorClass: number;

  bonus: number;
  roll: number;

  position: number;

  lockedRoll: boolean;
}