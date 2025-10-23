import { Injectable } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { CHARACTER_SHEET_PADDING, CHARACTER_SHEET_SIZE } from 'src/models/constants';
import { CharacterComponent } from '../components/character/character.component';
import { CharactersInitiativeService } from './characters-initiative.service';

@Injectable({
  providedIn: 'root'
})
export class DragAndDropService {

  ////    ATTRIBUTES    ////

  moveSubscription: Subscription;

  board: HTMLElement;
  characterComponent: CharacterComponent;

  lastPosition: number;

  grabOffset: number;

  ////    LIFE CYCLE    ////

  constructor(private characters: CharactersInitiativeService) { }

  ////    FUNCTIONS    ////

  grab(event: MouseEvent, characterComponent: CharacterComponent) {

    this.board = document.querySelector('.character-list');
    this.characterComponent = characterComponent;

    this.lastPosition = this.characterComponent.position;

    document.body.classList.add('grabbing');
    this.characterComponent.hostElement.classList.add('grabbed');

    this.grabOffset = event.clientY - this.characterComponent.hostElement.getBoundingClientRect().top;

    fromEvent(document, 'mouseup', { once: true }).subscribe(this.release.bind(this));
    this.moveSubscription = fromEvent<MouseEvent>(document, 'mousemove').subscribe(this.move.bind(this));
  }

  move(event: MouseEvent) {
    const cursorPosition = event.clientY - this.board.offsetTop + window.scrollY;

    const maxPosition = this.board.offsetHeight - CHARACTER_SHEET_SIZE + CHARACTER_SHEET_PADDING;
    const newPosition = Math.min(maxPosition, Math.max(0, cursorPosition - this.grabOffset));

    this.characterComponent.hostElement.style.translate = `0 ${newPosition}px`;

    const listPosition = Math.min(this.characters.list.length -1, Math.max(0, Math.floor(cursorPosition / CHARACTER_SHEET_SIZE)));

    if (listPosition !== this.lastPosition) {
      this.updateListPosition(listPosition);
      this.lastPosition = listPosition;
    }
  }

  private updateListPosition(newPosition: number) {
    for (const character of this.characters.list) {
      if(character === this.characterComponent.character)
        continue;

      if (this.lastPosition < newPosition && character.position > this.lastPosition && character.position <= newPosition)
          character.position--;
      else if (character.position >= newPosition && character.position < this.lastPosition)
          character.position++;
    }
  }

  release() {
    this.updateCharacterPosition();
    
    this.resetStyle();
    this.resetValues();
  }

  private updateCharacterPosition() {
    if (this.lastPosition === this.characterComponent.position)
      this.characterComponent.hostElement.style.translate = `0 ${this.lastPosition * CHARACTER_SHEET_SIZE}px`

    this.characterComponent.character.position = this.lastPosition;
  }


  private resetValues() {
    this.moveSubscription.unsubscribe();
    this.moveSubscription = null;

    this.board = null;
    this.characterComponent = null;

    this.grabOffset = null;
  }

  private resetStyle() {
    document.body.classList.remove('grabbing');
    this.characterComponent.hostElement.classList.remove('grabbed');
  }

}
