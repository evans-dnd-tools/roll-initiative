import { Component } from '@angular/core';
import { CharactersSheetService } from 'src/app/services/characters-sheet.service';
import { ModalService } from 'src/app/services/modal.service';
import { Character } from 'src/models/character';

@Component({
  selector: 'app-character-import',
  templateUrl: './character-import.component.html',
  styleUrls: ['./character-import.component.scss']
})
export class CharacterImportComponent {

  currentFile: File | null = null;

  characters : Character[];

  constructor(private charactersService: CharactersSheetService, private modalService: ModalService) {}

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    this.currentFile = file;

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const json = reader.result as string;
        const characters = JSON.parse(json);

        if(!Array.isArray(characters)) {
          this.characters = null;
          return;
        }

        this.characters = characters;
      };
      reader.readAsText(file);
    }
  }

  importCharacters() {

    if(!this.characters) return;

    this.charactersService.importCharacters(this.characters);

    setTimeout(() => {
      this.modalService.close();
    }, 80);
  }

  get fileNameFirstPart(): string {
    return this.currentFile?.name.substring(0, this.currentFile.name.lastIndexOf('.') - 1) || '';
  }

  get fileNameLastPart(): string {
    return this.currentFile?.name.substring(this.currentFile.name.lastIndexOf('.') - 1) || '';
  }

}
