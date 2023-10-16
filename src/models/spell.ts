import { SpellSchool } from "./enums/spell-school";

export interface Spell {
  id: string;
  name: string;
  level: number;
  school: SpellSchool;
  castingTime: string;
  range: string;
  components: string;
  duration: string;
  description: string;
}