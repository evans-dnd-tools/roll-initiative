import { Sex } from "./sex"

export enum Race {
  // Player races
  
  Elf,
  Halfling,
  Human,
  Dwarf,
  HalfOrc,
  HalfElf,
  Dragonborn,  
  Gnome,
  Tiefling,

  // Common races
  Aasimar,
  Bugbear,
  Goblin,
  Kenku,
  Kobold,
  Tabaxi,
}

const RaceBySex = new Map<Race, Map<Sex, string>>([
  [Race.Elf, new Map<Sex, string>([
    [Sex.Male, "Elfe"],
    [Sex.Female, "Elfe"],
  ])],
  [Race.Halfling, new Map<Sex, string>([
    [Sex.Male, "Halfelin"],
    [Sex.Female, "Halfeline"],
  ])],
  [Race.Human, new Map<Sex, string>([
    [Sex.Male, "Humain"],
    [Sex.Female, "Humaine"]
  ])],
  [Race.Dwarf, new Map<Sex, string>([
    [Sex.Male, "Nain"],
    [Sex.Female, "Naine"]
  ])],
  [Race.HalfOrc, new Map<Sex, string>([
    [Sex.Male, "Demi-orc"],
    [Sex.Female, "Demi-orc"]
  ])],
  [Race.HalfElf, new Map<Sex, string>([
    [Sex.Male, "Demi-elfe"],
    [Sex.Female, "Demi-elfe"]
  ])],
  [Race.Dragonborn, new Map<Sex, string>([
    [Sex.Male, "Drakéide"],
    [Sex.Female, "Drakéide"]
  ])],
  [Race.Gnome, new Map<Sex, string>([
    [Sex.Male, "Gnome"],
    [Sex.Female, "Gnome"]
  ])],
  [Race.Tiefling, new Map<Sex, string>([
    [Sex.Male, "Tieffelin"],
    [Sex.Female, "Tieffeline"]
  ])],
]);

export function raceBySex(race: Race, sex: Sex) {
  return RaceBySex.get(race).get(sex);
}