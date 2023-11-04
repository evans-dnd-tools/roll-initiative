import { Component } from '@angular/core';
import { SPELLS } from 'src/app/lists/spells';
import { Spell } from 'src/models/spell';
import { ModalService } from '../../services/modal.service';
import { SpellCardComponent } from 'src/app/components/spell-card/spell-card.component';
import { Character } from 'src/models/character';
import { IndexElement } from 'src/models/index-element';
import { IndexElementType } from 'src/models/enums/index-element-type';
import { classBySex } from 'src/models/enums/class';
import { raceBySex } from 'src/models/enums/race';
import { CharacterSheetComponent } from 'src/app/components/character-sheet/character-sheet.component';
import { Filter } from 'src/models/filter';
import { CharacterFormComponent } from 'src/app/components/character-form/character-form.component';
import { CharacterImportComponent } from 'src/app/components/character-import/character-import.component';
import { CharacterExportComponent } from 'src/app/components/character-export/character-export.component';
import { CharactersSheetService } from 'src/app/services/characters-sheet.service';
import { PlaceFormComponent } from 'src/app/components/place-form/place-form.component';
import { Place } from 'src/models/place';
import { PlacesService } from 'src/app/services/places.service';
import { PlaceComponent } from 'src/app/components/place/place.component';

@Component({
  selector: 'app-world-index',
  templateUrl: './world-index.component.html',
  styleUrls: ['./world-index.component.scss']
})
export class WorldIndexComponent {

  ////    READONLY    ////

  spells = SPELLS
  IndexElementType = IndexElementType;

  ////    VARIABLES    ////

  filter: string = '';
  filters : Filter[]

  filteredList: IndexElement[] = [];

  ////    CONSTRUCTOR    ////

  constructor(
    private modalService: ModalService, 
    private charactersService: CharactersSheetService,
    private placesService: PlacesService
  ) {
    this.filters = [];

    for (let type of Object.values(IndexElementType)) {
      this.filters.push({ name: type, active: true });
    }
   }

  ////    METHODS    ////

  // CREATION MODAL

  openCharacterCreationModal() {
    this.modalService.open(CharacterFormComponent, {});
  }

  openPlaceCreationModal() {
    this.modalService.open(PlaceFormComponent, {});
  }

  openImportModal() {
    this.modalService.open(CharacterImportComponent, {});
  }

  openExportModal() {
    this.modalService.open(CharacterExportComponent, {});
  }

  // FILTER

  onFilterChange(filters: Filter[]) {
    this.filters = filters;
  }

  // FORMAT SUB-TEXT

  formatSubtext(element: IndexElement): string {
    switch(element.type) {
      case IndexElementType.Spell:
        return this.formatSpellSubtext(element as Spell);
      case IndexElementType.Character:
        return this.formatCharacterSubtext(element as Character);
      case IndexElementType.Place:
        return this.formatPlaceSubtext(element as Place);
      default:
        return '';
    }
  }

  formatSpellSubtext(spell: Spell): string {
    let value = 'Sort ';

    const firstLetter = spell.school.normalize('NFD').replace(/[\u0300-\u036f]/g, '')[0].toLowerCase();
    const voyels = ['a', 'e', 'i', 'o', 'u', 'y'];

    const article = voyels.includes(firstLetter) ? 'd\'' : 'de ';
    value += article + spell.school;

    value += spell.level === 0 ? " mineur" : " de niveau " + spell.level;

    return value;
  }

  formatCharacterSubtext(character: Character): string {
    return `${classBySex(character.class, character.sex)} ${raceBySex(character.race, character.sex)} (niveau ${character.level})`;
  }

  formatPlaceSubtext(place: Place): string {
    return place.placeType;
  }

  // OPEN

  open(element: IndexElement) {
    switch(element.type) {
      case IndexElementType.Spell:
        this.openSpell(element as Spell);
        break;
      case IndexElementType.Character:
        this.openCharacter(element as Character);
        break;
      case IndexElementType.Place:
        this.openPlace(element as Place);
        break;
    }
  }

  openSpell(spell: Spell) {
    const input = {spell}
    this.modalService.open(SpellCardComponent, input);
  }

  openCharacter(character: Character) {
    const input = {character}
    this.modalService.open(CharacterSheetComponent, input);
  }

  openPlace(place: Place) {
    const input = {place}
    this.modalService.open(PlaceComponent, input);
  }

  ////    GETTERS    ////

  get completeList() : (IndexElement)[] {
    let list: IndexElement[] = [];

    if (!this.filters) return list; 

    // Filter by type

    if (this.filters.find(f => f.name === IndexElementType.Spell && f.active))
      list = list.concat(this.spells);

    if (this.filters.find(f => f.name === IndexElementType.Character && f.active))
      list = list.concat(this.charactersService.getCharacters());

    if (this.filters.find(f => f.name === IndexElementType.Place && f.active))
      list = list.concat(this.placesService.getPlaces());

    // Filter by name

    list = list.filter((item) => {
      return item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(this.filter.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase());
    });

    // Sort by name

    list.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    return list;
  }
}
