import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { InitiativeService } from 'src/app/services/initiative.service';

@Component({
  selector: 'app-spectate',
  templateUrl: './spectate.component.html',
  styleUrls: ['./spectate.component.scss']
})
export class SpectateComponent {

  constructor(
    public initiative: InitiativeService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Spectate Fight');
  }

  ngOnInit(): void {
    this.initCharacters();
  }

  initCharacters() {
    this.initiative.list = JSON.parse(localStorage.getItem('realtime:characters'));
    this.initiative.currentlyPlaying = JSON.parse(localStorage.getItem('realtime:playing'));
    this.initiative.round = parseInt(localStorage.getItem('realtime:round'));

    this.initiative.isSpectator = true;
  }
  
  @HostListener('window:storage', ['$event'])
  onStorageChange(event: StorageEvent) {
    if (!event.key.startsWith('realtime:')) return;

    const key = event.key.split(':')[1];
    switch (key) {
      case 'characters':
        this.initiative.list = JSON.parse(event.newValue);
        break;
      case 'playing':
        this.initiative.currentlyPlaying = JSON.parse(event.newValue);
        break;
      case 'round':
        this.initiative.round = parseInt(event.newValue);
        break;
    }
  }
}
