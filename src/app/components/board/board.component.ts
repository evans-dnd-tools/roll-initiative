import { Component, Input } from '@angular/core';
import { Character } from 'src/models/character';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  @Input()
  characters: Character[] = [];
}
