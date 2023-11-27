import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CharactersInitiativeService } from 'src/app/services/characters-initiative.service';

@Component({
  selector: 'app-spectate',
  templateUrl: './spectate.component.html',
  styleUrls: ['./spectate.component.scss']
})
export class SpectateComponent {

  constructor(
    public characters: CharactersInitiativeService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Spectate Fight');
  }

  ngOnInit(): void {
    this.initCharacters();
  }

  initCharacters() {
    this.characters.list = JSON.parse(localStorage.getItem('realtime:characters'));
    this.characters.currentlyPlaying = JSON.parse(localStorage.getItem('realtime:playing'));
    this.characters.round = parseInt(localStorage.getItem('realtime:round'));

    this.characters.isSpectator = true;
  }
  
  @HostListener('window:storage', ['$event'])
  onStorageChange(event: StorageEvent) {
    if (!event.key.startsWith('realtime:')) return;

    const key = event.key.split(':')[1];
    switch (key) {
      case 'characters':
        this.characters.list = JSON.parse(event.newValue);
        break;
      case 'playing':
        this.characters.currentlyPlaying = JSON.parse(event.newValue);
        break;
      case 'round':
        this.characters.round = parseInt(event.newValue);
        break;
    }
  }
}
