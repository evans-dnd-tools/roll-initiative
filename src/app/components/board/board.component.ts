import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { CharactersInitiativeService } from 'src/app/services/characters-initiative.service';
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

  listHeight: string = '';

  ////    LIFE CYCLE    ////

  constructor(public charactersService: CharactersInitiativeService) {}

  ngOnChanges() {
    this.listHeight = `${this.characters.length * CHARACTER_SHEET_SIZE - CHARACTER_SHEET_PADDING}px`;
  }

  ////    FUNCTIONS    ////
}
