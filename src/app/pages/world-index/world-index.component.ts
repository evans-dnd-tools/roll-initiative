import { Component } from '@angular/core';
import { SPELLS } from 'src/app/lists/spells';

@Component({
  selector: 'app-world-index',
  templateUrl: './world-index.component.html',
  styleUrls: ['./world-index.component.scss']
})
export class WorldIndexComponent {

  spells = SPELLS
}
