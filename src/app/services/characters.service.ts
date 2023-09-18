import { Injectable } from '@angular/core';
import { find, max } from 'rxjs';
import { Character } from 'src/models/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  ////    ATTRIBUTES    ////

  list : Character[] = [];

  round : number = 0;

  currentlyPlaying : Character[] = [];

  ////    FUNCTIONS    ////

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

  delete(character: Character) {
    this.list = this.list.filter(c => c !== character);

    for (const other of this.list)
      if (character.position < other.position)
        other.position--;
  }

  rollForInitiative() {
    for (const character of this.list)
      if (!character.lockedRoll)
        character.roll = Math.floor(Math.random() * 20) + 1 + character.bonus;

    const sortedCharacters = [...this.list].sort((a, b) => b.roll - a.roll);

    for (const character of sortedCharacters)
      character.position = sortedCharacters.indexOf(character);
  }

  startCombat() {
    this.nextRound();
  }

  nextRound() {
    this.round++;
    this.findPlayingCharacters(0);
  }

  nextTurn() {
    let maxPosition = 0;
    for (const character of this.currentlyPlaying)
      if (character.position > maxPosition)
        maxPosition = character.position;

    this.findPlayingCharacters(maxPosition + 1);
  }

  findPlayingCharacters(position: number) {
    this.currentlyPlaying = this.list.filter(c => c.position === position);

    if (this.currentlyPlaying.length === 0) {
      this.nextRound();
      return;
    }

    const ally = this.currentlyPlaying[0].ally;
    
    position++;

    while(this.list.find(c => c.position === position && c.ally === ally)) {
      const nextCharacter = this.list.find(c => c.position === position && c.ally === ally);

      this.currentlyPlaying.push(nextCharacter);

      position++;
    }
  }


  endCombat() {
    this.round = 0;
  }

  isPlaying(character: Character) {
    return this.currentlyPlaying.includes(character);
  }

  get inCombat() {
    return this.round > 0;
  }
}
