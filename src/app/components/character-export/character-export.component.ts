import { Component } from '@angular/core';
import { CharactersSheetService } from 'src/app/services/characters-sheet.service';
import { ModalService } from './../../services/modal.service';

@Component({
  selector: 'app-character-export',
  templateUrl: './character-export.component.html',
  styleUrls: ['./character-export.component.scss']
})
export class CharacterExportComponent {

  constructor(private charactersService: CharactersSheetService, private modalService: ModalService) { }

  exportCharacters() {
    const json = JSON.stringify(this.charactersService.getCharacters(), null, 2);

    const blob = new Blob([json], {type: 'application/json'});
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'characters.json';
    a.click();

    window.URL.revokeObjectURL(url);

    setTimeout(() => {
      this.modalService.close();
    }, 80);
  }
}
