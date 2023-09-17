import { Component, ElementRef, Input, OnChanges } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { DragAndDropService } from 'src/app/services/drag-and-drop.service';
import { Character } from 'src/models/character';
import { CHARACTER_SHEET_SIZE } from 'src/models/constants';

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnChanges {

  ////    ATTRIBUTES    ////

  @Input()
  character: Character = null;

  @Input()
  position: number = 0;

  hostElement: HTMLElement;

  ////    LIFE CYCLE    ////

  constructor(
    elementRef: ElementRef, 
    private dragAndDropService: DragAndDropService,
    private characters: CharactersService
  ) {
    this.hostElement = elementRef.nativeElement;
  }

  ngOnChanges() {
    this.hostElement.style.translate = `0 ${this.position * CHARACTER_SHEET_SIZE}px`;
  }

  ////    FUNCTIONS    ////

  swapTeam() {
    this.character.ally = !this.character.ally;
  }

  toggleLock() {
    this.character.lockedRoll = !this.character.lockedRoll;
  }

  grab(event: MouseEvent) {
    this.dragAndDropService.grab(event, this);
  }

  deleteCharacter() {
    this.characters.delete(this.character);
  }
}
