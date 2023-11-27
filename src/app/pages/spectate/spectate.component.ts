import { Component, HostListener } from '@angular/core';
import { CharactersInitiativeService } from 'src/app/services/characters-initiative.service';

@Component({
  selector: 'app-spectate',
  templateUrl: './spectate.component.html',
  styleUrls: ['./spectate.component.scss']
})
export class SpectateComponent {

  constructor(public characters: CharactersInitiativeService) {}

  ngOnInit(): void {
    this.initCharacters();
  }

  initCharacters() {
    this.characters.list = JSON.parse(localStorage.getItem('realtime:characters'));
    this.characters.currentlyPlaying = JSON.parse(localStorage.getItem('realtime:playing'));

    this.characters.isSpectator = true;
    this.characters.round = this.characters.list && this.characters.list.length > 0 ? 1 : 0;
  }
  
  @HostListener('window:storage', ['$event'])
  onStorageChange(event: StorageEvent) {

    console.log("yeppers");

    if (!event.key.startsWith('realtime:')) return;

    const key = event.key.split(':')[1];
    switch (key) {
      case 'characters':
        this.characters.list = JSON.parse(event.newValue);
        break;
      case 'playing':
        this.characters.currentlyPlaying = JSON.parse(event.newValue);
        break;
    }

    this.characters.round = this.characters.list && this.characters.list.length > 0 ? 1 : 0;
  }
}
