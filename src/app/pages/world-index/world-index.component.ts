import { Component } from '@angular/core';
import { SPELLS } from 'src/app/lists/spells';
import { Spell } from 'src/models/spell';
import { ModalService } from '../../services/modal.service';
import { SpellCardComponent } from 'src/app/components/spell-card/spell-card.component';
import { Character } from 'src/models/character';
import { IndexElement } from 'src/models/index-element';
import { IndexElementType } from 'src/models/enums/index-element-type';
import { Sex } from 'src/models/enums/sex';
import { Race, raceBySex } from 'src/models/enums/race';
import { Class, classBySex } from 'src/models/enums/class';
import { CharacterSheetComponent } from 'src/app/components/character-sheet/character-sheet.component';

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

  pnjs : Character[] = [
    new Character({
      firstName: "Ralph",
      lastName: "Hadley",
      sex: Sex.Male,
      race: Race.Human,
      height: 1.98,
      alignment: "Loyal Neutre",
      class: Class.Fighter,
      level: 3,
      armorClass: 12,
      hitPoints: 21,
      speed: 9,
      description: "Un homme grand et musclé, avec une barbe et des cheveux bruns.",
      strength: 15,
      dexterity: 10,
      constitution: 12,
      intelligence: 7,
      wisdom: 10,
      charisma: 6
    })
  ];

  filter: string = '';

  filteredList: (Spell | Character)[] = [];

  ////    CONSTRUCTOR    ////

  constructor(private modalService: ModalService) { }

  ////    METHODS    ////

  // FORMAT SUB-TEXT

  formatSubtext(element: IndexElement): string {
    switch(element.type) {
      case IndexElementType.Spell:
        return this.formatSpellSubtext(element as Spell);
      case IndexElementType.Character:
        return this.formatCharacterSubtext(element as Character);
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

  // OPEN

  open(element: IndexElement) {
    switch(element.type) {
      case IndexElementType.Spell:
        this.openSpell(element as Spell);
        break;
      case IndexElementType.Character:
        this.openCharacter(element as Character);
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

  ////    SPECIAL CAST    ////
  
  asSpell(item: any) : Spell {
    return item as Spell;
  }

  isSpell(item: IndexElement) : boolean {
    return item.type === IndexElementType.Spell;
  }

  ////    GETTERS    ////

  get completeList() : (IndexElement)[] {
    let list : (Spell | Character)[] = [];
    list = list.concat(this.spells);
    list = list.concat(this.pnjs);

    list = list.filter((item) => {
      return item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(this.filter.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase());
    });

    return list;
  }
}
