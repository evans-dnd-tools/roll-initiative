import { Injectable } from '@angular/core';
import { Character } from 'src/models/character';
import { Class } from 'src/models/enums/class';
import { Race } from 'src/models/enums/race';
import { Sex } from 'src/models/enums/sex';

@Injectable({
  providedIn: 'root'
})
export class CharactersSheetService {

  private characters : Character[] = [
    new Character({
      firstName: "Ralph",
      lastName: "Hadley",
      sex: Sex.Male,
      race: Race.Human,
      height: 198,
      alignment: "Loyal Neutre",
      class: Class.Fighter,
      level: 3,
      armorClass: 12,
      hitPoints: 21,
      speed: 9,
      description: ``,
      stats: [15, 10, 12, 7, 10, 6]
    })
  ];

  constructor() { }

  addCharacter(character: Character) {
    this.characters.push(character);
  }

  getCharacters() {
    return this.characters;
  }

  getCharacter(id: number) {
    return this.characters[id];
  }

  updateCharacter(id: number, character: Character) {
    this.characters[id] = character;
  }

  deleteCharacter(id: number) {
    this.characters.splice(id, 1);
  }
}
