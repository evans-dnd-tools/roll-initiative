import { Sex } from "./sex"

export enum Race {
  // Player races
  
  Elf = "Elfe",
  Halfling = "Halfelin",
  Human = "Humain",
  Dwarf = "Nain",
  HalfOrc = "Demi-orc",
  HalfElf = "Demi-elfe",
  Dragonborn = "Drakéide",  
  Gnome = "Gnome",
  Tiefling = "Tieffelin",
  
  // Common races
  Aasimar = "Aasimar",
  Kobold = "Kobold",
  // Bugbear,
  // Goblin,
  // Kenku,
  // Tabaxi,

  Unknown = "Inconnu"
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
  [Race.Aasimar, new Map<Sex, string>([
      [Sex.Male, "Aasimar"],
      [Sex.Female, "Aasimar"],
    ])],
  [Race.Kobold, new Map<Sex, string>([
    [Sex.Male, "Kobold"],
    [Sex.Female, "Kobold"],
  ])],
  [Race.Unknown, new Map<Sex, string>([
      [Sex.Male, "Race inconnu"],
      [Sex.Female, "Race inconnue"],
    ])]
]);

export function raceBySex(race: Race, sex: Sex) {
  if (sex === Sex.Other || sex == null) return race;
  return RaceBySex.get(race)?.get(sex);
}