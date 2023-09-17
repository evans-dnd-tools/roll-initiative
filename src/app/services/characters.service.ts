import { Injectable } from '@angular/core';
import { Character } from 'src/models/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  list : Character[] = [];

  constructor() { }

  addCharacter() {
    const character : Character = {
      name: '',
      bonus: null,
      roll: null,
      ally: false,
      lockedRoll: false,
      position: this.list.length
    };

    this.list = [...this.list, character];
  }

  rollForInitiative() {
    for (const character of this.list)
      if (!character.lockedRoll)
        character.roll = Math.floor(Math.random() * 20) + 1 + character.bonus;

    const sortedCharacters = [...this.list].sort((a, b) => b.roll - a.roll);

    for (const character of sortedCharacters)
      character.position = sortedCharacters.indexOf(character);
  }

  delete(character: Character) {
    this.list = this.list.filter(c => c !== character);

    for (const other of this.list)
      if (character.position < other.position)
        other.position--;
  }
}
