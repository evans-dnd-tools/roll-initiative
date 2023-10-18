import { Component } from '@angular/core';
import { SPELLS } from 'src/app/lists/spells';
import { Spell } from 'src/models/spell';
import { ModalService } from '../../services/modal.service';
import { SpellCardComponent } from 'src/app/components/spell-card/spell-card.component';
import { Character } from 'src/models/character';
import { IndexElement } from 'src/models/index-element';
import { IndexElementType } from 'src/models/enums/index-element-type';

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

  pnjs : Character[] = []

  filter: string = '';

  filteredList: (Spell | Character)[] = [];

  ////    CONSTRUCTOR    ////

  constructor(private modalService: ModalService) { }

  ////    METHODS    ////

  formatSubtext(spell: Spell) {
    let value = 'Sort ';

    const firstLetter = spell.school.normalize('NFD').replace(/[\u0300-\u036f]/g, '')[0].toLowerCase();
    const voyels = ['a', 'e', 'i', 'o', 'u', 'y'];

    const article = voyels.includes(firstLetter) ? 'd\'' : 'de ';
    value += article + spell.school;

    value += spell.level === 0 ? " mineur" : " de niveau " + spell.level;

    return value;
  }

  open(spell: Spell) {
    const input = {
      spell: spell
    }
    this.modalService.open(SpellCardComponent, input);
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
