import { Component } from '@angular/core';
import { StatBlock } from 'src/models/stat-block';
import { Stat } from 'src/models/enums/stat';
import { MarkdownService } from '../../services/markdown.service';
import { StatBlockService } from 'src/app/services/stat-block.service';
import { ModalService } from 'src/app/services/modal.service';
import { Class, classBySex } from 'src/models/enums/class';
import { Race, raceBySex } from 'src/models/enums/race';
import { Sex } from 'src/models/enums/sex';

const NUMBER_REGEX = /^\d+$/;

@Component({
  selector: 'app-statblock-form',
  templateUrl: './statblock-form.component.html',
  styleUrls: ['./statblock-form.component.scss']
})
export class StatblockFormComponent {

  ////    READ-ONLY    ////

  readonly CLASSES = Class;
  readonly RACES = Race;
  readonly SEX = Sex;

  readonly classBySex = classBySex;
  readonly raceBySex = raceBySex;

  ////    ATTRIBUTES    ////

  statblock = new StatBlock();

  description : string = "";

  ////    CONSTRUCTOR    ////

  constructor(
    private markdownService: MarkdownService, 
    private charactersService: StatBlockService,
    private modalService: ModalService
  ) {

  }

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
    this.statblock.firstName = firstName;
  }

  updateLastName(event: Event) {
    const lastName = (event.target as HTMLElement).innerText;
    this.statblock.lastName = lastName;
  }

  updateLevel(event: Event) {
    const level = parseInt((event.target as HTMLElement).innerText);
    this.statblock.level = isNaN(level) ? undefined : level;
  }

  updateHeight(event: Event) {
    const height = parseInt((event.target as HTMLElement).innerText);
    this.statblock.height = isNaN(height) ? undefined : height;
  }

  updateAlignment(event: Event) {
    const alignment = (event.target as HTMLElement).innerText;
    this.statblock.alignment = alignment;
  }

  updateArmorClass(event: Event) {
    const armorClass = parseInt((event.target as HTMLElement).innerText);
    this.statblock.armorClass = isNaN(armorClass) ? undefined : armorClass;
  }

  updateHitPoints(event: Event) {
    const hitPoints = parseInt((event.target as HTMLElement).innerText);
    this.statblock.hitPoints = isNaN(hitPoints) ? undefined : hitPoints;
  }

  updateSpeed(event: Event) {
    const speed = parseInt((event.target as HTMLElement).innerText);
    this.statblock.speed = isNaN(speed) ? undefined : speed;
  }

  updateStat(statPos: number, event: Event) {
    const stat = parseInt((event.target as HTMLElement).innerText);
    this.statblock.stats[statPos] = isNaN(stat) ? undefined : stat;
  }

  updateDescription() {
    this.description = this.markdownService.markdownToHtml(this.statblock.description);
  }

  createCharacter() {
    this.statblock.save()
    this.charactersService.addStatBlock(this.statblock);

    setTimeout(() => {
      this.modalService.close();
    }, 80);
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
