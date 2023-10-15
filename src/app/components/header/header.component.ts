import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title: string = '';

  fixed: boolean = false;

  @HostListener('document:scroll', ['$event'])
  scrollEvent(event: Event) {
    this.fixed = window.scrollY > 148;
  }
}
