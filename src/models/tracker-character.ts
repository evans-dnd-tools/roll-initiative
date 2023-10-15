export interface TrackerCharacter {
  name: string;
  bonus: number;
  roll: number;
  ally: boolean;

  position: number;

  lockedRoll: boolean;
}