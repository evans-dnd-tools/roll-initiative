import { Component } from '@angular/core';
import { Character } from 'src/models/character';
import { Stat } from 'src/models/enums/stat';
import { MarkdownService } from './../../services/markdown.service';

const NUMBER_REGEX = /^\d+$/;

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss']
})
export class CharacterFormComponent {
  
  ////    ATTRIBUTES    ////

  character = new Character();

  description : string = "";

  ////    CONSTRUCTOR    ////

  constructor(private markdownService: MarkdownService) {}

  ////    INPUT EVENTS    ////

  checkInput(event: InputEvent) {
    const validInputTypes = ['insertText', 'deleteContentBackward', 'deleteContentForward', 'deleteByCut', 'insertFromPaste'];
    if (!validInputTypes.includes(event.inputType)) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  checkNumberInput(event: InputEvent) {
    if (event.inputType === 'insertText' || event.inputType === 'insertFromPaste') {
      if (!NUMBER_REGEX.test(event.data)) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
    }
    else this.checkInput(event);
  }
  
  updateFirstName(event: Event) {
    const firstName = (event.target as HTMLElement).innerText;
    this.character.firstName = firstName;
  }

  updateLastName(event: Event) {
    const lastName = (event.target as HTMLElement).innerText;
    this.character.lastName = lastName;
  }

  updateArmorClass(event: Event) {
    const armorClass = parseInt((event.target as HTMLElement).innerText);
    this.character.armorClass = isNaN(armorClass) ? undefined : armorClass;
  }

  updateHitPoints(event: Event) {
    const hitPoints = parseInt((event.target as HTMLElement).innerText);
    this.character.hitPoints = isNaN(hitPoints) ? undefined : hitPoints;
  }

  updateSpeed(event: Event) {
    const speed = parseInt((event.target as HTMLElement).innerText);
    this.character.speed = isNaN(speed) ? undefined : speed;
  }

  updateStat(statPos: number, event: Event) {
    const stat = parseInt((event.target as HTMLElement).innerText);
    this.character.stats[statPos] = isNaN(stat) ? undefined : stat;
  }

  updateDescription() {
    this.description = this.markdownService.markdownToHtml(this.character.description);
  }

  createCharacter() {
    // this.character.description = this.markdownService.htmlToMarkdown(this.description);
    console.log(this.character);
  }

  ////    METHODS    ////

  statModifier(stat: number): string {
    if (isNaN(stat)) return " ";
    return (stat > 10 ? "+":"") + Math.floor((stat - 10) / 2);
  }

  trackBy(index: any, item: any){
    return index;
  }

  ////    GETTERS    ////

  get statNames(): string[] {
    return Object.values(Stat);
  }
}
