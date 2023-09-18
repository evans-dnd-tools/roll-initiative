import { Component, HostListener, ElementRef } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  fixed: boolean = false;
  showOptions: boolean = false;

  constructor(public characters: CharactersService) {}

  @HostListener('document:scroll', ['$event'])
  scrollEvent(event: Event) {
    this.fixed = window.scrollY > 148;
  }

  toggleCombat() {
    if (this.characters.inCombat)
      this.characters.endCombat();
    else
      this.characters.startCombat();
  }
}
