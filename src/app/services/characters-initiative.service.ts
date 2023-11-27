import { HostListener, Injectable } from '@angular/core';
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

  // REAL-TIME

  charactersChangedSinceLastTurn : boolean = false;
  isSpectator : boolean = false;

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

    this.charactersChangedSinceLastTurn = true;
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

    this.charactersChangedSinceLastTurn = true;
  }

  rollForInitiative() {
    for (const character of this.list)
      if (!character.lockedRoll)
        character.roll = Math.floor(Math.random() * 20) + 1 + character.bonus;

    const sortedCharacters = [...this.list].sort((a, b) => b.roll - a.roll);

    for (const character of sortedCharacters)
      character.position = sortedCharacters.indexOf(character);

    this.charactersChangedSinceLastTurn = true;
  }

  startCombat() {
    this.nextRound();

    localStorage.setItem('realtime:characters', JSON.stringify(this.list));
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

    if (this.charactersChangedSinceLastTurn)
      localStorage.setItem('realtime:characters', JSON.stringify(this.list));

    this.charactersChangedSinceLastTurn = false;
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

    localStorage.setItem('realtime:playing', JSON.stringify(this.currentlyPlaying));
  }


  endCombat() {
    this.round = 0;

    localStorage.removeItem('realtime:playing');
    localStorage.removeItem('realtime:characters');
  }

  isPlaying(character: TrackerCharacter): boolean {
    if (!this.currentlyPlaying) return false;
    return this.currentlyPlaying.some(c => this.compareCharacters(c, character));    
  }

  compareCharacters(a: TrackerCharacter, b: TrackerCharacter): boolean {
    return a.name === b.name && a.ally === b.ally && a.position === b.position;
  }

  get inCombat() {
    return this.round > 0;
  }

  @HostListener('window:unload')
  onUnload() {
    localStorage.removeItem('realtime:playing');
    localStorage.removeItem('realtime:characters');
  }
}
