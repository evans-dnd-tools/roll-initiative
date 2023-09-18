import { Component, HostListener, ElementRef } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showOptions: boolean = false;

  private hostElement: HTMLElement;

  constructor(public characters: CharactersService, elementRef: ElementRef) {
    this.hostElement = elementRef.nativeElement;
  }

  @HostListener('document:scroll', ['$event'])
  scrollEvent(event: Event) {
    
    if (window.scrollY > 124)
      this.hostElement.classList.add('fixed');
    else
    this.hostElement.classList.remove('fixed');
  
  }
}
