import { Component } from '@angular/core';
import { InitiativeService } from 'src/app/services/initiative.service';

@Component({
    selector: 'initiative-header',
    templateUrl: './initiative-header.component.html',
    styleUrls: ['./initiative-header.component.scss'],
    standalone: false
})
export class InitiativeHeaderComponent {

  ////    ATTRIBUTES    ////

  showOptions: boolean = false;

  ////    LIFE CYCLE    ////

  constructor(public initiative: InitiativeService) {}

  ////    EVENT HANDLERS    ////

  openSpectatorWindow() {
    window.open('/spectate', '_blank', 'popup=1');
  }

  toggleCombat() {
    if (this.initiative.inCombat)
      this.initiative.endCombat();
    else
      this.initiative.startCombat();
  }
}
