import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CharactersInitiativeService } from 'src/app/services/characters-initiative.service';
import { OptionsService } from 'src/app/services/options.service';
import { DEFAULT_CHARACTER_LIST_SIZE } from 'src/models/constants';

@Component({
  selector: 'app-roll-initiative',
  templateUrl: './roll-initiative.component.html',
  styleUrls: ['./roll-initiative.component.scss']
})
export class RollInitiativeComponent {

  ////    LIFE CYCLE    ////

  constructor(
    public characters: CharactersInitiativeService, 
    public options: OptionsService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Traqueur d\'initiative');

    const characterList = JSON.parse(localStorage.getItem('characters'));

    if (characterList && characterList.length > 0)
      this.characters.list = characterList;

    for (let i = 0; i < this.characters.list.length; i++) {
      this.characters.list[i].position = i;
      this.characters.list[i].roll = null;
    }

    while(this.characters.list.length < DEFAULT_CHARACTER_LIST_SIZE)
      this.characters.addCharacter();
  }

  ////    EVENT HANDLERS    ////

  @HostListener('window:keydown.control.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    event.preventDefault();
    if (!this.characters.inCombat) this.characters.startCombat();
    else this.characters.nextTurn();
  }

  @HostListener('window:unload')
  unloadHandler() {    
    if(this.options.saveTeam) {
      const savedCharacters = this.characters.list.filter(character => character.ally);
      localStorage.setItem('characters', JSON.stringify(savedCharacters));
    }

    localStorage.removeItem('realtime:playing');
    localStorage.removeItem('realtime:characters');
    localStorage.removeItem('realtime:round');
  }
}
