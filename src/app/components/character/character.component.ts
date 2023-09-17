import { Component, Input } from '@angular/core';
import { Character } from 'src/models/character';

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Input()
  character: Character = {
    name: '',
    bonus: null,
    roll: 0,
    ally: false
  };

  swapTeam() {
    this.character.ally = !this.character.ally;
  }
}
