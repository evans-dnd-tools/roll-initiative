import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { InitiativeService } from './services/initiative.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  constructor(
    public viewContainerRef: ViewContainerRef, 
    public initiative: InitiativeService,
    private router: Router
  ) {}

  showBackground(route: string): number {
    return this.router.url === `/${route}` ? 1 : 0;
  }

  get maskOffset(): number {
    return -window.scrollY;
  }
}
