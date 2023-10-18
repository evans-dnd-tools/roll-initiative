import { Sex } from "./sex";

export enum Class {
  Barbarian,
  Bard,
  Cleric,
  Druid,
  Fighter,
  Monk,
  Paladin,
  Ranger,
  Rogue,
  Sorcerer,
  Warlock,
  Wizard,
}


const ClassBySex = new Map<Class, Map<Sex, string>>([
  [Class.Barbarian, new Map<Sex, string>([
    [Sex.Male, "Barbare"],
    [Sex.Female, "Barbare"],
  ])],
  [Class.Bard, new Map<Sex, string>([
    [Sex.Male, "Barde"],
    [Sex.Female, "Bardesse"],
  ])],
  [Class.Cleric, new Map<Sex, string>([
    [Sex.Male, "Clerc"],
    [Sex.Female, "Clerc"],
  ])],
  [Class.Druid, new Map<Sex, string>([
    [Sex.Male, "Druide"],
    [Sex.Female, "Druide"],
  ])],
  [Class.Fighter, new Map<Sex, string>([
    [Sex.Male, "Guerrier"],
    [Sex.Female, "Guerrière"],
  ])],
  [Class.Monk, new Map<Sex, string>([
    [Sex.Male, "Moine"],
    [Sex.Female, "Moniale"],
  ])],
  [Class.Paladin, new Map<Sex, string>([
    [Sex.Male, "Paladin"],
    [Sex.Female, "Paladine"],
  ])],
  [Class.Ranger, new Map<Sex, string>([
    [Sex.Male, "Rôdeur"],
    [Sex.Female, "Rôdeuse"],
  ])],
  [Class.Rogue, new Map<Sex, string>([
    [Sex.Male, "Roublard"],
    [Sex.Female, "Roublarde"],
  ])],
  [Class.Sorcerer, new Map<Sex, string>([
    [Sex.Male, "Ensorceleur"],
    [Sex.Female, "Ensorceleuse"],
  ])],
  [Class.Warlock, new Map<Sex, string>([
    [Sex.Male, "Occultiste"],
    [Sex.Female, "Occultiste"],
  ])],
  [Class.Wizard, new Map<Sex, string>([
    [Sex.Male, "Mage"],
    [Sex.Female, "Mage"],
  ])],
]);

export function classBySex(charClass: Class, sex: Sex): string {
  return ClassBySex.get(charClass).get(sex);
}