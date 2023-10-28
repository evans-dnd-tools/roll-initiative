import { Component } from '@angular/core';
import { CharactersInitiativeService } from 'src/app/services/characters-initiative.service';

@Component({
  selector: 'initiative-header',
  templateUrl: './initiative-header.component.html',
  styleUrls: ['./initiative-header.component.scss']
})
export class InitiativeHeaderComponent {

  showOptions: boolean = false;

  constructor(public characters: CharactersInitiativeService) {}

  toggleCombat() {
    if (this.characters.inCombat)
      this.characters.endCombat();
    else
      this.characters.startCombat();
  }
}
