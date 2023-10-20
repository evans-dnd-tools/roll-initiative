import { Class } from "./enums/class";
import { IndexElementType } from "./enums/index-element-type";
import { Race } from "./enums/race";
import { Sex } from "./enums/sex";
import { IndexElement } from "./index-element";

export class Character implements IndexElement {

  type = IndexElementType.Character;

  firstName: string;
  lastName: string;

  sex: Sex;
  race: Race;
  height: number;

  alignment: string;

  class: Class;
  level: number;

  armorClass: number;
  hitPoints: number;
  speed: number;

  description: string;

  stats: [number, number, number, number, number, number];

  public constructor(init?:Partial<Character>) {
    Object.assign(this, init);
  }

  get name(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  get strength(): number {
    return this.stats[0];
  }

  get dexterity(): number {
    return this.stats[1];
  }

  get constitution(): number {
    return this.stats[2];
  }

  get intelligence(): number {
    return this.stats[3];
  }

  get wisdom(): number {
    return this.stats[4];
  }

  get charisma(): number {
    return this.stats[5];
  }
}