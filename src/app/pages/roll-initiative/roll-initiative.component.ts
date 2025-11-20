import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { InitiativeService } from 'src/app/services/initiative.service';
import { OptionsService } from 'src/app/services/options.service';
import { DEFAULT_TRACKER_LIST_SIZE } from 'src/models/constants';

@Component({
  selector: 'app-roll-initiative',
  templateUrl: './roll-initiative.component.html',
  styleUrls: ['./roll-initiative.component.scss']
})
export class RollInitiativeComponent {

  ////    LIFE CYCLE    ////

  constructor(
    public initiative: InitiativeService, 
    public options: OptionsService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Traqueur d\'initiative');

    const characterList = JSON.parse(localStorage.getItem('characters'));

    if (characterList && characterList.length > 0)
      this.initiative.list = characterList;

    for (let i = 0; i < this.initiative.list.length; i++) {
      this.initiative.list[i].position = i;
      this.initiative.list[i].roll = null;
    }

    while(this.initiative.list.length < DEFAULT_TRACKER_LIST_SIZE)
      this.initiative.addCharacter();
  }

  ////    EVENT HANDLERS    ////

  @HostListener('window:keydown.control.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    event.preventDefault();
    if (!this.initiative.inCombat) this.initiative.startCombat();
    else this.initiative.nextTurn();
  }

  @HostListener('window:unload')
  unloadHandler() {    
    if(this.options.saveTeam) {
      const savedCharacters = this.initiative.list.filter(character => character.ally);
      localStorage.setItem('characters', JSON.stringify(savedCharacters));
    }

    localStorage.removeItem('realtime:playing');
    localStorage.removeItem('realtime:characters');
    localStorage.removeItem('realtime:round');
  }
}
