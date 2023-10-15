import { Component } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'initiative-header',
  templateUrl: './initiative-header.component.html',
  styleUrls: ['./initiative-header.component.scss']
})
export class InitiativeHeaderComponent {

  showOptions: boolean = false;

  constructor(public characters: CharactersService) {}

  toggleCombat() {
    if (this.characters.inCombat)
      this.characters.endCombat();
    else
      this.characters.startCombat();
  }
}
