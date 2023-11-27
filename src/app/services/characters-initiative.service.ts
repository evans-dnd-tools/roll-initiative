import { Injectable } from '@angular/core';
import { TrackerCharacter } from 'src/models/tracker-character';
import { OptionsService } from './options.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersInitiativeService {

  ////    ATTRIBUTES    ////

  list : TrackerCharacter[] = [];

  round : number = 0;

  currentlyPlaying : TrackerCharacter[] = [];

  ////    LIFE CYCLE    ////

  constructor(private options: OptionsService) {}

  ////    FUNCTIONS    ////

  addCharacter() {
    const character : TrackerCharacter = {
      name: '',
      bonus: null,
      roll: null,
      ally: false,
      lockedRoll: false,
      position: this.list.length
    };

    this.list = [...this.list, character];
  }

  delete(character: TrackerCharacter) {
    this.list = this.list.filter(c => c !== character);

    for (const other of this.list)
      if (character.position < other.position)
        other.position--;

    if (this.inCombat && this.currentlyPlaying.includes(character)) {
      this.currentlyPlaying = this.currentlyPlaying.filter(c => c !== character);
      if (this.currentlyPlaying.length === 0)
        this.findPlayingCharacters(character.position);
    }
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
    if (!this.inCombat) return;

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

    if (!this.options.groupTurnByTeam) return;

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

  isPlaying(character: TrackerCharacter) {
    return this.currentlyPlaying.includes(character);
  }

  get inCombat() {
    return this.round > 0;
  }
}
