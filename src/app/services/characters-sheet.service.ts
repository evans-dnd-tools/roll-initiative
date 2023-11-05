import { Injectable } from '@angular/core';
import { Character } from 'src/models/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersSheetService {

  private characters : Character[] = [];

  addCharacter(character: Character) {
    this.characters.push(character);
  }

  importCharacters(characters: any[]) {
    for (let character of characters) {
      this.characters.push(new Character(character));
    }
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
