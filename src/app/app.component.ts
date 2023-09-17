import { Component } from '@angular/core';
import { Character } from 'src/models/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'roll-initiative';

  characters : Character[] = [];

  constructor() {
    this.addCharacter();
  }

  addCharacter() {
    this.characters.push({
      name: '',
      bonus: null,
      roll: 0,
      ally: false
    });
  }
}
