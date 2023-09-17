import { Component, HostListener, ElementRef } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private hostElement: HTMLElement;

  constructor(public characters: CharactersService, elementRef: ElementRef) {
    this.hostElement = elementRef.nativeElement;
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Escape')
      this.closeOptions();
  }

  @HostListener('document:scroll', ['$event'])
  scrollEvent(event: Event) {
    
    if (window.scrollY > 92)
      this.hostElement.classList.add('fixed');
    else
    this.hostElement.classList.remove('fixed');
  
  }

  openOptions() {}

  closeOptions() {}
}
