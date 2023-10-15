import { Class } from "./enums/class";
import { Race } from "./enums/race";
import { Sex } from "./enums/sex";

export class Character {

  name: string;
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

  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  constructor() {}


  get fullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  get strengthModifier(): number {
    return Math.floor((this.strength - 10) / 2);
  }

  get dexterityModifier(): number {
    return Math.floor((this.dexterity - 10) / 2);
  }

  get constitutionModifier(): number {
    return Math.floor((this.constitution - 10) / 2);
  }

  get intelligenceModifier(): number {
    return Math.floor((this.intelligence - 10) / 2);
  }

  get wisdomModifier(): number {
    return Math.floor((this.wisdom - 10) / 2);
  }

  get charismaModifier(): number {
    return Math.floor((this.charisma - 10) / 2);
  }
}