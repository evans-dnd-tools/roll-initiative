import { Component, ElementRef, Input, OnChanges } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { TrackerCharacter } from 'src/models/tracker-character';
import { CHARACTER_SHEET_PADDING, CHARACTER_SHEET_SIZE } from 'src/models/constants';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnChanges {

  ////    ATTRIBUTES    ////

  @Input()
  characters: TrackerCharacter[] = [];

  private hostElement: HTMLElement;

  ////    LIFE CYCLE    ////

  constructor(elementRef: ElementRef, public charactersService: CharactersService) {
    this.hostElement = elementRef.nativeElement;
  }

  ngOnChanges() {
    this.hostElement.style.height = `${this.characters.length * CHARACTER_SHEET_SIZE - CHARACTER_SHEET_PADDING}px`;
  }

  ////    FUNCTIONS    ////
}
