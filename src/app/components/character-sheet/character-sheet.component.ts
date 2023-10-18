import { Component, Input } from '@angular/core';
import { Character } from 'src/models/character';

@Component({
  selector: 'character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent {

  @Input() character: Character;
}
