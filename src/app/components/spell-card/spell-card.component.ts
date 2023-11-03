import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Spell } from 'src/models/spell';

@Component({
  selector: 'spell-card',
  templateUrl: './spell-card.component.html',
  styleUrls: ['./spell-card.component.scss']
})
export class SpellCardComponent {

  @Input() spell: Spell;
  @ViewChild('card') card: ElementRef;

  anim = true;

  formatSchool(school: string): string {
    const firstLetter = school.normalize('NFD').replace(/[\u0300-\u036f]/g, '')[0].toLowerCase();
    const voyels = ['a', 'e', 'i', 'o', 'u', 'y'];

    const article = voyels.includes(firstLetter) ? 'd\'' : 'de ';
    return article + school;
  }

  onEnter() {
    this.anim = false;
  }

  onLeave() {
    this.anim = true;
    this.card.nativeElement.style.transform = '';
    this.card.nativeElement.style.filter = '';
  }

  onMove(event: PointerEvent) {
    if (event.pointerType === 'touch') return;

    const card = this.card.nativeElement;
    const cardRect = card.getBoundingClientRect();

    const posX = event.screenX - cardRect.left;
    const posY = event.screenY - cardRect.top;
    
    const rotateY = -((posX - card.clientWidth/2)*16/card.clientWidth);
    const rotateX = (posY - card.clientHeight/2)*14/card.clientHeight;

    const brightness = 0.94 + ((posY/cardRect.height)/100)*12;

    card.style.transform = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
    card.style.filter = "brightness(" + brightness + ")";
  }
}
