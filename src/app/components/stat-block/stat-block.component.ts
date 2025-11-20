import { Component, Input } from '@angular/core';
import { StatBlock } from 'src/models/stat-block';
import { classBySex } from 'src/models/enums/class';
import { raceBySex } from 'src/models/enums/race';
import { Stat } from 'src/models/enums/stat';

@Component({
  selector: 'stat-block',
  templateUrl: './stat-block.component.html',
  styleUrls: ['./stat-block.component.scss']
})
export class StatBlockComponent {

  ////    INPUTS    ////

  @Input() statblock: StatBlock;

  ////    METHODS    ////

  statModifier(stat: number): string {
    return (stat > 10 ? "+":"") + Math.floor((stat - 10) / 2);
  }

  ////    GETTERS    ////

  private get class() {
    return classBySex(this.statblock.class, this.statblock.sex)
  }

  private get race() {
    return raceBySex(this.statblock.race, this.statblock.sex)
  }

  private get heightType(): string {
    if (this.statblock.height < 75) return `de Très petite taille (${this.statblock.height} cm)`;
    if (this.statblock.height < 150) return `de Petite taille (${this.statblock.height} cm)`;
    if (this.statblock.height < 220) return `de taille Moyenne (${this.statblock.height} cm)`;
    if (this.statblock.height < 300) return `de Grande taille (${this.statblock.height} cm)`;
    if (this.statblock.height < 450) return `de Très grande taille (${this.statblock.height} cm)`;
    return `Gigantesque (${this.statblock.height} cm)`;
  }

  get subtext(): string {
    return `${this.class} ${this.race} (niveau ${this.statblock.level}) ${this.heightType} · ${this.statblock.alignment}`;
  }

  get statNames(): string[] {
    return Object.values(Stat);
  }
}
