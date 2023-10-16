import { Component } from '@angular/core';
import { SPELLS } from 'src/app/lists/spells';
import { Spell } from 'src/models/spell';
import { ModalService } from '../../services/modal.service';
import { SpellCardComponent } from 'src/app/components/spell-card/spell-card.component';

@Component({
  selector: 'app-world-index',
  templateUrl: './world-index.component.html',
  styleUrls: ['./world-index.component.scss']
})
export class WorldIndexComponent {

  spells = SPELLS

  constructor(private modalService: ModalService) { }

  formatSubtext(spell: Spell) {
    let value = 'Sort ';

    const firstLetter = spell.school[0].toLowerCase();
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
}
