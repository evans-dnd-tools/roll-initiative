import { Class } from "./enums/class";
import { IndexElementType } from "./enums/index-element-type";
import { Race } from "./enums/race";
import { Sex } from "./enums/sex";
import { IndexElement } from "./index-element";

export class StatBlock implements IndexElement {

  type = IndexElementType.StatBlock;

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

  stats: [number, number, number, number, number, number] = [
    undefined, 
    undefined, 
    undefined, 
    undefined, 
    undefined, 
    undefined
  ];

  public constructor(init?:Partial<StatBlock>) {
    Object.assign(this, init);
  }

  public save() {
    if (!this.sex) this.sex = Sex.Other
    if (!this.race) this.race = Race.Unknown
    if (!this.class) this.class = Class.None
    if (!this.level) this.level = 0
    if (!this.speed) this.speed = 9 
  }

  get name(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  get strength(): number {
    return this.stats[0];
  }

  set strength(value: number) {
    this.stats[0] = value;
  }

  get dexterity(): number {
    return this.stats[1];
  }

  set dexterity(value: number) {
    this.stats[1] = value;
  }

  get constitution(): number {
    return this.stats[2];
  }

  set constitution(value: number) {
    this.stats[2] = value;
  }

  get intelligence(): number {
    return this.stats[3];
  }

  set intelligence(value: number) {
    this.stats[3] = value;
  }

  get wisdom(): number {
    return this.stats[4];
  }

  set wisdom(value: number) {
    this.stats[4] = value;
  }

  get charisma(): number {
    return this.stats[5];
  }

  set charisma(value: number) {
    this.stats[5] = value;
  }
}