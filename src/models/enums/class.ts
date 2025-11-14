import { Sex } from "./sex";

export enum Class {
  None = "Aucune",
  Barbarian = "Barbare",
  Bard = "Barde",
  Cleric = "Clerc",
  Druid = "Druide",
  Fighter = "Guerrier",
  Monk = "Moine",
  Paladin = "Paladin",
  Ranger = "Rôdeur",
  Rogue = "Roublard",
  Sorcerer = "Ensorceleur",
  Warlock = "Occultiste",
  Wizard = "Magicien",
}

const ClassBySex = new Map<Class, Map<Sex, string>>([
  [Class.None, new Map<Sex, string>([
    [Sex.Male, "Aucune classe"],
    [Sex.Female, "Aucune classe"],
  ])],
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
    [Sex.Male, "Magicien"],
    [Sex.Female, "Magicienne"],
  ])],
]);

export function classBySex(charClass: Class, sex: Sex): string {
  if (sex === Sex.Other || sex == null) return charClass;
  return ClassBySex.get(charClass)?.get(sex);
}