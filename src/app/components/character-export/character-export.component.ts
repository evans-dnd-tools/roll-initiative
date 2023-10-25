import { Component } from '@angular/core';
import { Character } from 'src/models/character';

@Component({
  selector: 'app-character-export',
  templateUrl: './character-export.component.html',
  styleUrls: ['./character-export.component.scss']
})
export class CharacterExportComponent {

  characters : Character[] = [new Character()];

  exportCharacters() {
    const json = JSON.stringify(this.characters);

    const blob = new Blob([json], {type: 'application/json'});
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'characters.json';
    a.click();

    window.URL.revokeObjectURL(url);
  }
}
