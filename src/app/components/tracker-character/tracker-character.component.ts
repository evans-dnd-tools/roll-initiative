import { Component, ElementRef, Input, OnChanges } from '@angular/core';
import { InitiativeService } from 'src/app/services/initiative.service';
import { DragAndDropService } from 'src/app/services/drag-and-drop.service';
import { TrackerCharacter } from 'src/models/tracker-character';
import { CHARACTER_SHEET_SIZE } from 'src/models/constants';

@Component({
  selector: 'tracker-character',
  templateUrl: './tracker-character.component.html',
  styleUrls: ['./tracker-character.component.scss']
})
export class TrackerCharacterComponent implements OnChanges {

  ////    ATTRIBUTES    ////

  @Input()
  character: TrackerCharacter = null;

  @Input()
  position: number = 0;

  hostElement: HTMLElement;

  ////    LIFE CYCLE    ////

  constructor(
    elementRef: ElementRef, 
    private dragAndDropService: DragAndDropService,
    public initiative: InitiativeService
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
    this.initiative.delete(this.character);
  }
}
