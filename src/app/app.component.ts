import { Component, HostListener } from '@angular/core';
import { CharactersService } from './services/characters.service';
import { DEFAULT_CHARACTER_LIST_SIZE } from 'src/models/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public characters: CharactersService) {
    const characterList = JSON.parse(localStorage.getItem('characters'));

    if (characterList && characterList.length > 0)
      this.characters.list = characterList;

    while(this.characters.list.length < DEFAULT_CHARACTER_LIST_SIZE)
      this.characters.addCharacter();
  }

  @HostListener('window:unload', ['$event'])
  unloadHandler(event: Event) {
    const shouldSaveCharacters = localStorage.getItem('options').includes('saveTeam');
    
    if(shouldSaveCharacters) {
      const savedCharacters = this.characters.list.filter(character => character.ally);
      localStorage.setItem('characters', JSON.stringify(savedCharacters));
    }
  }
}
