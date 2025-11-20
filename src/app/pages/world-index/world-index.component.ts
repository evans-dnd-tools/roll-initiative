import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Spell } from 'src/models/spell';
import { ModalService } from '../../services/modal.service';
import { SpellCardComponent } from 'src/app/components/spell-card/spell-card.component';
import { StatBlock } from 'src/models/stat-block';
import { IndexElement } from 'src/models/index-element';
import { IndexElementType } from 'src/models/enums/index-element-type';
import { Class, classBySex } from 'src/models/enums/class';
import { raceBySex } from 'src/models/enums/race';
import { StatBlockComponent } from 'src/app/components/stat-block/stat-block.component';
import { StatBlockService } from 'src/app/services/stat-block.service';
import { Place } from 'src/models/place';
import { PlacesService } from 'src/app/services/places.service';
import { PlaceComponent } from 'src/app/components/place/place.component';
import { Title } from '@angular/platform-browser';
import spellsJson from 'src/app/lists/spells.json';

@Component({
  selector: 'app-world-index',
  templateUrl: './world-index.component.html',
  styleUrls: ['./world-index.component.scss']
})
export class WorldIndexComponent {

  ////    READONLY    ////

  readonly SPELLS = spellsJson as Spell[];

  readonly TYPE_ALL = 'Tous';
  readonly IndexElementType = IndexElementType;

  ////    VARIABLES    ////

  filter: string = '';
  activeType: string = this.TYPE_ALL;
  filteredList: IndexElement[] = [];

  @ViewChild('searchbar') searchBar: ElementRef;

  ////    CONSTRUCTOR    ////

  constructor(
    private modalService: ModalService, 
    private statblocksService: StatBlockService,
    private placesService: PlacesService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Index du monde');
  }

  // There is a bug currently that duplicates elements
  @HostListener('window:unload')
  unloadHandler() {
    const savedCharacters = this.statblocksService.getStatBlocks();
    localStorage.setItem('index:characters', JSON.stringify(savedCharacters));

    const savedPlaces = this.placesService.getPlaces();
    localStorage.setItem('index:places', JSON.stringify(savedPlaces));
  }

  ////    METHODS    ////

  // SEARCH SHORTCUT EVENT

  @HostListener('window:keydown.control.f', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    event.preventDefault();
    this.searchBar.nativeElement.focus();
  }

  // FORMAT SUB-TEXT

  formatSubtext(element: IndexElement): string {
    switch(element.type) {
      case IndexElementType.Spell:
        return this.formatSpellSubtext(element as Spell);
      case IndexElementType.StatBlock:
        return this.formatCharacterSubtext(element as StatBlock);
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

  formatCharacterSubtext(character: StatBlock): string {
    const charClass = character.class === Class.None ? "" : classBySex(character.class, character.sex);
    return `${charClass} ${raceBySex(character.race, character.sex)} (niveau ${character.level})`;
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
      case IndexElementType.StatBlock:
        this.openCharacter(element as StatBlock);
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

  openCharacter(character: StatBlock) {
    const input = {character}
    this.modalService.open(StatBlockComponent, input);
  }

  openPlace(place: Place) {
    const input = {place}
    this.modalService.open(PlaceComponent, input);
  }

  openContextMenu(event: Event, element: IndexElement) {
    event.preventDefault();
  }

  ////    GETTERS    ////

  get completeList() : IndexElement[] {
    let list: IndexElement[] = [];

    if (!this.activeType) return list; 

    // Filter by type

    switch (this.activeType) {
      case this.IndexElementType.Spell:
        list = list.concat(this.SPELLS);
        break;
      case this.IndexElementType.StatBlock:
        list = list.concat(this.statblocksService.getStatBlocks());
        break;
      case this.IndexElementType.Place:
        list = list.concat(this.placesService.getPlaces());
        break;
      default:
        list = list.concat(this.SPELLS);
        list = list.concat(this.statblocksService.getStatBlocks());
        list = list.concat(this.placesService.getPlaces());
        break;
    }

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
