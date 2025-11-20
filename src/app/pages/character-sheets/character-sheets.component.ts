import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-character-sheets',
    templateUrl: './character-sheets.component.html',
    styleUrls: ['./character-sheets.component.scss'],
    standalone: false
})
export class CharacterSheetsComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Feuilles de personnage');
  }
}
