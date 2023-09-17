import { Component } from '@angular/core';
import { CharactersService } from './services/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'roll-initiative';

  constructor(public characters: CharactersService) {
    for(let i = 0; i < 10; i++)
      this.characters.addCharacter();
  }

  openOptions() {}
}
