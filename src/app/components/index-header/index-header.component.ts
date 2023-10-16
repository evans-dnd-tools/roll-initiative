import { Component } from '@angular/core';

type Filter = {
  name: string,
  active: boolean
};

@Component({
  selector: 'index-header',
  templateUrl: './index-header.component.html',
  styleUrls: ['./index-header.component.scss']
})
export class IndexHeaderComponent {

  filters: Filter[] = [
    { name: 'Tous', active: false },
    { name: 'Joueurs', active: false },
    { name: 'PNJs', active: false },
    { name: 'Sorts', active: true }
  ]
}
