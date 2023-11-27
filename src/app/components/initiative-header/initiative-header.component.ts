import { Component } from '@angular/core';
import { CharactersInitiativeService } from 'src/app/services/characters-initiative.service';

@Component({
  selector: 'initiative-header',
  templateUrl: './initiative-header.component.html',
  styleUrls: ['./initiative-header.component.scss']
})
export class InitiativeHeaderComponent {

  ////    ATTRIBUTES    ////

  showOptions: boolean = false;

  ////    LIFE CYCLE    ////

  constructor(public characters: CharactersInitiativeService) {}

  ////    EVENT HANDLERS    ////

  openSpectatorWindow() {
    window.open('/spectate', '_blank', 'popup=1');
  }

  toggleCombat() {
    if (this.characters.inCombat)
      this.characters.endCombat();
    else
      this.characters.startCombat();
  }
}
