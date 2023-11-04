import { PlaceType } from "./enums/place-type";
import { IndexElement } from "./index-element";

export interface Place extends IndexElement {
  name: string;
  placeType: PlaceType;
  description: string;
}