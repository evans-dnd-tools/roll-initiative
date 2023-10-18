import { IndexElementType } from "./enums/index-element-type";
import { SpellSchool } from "./enums/spell-school";
import { IndexElement } from "./index-element";

export interface Spell extends IndexElement {
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