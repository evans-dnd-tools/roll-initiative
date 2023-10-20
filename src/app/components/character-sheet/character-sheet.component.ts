import { Component, Input } from '@angular/core';
import { Character } from 'src/models/character';
import { classBySex } from 'src/models/enums/class';
import { raceBySex } from 'src/models/enums/race';
import { Stat } from 'src/models/enums/stat';

@Component({
  selector: 'character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent {

  ////    READONLY    ////

  Stat = Stat;

  ////    INPUTS    ////

  @Input() character: Character;

  ////    METHODS    ////

  statModifier(stat: number): string {
    return (stat > 10 ? "+":"") + Math.floor((stat - 10) / 2);
  }

  ////    GETTERS    ////

  private get class() {
    return classBySex(this.character.class, this.character.sex)
  }

  private get race() {
    return raceBySex(this.character.race, this.character.sex)
  }

  private get heightType(): string {
    if (this.character.height < 75) return `de Très petite taille (${this.character.height} cm)`;
    if (this.character.height < 150) return `de Petite taille (${this.character.height} cm)`;
    if (this.character.height < 220) return `de taille Moyenne (${this.character.height} cm)`;
    if (this.character.height < 300) return `de Grande taille (${this.character.height} cm)`;
    if (this.character.height < 450) return `de Très grande taille (${this.character.height} cm)`;
    return `Gigantesque (${this.character.height} cm)`;
  }

  get subtext(): string {
    return `${this.class} ${this.race} (niveau ${this.character.level}) ${this.heightType} · ${this.character.alignment}`;
  }

  get statNames(): string[] {
    return Object.values(Stat);
  }
}
