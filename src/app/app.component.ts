import { Component, ViewContainerRef } from '@angular/core';
import { CharactersInitiativeService } from './services/characters-initiative.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public viewContainerRef: ViewContainerRef, 
    public characters: CharactersInitiativeService
  ) {}

  get maskOffset(): number {
    return -window.scrollY;
  }
}
